import { Head, Partial } from "$fresh/runtime.ts";
import { Handlers, PageProps, start } from "$fresh/server.ts";
import { User } from "../utils/oauth2.ts";
import { CtxState } from "./_middleware.ts";
import { Project } from "../model/Project.d.ts";
import { getProjects, Post } from "../utils/projects.ts";
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
  const age = Math.floor(
    (new Date(Date.now()).getTime() - new Date("08/20/2005").getTime()) /
      (1000 * 60 * 60 * 24 * 365.25),
  );
  const infos = [
    {
      start: 4,
      end: 7,
      lable: "Dance",
      column: 1,
    },
    {
      start: 7,
      lable: "Handball",
      column: 1,
    },
    {
      start: 6,
      lable: "Jubla",
      column: 2,
    },
    {
      start: 14,
      lable: "Code",
      column: 3,
    },
    {
      start: 17,
      lable: "D&D",
      column: 4,
    },
  ];
  return (
    <>
      <Head>
        <title>Rouven Hänggi</title>
        <link rel="stylesheet" href="css/card.css" />
        <link rel="stylesheet" href="css/pages.css" />
        <link rel="stylesheet" href="css/about-page.css" />
        <link rel="stylesheet" href="css/jubla-page.css" />
      </Head>
      <div id="pages-container">
        <header id="home" class="page header-page">
          <div class="header-image">
            <img src="./img/logo.png" class="logo" />
            <p></p>
          </div>
        </header>
        <section id="About Me" class="page about-page">
          <div class="about">
            <div class="column">
              <h1 class="header-text">Rouven Hänggi</h1>
              <div class="slide-down-container">
                <div id="slide-down" class="slide-down-content">
                  <div class="time-line">
                    <div
                      class="time-line-line"
                      style={`grid-row: 1 / ${age + 2};`}
                    ></div>
                    {Array(age + 1)
                      .fill(null)
                      .map((_, i) => (
                        <p class="time-line-age" style={`grid-row: ${i + 1};`}>
                          {i}
                        </p>
                      ))}
                    <p
                      class="time-line-age mobile"
                      style={`grid-row: ${age + 2};`}
                    ></p>
                    {infos.map(({ start, end, column, lable }) => (
                      <div
                        style={`grid-row: ${start + 2} / ${
                          end ? end + 2 : age + 2
                        }; margin-left: ${column * 50}px;`}
                        class="time-span time-span-with-end"
                      >
                        <h3 class="time-span-label">{lable}</h3>
                      </div>
                    ))}
                  </div>
                  <div class="relative">
                    <ul>
                      <li>{age} Years</li>
                      <li>Ruswil, Switzerland</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="Jubla" class="page jubla-page">
          <div class="jubla-page-header">
            <p class="content">
              I believe it's crucial to <b>embrace diversity</b> and{" "}
              <b>promote inclusivity</b> at every level of society.
              <br />
              <br />
              This conviction drives my engagement in <b>Jubla</b> and my{" "}
              commitment to <b>empower</b> young people.
              <br />
              <br />
              Further information:{" "}
              <a href="https://jublagraenzelos.ch">
                (Jubal Gränzelos)
              </a> and <a href="https://juwaru.ch">(Juwaru)</a>
            </p>
          </div>
          <Flugi />
        </section>
        <section id="Projects" class="page projects-page">
          {renderProjects(data.projects)}
        </section>
      </div>
      <ArrowDown />
      <script src="js/pages.js"></script>
    </>
  );
}
