import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { User } from "../utils/oauth2.ts";
import { CtxState } from "./_middleware.ts";
import { Project } from "../model/Project.d.ts";
import { getProjects } from "../utils/db.ts";
import { CardAuthor } from "../components/CardAuthor.tsx";

export const handler: Handlers<
  { projects: Project[]; user: User | undefined },
  CtxState
> = {
  async GET(_req: Request, ctx) {
    return ctx.render({
      projects: await getProjects(),
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
        <title>RoeH</title>
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
                Rouven Hänggi
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

      <h2 class="projects-header">Projects
      </h2>
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
      </section>
    </>
  );
}
