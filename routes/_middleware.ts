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
  if(new URL(req.url).pathname.split("/")[1] === "favicon.ico") {
    return fetch("https://roeh.ch/img/logo.png");
  }

  const maybeAccessToken = getCookies(req.headers)["gh_token"];
  if (maybeAccessToken) {
    const user = await gitHubApi.getUserData(maybeAccessToken)
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

  const user = await gitHubApi.getUserData(accessToken)
  ctx.state.user = user
  

  const response = await ctx.next();
  setCookie(response.headers, {
    name: "gh_token",
    value: accessToken,
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
  });
  return response
 




  /*
  ctx.state.lists = [];
  const listsString = getCookies(req.headers).lists;
  if(listsString !== undefined) {
    const lists = listsString.split("-")    
    for (const list of lists) {
      ctx.state.lists.push(await db.getTodoList(list) || { name: list, todos: [] });
    }
  }
  

  
  req.headers.get("Cookie")?.split(";").map((cookie) => {
    console.log(cookie.split("=")[1]);
    
    const list = db.getTodoList(cookie.split("=")[1])
    ctx.state.lists.push(list);
    console.log(list);
    
  })*/
  const resp = await ctx.next();

  return resp;
}