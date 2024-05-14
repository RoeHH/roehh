import { Head, Partial } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { User } from "../../utils/oauth2.ts";
import { CtxState } from "../_middleware.ts";
import { Post, getProjects } from "../../utils/projects.ts";
import { CardAuthor } from "../../components/CardAuthor.tsx";

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
        <title>Projects</title>
        <link rel="stylesheet" href="css/card.css" />
      </Head>
      <Partial name="projects">
        <div class="centered">
          <h2 class="projects-header xl">Projects</h2>
          {renderProjects(data.projects)}
        </div>
      </Partial>
    </>
  );
}

export function renderProjects(projects: Post[]) {
  return (
    <section class="card-list" style="width: 95%; margin: auto auto 0 auto;">
      {projects.map((project) => (
        <article class="card">
          <header class="card-header">
            <h3>{project.publishedAt}</h3>
            <h2>{project.title}</h2>
          </header>
          <p>{project.snippet}</p>
          <p dangerouslySetInnerHTML={{ __html: project.noImgContent }}></p>
          {project.repository ? (
            <p>
              Repository: <a href={project.repository}>Open Repository</a>
            </p>
          ) : (
            ""
          )}
          {project.app ? (
            <p>
              App: <a href={project.app}>Open App</a>
            </p>
          ) : (
            ""
          )}
          <CardAuthor />
        </article>
      ))}
      <div class="projects-page-header mobile">
        <h2>Projects</h2>
        <p>A collection of all the IT projects I have created so far.</p>
      </div>
      {projects.reverse().map((project) => (
        <article class="card mobile">
          <header class="card-header">
            <h3>{project.publishedAt}</h3>
            <h2>{project.title}</h2>
          </header>
          <p>{project.snippet}</p>
          <p dangerouslySetInnerHTML={{ __html: project.noImgContent }}></p>
          {project.repository ? (
            <p>
              Repository: <a href={project.repository}>Open Repository</a>
            </p>
          ) : (
            ""
          )}
          {project.app ? (
            <p>
              App: <a href={project.app}>Open App</a>
            </p>
          ) : (
            ""
          )}
        </article>
      ))}
    </section>
  );
}