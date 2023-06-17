/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

Deno.openKv().then((kv) => {
  kv.delete(["MONGO_TO_KV_LAST_UPDATE_DATE"]);
});
import "https://raw.githubusercontent.com/RoeHH/mongo-to-deno-kv/main/to-kv.ts";

await start(manifest);
