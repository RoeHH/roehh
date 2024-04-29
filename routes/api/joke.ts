import { FreshContext } from "$fresh/server.ts";

const kv = await Deno.openKv();

export const handler = async (_req: Request, _ctx: FreshContext): Response => {
  const a = []
  for await (const entry of kv.list({ prefix: ["roehh", "projects"] })) {
    console.log(entry.value, 'entry');
    
    a.push(entry.value);
  }
  console.log(a, 'a');
  
    return new Response(a);
};
