import { Handlers, PageProps } from "$fresh/server.ts";
import { CSP_CONTEXT } from "https://raw.githubusercontent.com/RoeHH/fresh/main/runtime.ts";
const kv = await Deno.openKv();

const getNewShortId = async (): Promise<string> => {
  const id = Math.random().toString(36).substr(2, 3);
  if ((await kv.get(["shorts", id], { consistency: "eventual" })).value) {
    return getNewShortId();
  }
  return id;
};

export const handler: Handlers = {
  async GET(req, ctx) {
    
    const { pathname } = new URL(req.url);

    const short = await kv.get(["shorts", pathname.substring(1)], { consistency: "eventual" });
    if (req.method === "GET" && short.value) return Response.redirect(short.value, 302);

    const id = await getNewShortId();
    kv.set(["shorts", id], pathname.substring(1))


    return ctx.render({
      short
    });
  },
};

export default function Greet(props: PageProps<{short: string}>) {
  return <div>{props.data.short}</div>;
}
