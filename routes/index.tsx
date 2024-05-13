import { Head, Partial } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { User } from "../utils/oauth2.ts";
import { CtxState } from "./_middleware.ts";
import { Project } from "../model/Project.d.ts";
import { Post, getProjects } from "../utils/projects.ts";
import { CardAuthor } from "../components/CardAuthor.tsx";
import { renderProjects } from "./projects/index.tsx";
import { ArrowDown } from "../components/ArrowDown.tsx";

export const handler: Handlers<
  { projects: Post[]; user: User | undefined },
  CtxState
> = {
  GET(_req: Request, ctx) {    
    return ctx.render({
      projects: getProjects(),
      user: ctx.state.user,
    });
  },
};

export default function Home(
  { data }: PageProps<{ projects: Post[]; user: User | undefined }>,
) {
  return (
    <>
      <Head>
        <title>Rouven Hänggi</title>
        <link rel="stylesheet" href="card.css" />
        <link rel="stylesheet" href="pages.css" />
      </Head>
      <div id="pages-container">
        <header id="home" class="page">
          <div class="header-image">
            <img src="./images/logo.png" class="logo" />
            <p></p>
          </div>
          <section>
            <div class="about">
              <div class="column">
                <h1 class="header-text">Rouven Hänggi</h1>
                <ul>
                  <li>
                    {Math.floor(
                      (new Date(Date.now()).getTime() -
                        new Date("08/20/2005").getTime()) /
                        (1000 * 60 * 60 * 24 * 365.25)
                    )}{" "}
                    Years
                  </li>
                  <li>Ruswil, Switzerland</li>
                </ul>
              </div>
            </div>
          </section>
        </header>
        <section id="projects" class="page project-page">
          <h2 class="projects-header">Projects</h2>
          {renderProjects(data.projects)}
        </section>
        {/*
        <section id="hi" class="page">
          <h2>Coding</h2>
        </section>
        */}
      </div>
      <ArrowDown />
      <script src="pages.js"></script>
    </>
  );
}
