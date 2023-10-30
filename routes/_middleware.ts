import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies, setCookie } from "https://deno.land/std@0.146.0/http/cookie.ts"
import { oauth2Client, gitHubApi, User } from "../utils/oauth2.ts";

export interface CtxState {
  user: User | undefined
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<CtxState>,
) {
  const maybeAccessToken = getCookies(req.headers)["gh_token"];
  if (maybeAccessToken) {
    const user = await gitHubApi.getAdminOrFuckOf(maybeAccessToken)
    if (user) {
      ctx.state.user = user
      return await ctx.next();
    }
  }

 // This is an oauth callback request.
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  if (!code) {
    return await ctx.next();
  }


  const accessToken = (await oauth2Client.code.getToken(req.url)).accessToken;

  url.searchParams.delete("code")
  

  const response = new Response(undefined, {status: 302 , headers: {'location': url.href }});
  setCookie(response.headers, {
    name: "gh_token",
    value: accessToken,
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
  });
  return response
 
}