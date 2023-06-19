import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { MongoClient } from "https://deno.land/x/atlas_sdk@v1.0.2/mod.ts";
import { Project } from "../model/Project.d.ts";

const kv = await Deno.openKv();

export async function updateKvWithMongoData() {

  //init MongoDb
  const secrets = {
    key: Deno.env.get("MONGO_DATA_API_KEY"),
    app: Deno.env.get("MONGO_APP_ID"),
  };
  if (!secrets.app || !secrets.key) {
    throw new Error(
      "environment variable MONGO_DATA_API_KEY or MONGO_APP_ID not set",
    );
  }

  const client = new MongoClient({
    endpoint: "https://data.mongodb-api.com/app/" + secrets.app +
      "/endpoint/data/v1",
    dataSource: "iccee0",
    auth: {
      apiKey: secrets.key,
    },
  });

  const db = client.database("roehh");
  const projectsCollection = db.collection<Project>("projects");

  //Clear kv
  for await (const entry of kv.list({ prefix: ["roehh", "projects"] })) {
    await kv.delete(entry.key);
  }

  //Fill kv
  projectsCollection.find({}).then((projects) => {
    projects.forEach(async (project) => {
      await kv.set(["roehh", "projects", project.number.toString()], project);
    });
  });
}


export async function getProjects() {
  const projects: Project[] = [];
  for await (const entry of kv.list({ prefix: ["roehh", "projects"] })) {
    projects.push(entry.value);
  }
  return projects.sort((a, b) => a.number - b.number);
}