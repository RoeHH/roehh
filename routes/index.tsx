import { Head, Partial } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { User } from "../utils/oauth2.ts";
import { CtxState } from "./_middleware.ts";
import { Project } from "../model/Project.d.ts";
import { Post, getProjects } from "../utils/projects.ts";
import { CardAuthor } from "../components/CardAuthor.tsx";
import { renderProjects } from "./projects/index.tsx";
import { ArrowDown } from "../components/ArrowDown.tsx";
import { Flugi } from "../components/Flugi.tsx";

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

export default function Home({
  data,
}: PageProps<{ projects: Post[]; user: User | undefined }>) {
  return (
    <>
      <Head>
        <title>Rouven Hänggi</title>
        <link rel="stylesheet" href="css/card.css" />
        <link rel="stylesheet" href="css/pages.css" />
        <link rel="stylesheet" href="css/jubla-page.css" />
      </Head>
      <div id="pages-container">
        <header id="home" class="page">
          <div class="header-image">
            <img src="./img/logo.png" class="logo" />
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
        <section id="jubla" class="page jubla-page">
          <div class="jubla-page-header">
            <p class="content">
              I believe it's crucial to <b>embrace diversity</b> and <br />
              <b>promote inclusivity</b> at every level of society. <br />
              <br />
              This conviction drives my engagement with <b>Jungwacht</b> and
              especially <b>Jubla Gränzenlos</b>, where we provide a space for
              youth to thrive.
            </p>
          </div>
          <Flugi />
        </section>
        <section id="projects" class="page projects-page">
          <div class="projects-page-header">
            <h2>Projects</h2>
            <p>A collection of all the IT projects I have created so far.</p>
          </div>
          {renderProjects(data.projects)}
        </section>
      </div>
      <ArrowDown />
      <script src="js/pages.js"></script>
    </>
  );
}
