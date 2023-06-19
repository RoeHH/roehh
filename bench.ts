import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { MongoClient } from "https://deno.land/x/atlas_sdk@v1.0.2/mod.ts";

interface UserConfig {
  id: string;
  activePlaylist: string;
  playlists: string[];
}

const newFakeConfig = {
  id: "fake",
  activePlaylist: "fake",
  playlists: ["fake"],
}

Deno.bench("set-then-get-from-kv", async () => {

  const kv = await Deno.openKv();

  await kv.set(["users", "alice"], newFakeConfig);

  const userConfig = await kv.get(["users", "alice"]);

  

});



Deno.bench("set-then-get-from-mongo", async () => {
  const secrets = {
    key: Deno.env.get("MONGO_DATA_API_KEY"),
    app: Deno.env.get("MONGO_APP_ID"),
  };
  if (!secrets.app || !secrets.key) {
    throw new Error("environment variable MONGO_DATA_API_KEY or MONGO_APP_ID not set");
  }

  const client = new MongoClient({
    endpoint: "https://data.mongodb-api.com/app/" + secrets.app + "/endpoint/data/v1",
    dataSource: "iccee0",
    auth: {
      apiKey: secrets.key,
    },
  });

  
  const db = client.database("memories");
  const userConfigCollection = db.collection<UserConfig>("userConfig");


  await userConfigCollection.insertOne(newFakeConfig);

  const userConfig = await userConfigCollection.findOne({ id: "fake" });

  

});