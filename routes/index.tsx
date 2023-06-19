import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { User } from "../utils/oauth2.ts";
import { CtxState } from "./_middleware.ts";
import { Project } from "../model/Project.d.ts";
import { getProjects, updateKvWithMongoData } from "../utils/db.ts";
import { CardAuthor } from "../components/CardAuthor.tsx";

export const handler: Handlers<
  { projects: Project[]; user: User | undefined },
  CtxState
> = {
  async GET(_req, ctx) {
    const projects = await getProjects();

    return ctx.render({
      projects,
      user: ctx.state.user,
    });
  },
};

export default function Home(
  { data }: PageProps<{ projects: Project[]; user: User | undefined }>,
) {
  return (
    <>
      <Head>
        <title>Roeh</title>
        <link rel="stylesheet" href="card.css" />
      </Head>

      <header>
        <div class="header-image">
          <img src="./images/logo.png" class="logo" />
          <p></p>
        </div>
        <section>
          <div class="about">
            <div class="column">
              <h1 class="header-text">
                {data.user ? "Hey Rouven" : "Rouven Hänggi"}
              </h1>
              <ul>
                <li>
                  {Math.floor(
                    (new Date(Date.now()).getTime() -
                      (new Date("08/20/2005")).getTime()) /
                      (1000 * 60 * 60 * 24 * 365.25),
                  )} Years
                </li>
                <li>Ruswil, Switzerland</li>
              </ul>
            </div>
          </div>
        </section>
      </header>

      <h2 class="projects-header">Projects</h2>
      <section class="card-list">
        {data.projects.map((project) => (
          <article class="card">
            <header class="card-header">
              <h3>{project.month}</h3>
              <h2>{project.title}</h2>
            </header>
            <p>{project.description1}</p>
            <p>{project.description2}</p>
            {project.repository
              ? (
              <p>
                Repository: <a href={project.repository}>Open Repository</a>
              </p>
            )
            : ""}
            {project.app
              ? (
                <p>
                  App: <a href={project.app}>Open App</a>
                </p>
              )
              : ""}
            <CardAuthor />
          </article>
        ))}

      {data.user ? (
        <form class="card card-edit">
          <header class="card-header">
            <h3>
              <input type="text" placeholder="Month/Date" id="date"></input>
            </h3>
            <h2>
              <input type="text" placeholder="Title" id="title"></input>
            </h2>
          </header>
          <p>
            <textarea id="description1" placeholder="Short description" rows="2" cols="30">
            </textarea>
          </p>
          <p>
            <textarea id="description2" placeholder="Project journey description" rows="4" cols="30">
            </textarea>
          </p>
          <p>
            Repository:
            <input type="url" id="repository"></input>
          </p>
          <p>
            App:
            <input type="url" id="app"></input>
          </p>
          <button type="submit">Submit</button>
          <CardAuthor />
        </form>
      ) : ""}
      </section>
    </>
  );
}
