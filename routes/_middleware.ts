import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies, setCookie } from "https://deno.land/std@0.146.0/http/cookie.ts"
import { oauth2Client, gitHubApi, User } from "../utils/oauth2.ts";
const kv = await Deno.openKv();

export interface CtxState {
  user: User | undefined
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<CtxState>,
) {

  const { pathname, searchParams, href, origin } = new URL(req.url);
  
  const allowedProtocols = ["https://", "http://", "ftp://", "ftps://", "s"];
  if (allowedProtocols.some(protocol => pathname.substring(1).startsWith(protocol))) {
    const short = await kv.get(["shorts", pathname.substring(1)], { consistency: "eventual" });
    if (req.method === "GET" && short.value) return Response.redirect(short.value, 302);
    if(pathname.substring(1).startsWith("s")) return new Response("Short not found", { status: 404 })

    const id = await getNewShortId();
    kv.set(["shorts", id], pathname.substring(1))
    return new Response(`Your Short: ${origin}/${id}`, { status: 202 })
  }

  const maybeAccessToken = getCookies(req.headers)["gh_token"];
  if (maybeAccessToken) {
    const user = await gitHubApi.getAdminOrFuckOf(maybeAccessToken)
    if (user) {
      ctx.state.user = user
      return await ctx.next();
    }
  }

 // This is an oauth callback request.
  const code = searchParams.get("code");  
  if (!code) {
    return await ctx.next();
  }

  const accessToken = (await oauth2Client.code.getToken(req.url)).accessToken;

  searchParams.delete("code")
  

  const response = new Response(undefined, {status: 302 , headers: {'location': href }});
  setCookie(response.headers, {
    name: "gh_token",
    value: accessToken,
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
  });
  return response
 
}

const getNewShortId = async (): Promise<string> => {
  const id = "s" + Math.random().toString(36).substr(2, 3);
  if ((await kv.get(["shorts", id], { consistency: "eventual" })).value) {
    return getNewShortId();
  }
  return id;
};