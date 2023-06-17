import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts"; 
import { User } from "../utils/oauth2.ts";
import { CtxState } from "./_middleware.ts";

interface Project {
    month: string;
    title: string;
    description: string;
    repository: string;
    app: string;
}



export const handler: Handlers<{projects: Project[], user: User | undefined}, CtxState> = {
  async GET(_req, ctx) {
    const projects =  await JSON.parse(new TextDecoder("utf-8").decode(Deno.readFileSync("C:/Users/Admin/Documents/git/roehh/data/projects.json")));
    
    return ctx.render({ projects , user: ctx.state.user});
  },
};

export default function Home({data}: PageProps<{projects: Project[], user: User | undefined}>) {
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
              <h1 class="header-text">{data.user?.userId ? "Hey " : "" }Rouven Hänggi</h1>
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
          <p>
            Repository:<a href={project.repository}>
              Repository
            </a>
          </p>
          {project.app ? (
          <p>
            Productive
            App:<a href={project.app}>
              Productive App
            </a>
          </p>
          ) : ""}
          <div class="card-author">
            <div class="author-avatar" href="#">
              <img src="./images/avatar.jpg" />
            </div>
            <svg class="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4">
              </path>
            </svg>
            <div class="author-name">
              <div class="author-name-prefix">Author</div>
              Rouven Hänggi
            </div>
          </div>
        </article>
        ))}
      </section>
    </>
  );
}
