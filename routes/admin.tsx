import { Head } from "$fresh/runtime.ts";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { User } from "../utils/oauth2.ts";
import { CtxState } from "./_middleware.ts";
import { Project } from "../model/Project.d.ts";
import {
  getProjects,
  insertProject,
  updateKvWithMongoData,
} from "../utils/db.ts";
import { CardAuthor } from "../components/CardAuthor.tsx";

interface AdminPagePageprops {
  projects: Project[];
  user: User | undefined;
}

export const handler: Handlers<
  AdminPagePageprops,
  CtxState
> = {
  async GET(req: Request, ctx: HandlerContext<AdminPagePageprops, CtxState>) {
    if (ctx.state.user) {
      const url = new URL(req.url);
      if (url.searchParams.get("reload") === "true") {
        await updateKvWithMongoData();
        url.searchParams.delete("reload");
        return Response.redirect(url.href);
      }
      if (
        url.searchParams.has("date") && url.searchParams.has("title") &&
        url.searchParams.has("description1") &&
        url.searchParams.has("description2")
      ) {
        console.log("Adding new project");
        await insertProject({
          month: url.searchParams.get("date")!,
          title: url.searchParams.get("title")!,
          description1: url.searchParams.get("description1")!,
          description2: url.searchParams.get("description2")!,
          repository: url.searchParams.get("repository")!,
          app: url.searchParams.get("app")!,
        });
      }
      return ctx.render({
        projects: await getProjects(),
        user: ctx.state.user,
      });
    }
    return Response.redirect("/login");
  },
};

export default function Home(
  { data }: PageProps<AdminPagePageprops>,
) {
  return (
    <>
      <Head>
        <title>RoeH</title>
        <link rel="stylesheet" href="card.css" />
        <link rel="stylesheet" href="history.css" />
      </Head>
      <div class="container">
      <section>
        <header>
          <div class="header-image">
            <img src="./images/logo.png" class="logo" />
            <p></p>
          </div>
          <div>
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
              {/*<iframe style={{borderRadius: '12px', margin: 'auto'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1EphN67AaXPTwX?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>*/}
            </div>
          </div>
        </header>
      </section>
      <section>
        <GHActivity />
      </section>
      <section>
        <h2 class="projects-header">
          Projects
          {data.user
            ? (
              <form class="reload" action="/" method="get">
                <input type="hidden" name="reload" value="true" />
                <button type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style="fill: white;"
                    viewBox="0 0 30 30"
                    width="30px"
                    height="30px"
                  >
                    <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z" />
                  </svg>
                </button>
              </form>
            )
            : ""}
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

          {data.user
            ? (
              <form action="/" method="get" class="card card-edit">
                <header class="card-header">
                  <h3>
                    <input type="text" placeholder="Month/Date" name="date">
                    </input>
                  </h3>
                  <h2>
                    <input type="text" placeholder="Title" name="title"></input>
                  </h2>
                </header>
                <p>
                  <textarea
                    name="description1"
                    placeholder="Short description"
                    rows={2}
                    cols={30}
                  >
                  </textarea>
                </p>
                <p>
                  <textarea
                    name="description2"
                    placeholder="Project journey description"
                    rows={4}
                    cols={30}
                  >
                  </textarea>
                </p>
                <p>
                  Repository:
                  <input type="url" name="repository"></input>
                </p>
                <p>
                  App:
                  <input type="url" name="app"></input>
                </p>
                <button type="submit">Submit</button>
                <CardAuthor />
              </form>
            )
            : ""}
        </section>
      </section></div>
    </>
  );
}
