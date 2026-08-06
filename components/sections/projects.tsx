import { getProjects, Post } from "@/utils/projects.ts";
import { CardAuthor } from "@/components/CardAuthor.tsx";

export function Projects() {
  return (
    <section id="Projects" class="page projects-page">
      {renderProjects(getProjects())}
    </section>
  );
}

function renderProjects(projects: Post[]) {
  return (
    <>
      {" "}
      <div class="projects-page-header">
        <h2>Projects</h2>
        <p>A collection of all coding projects I have created so far.</p>
      </div>
      <section class="card-list" style="width: 95%; margin: auto auto 0 auto;">
        {projects.map((project) => (
          <article class="card">
            <header class="card-header">
              <h3>{project.publishedAt}</h3>
              <h2>{project.title}</h2>
            </header>
            <p>{project.snippet}</p>
            <p dangerouslySetInnerHTML={{ __html: project.noImgContent }}></p>
            {project.repository
              ? (
                <p>
                  Repository: <a href={project.repository}>Open Repository</a>
                </p>
              )
              : (
                ""
              )}
            {project.app
              ? (
                <p>
                  App: <a href={project.app}>Open App</a>
                </p>
              )
              : (
                ""
              )}
            <CardAuthor />
          </article>
        ))}
        <div class="projects-page-header mobile">
          <h2>Projects</h2>
          <p>A collection of all coding projects I have created so far.</p>
        </div>
        {projects.reverse().map((project) => (
          <article class="card mobile">
            <header class="card-header">
              <h3>{project.publishedAt}</h3>
              <h2>{project.title}</h2>
            </header>
            <p>{project.snippet}</p>
            <p dangerouslySetInnerHTML={{ __html: project.noImgContent }}></p>
            {project.repository
              ? (
                <p>
                  Repository: <a href={project.repository}>Open Repository</a>
                </p>
              )
              : (
                ""
              )}
            {project.app
              ? (
                <p>
                  App: <a href={project.app}>Open App</a>
                </p>
              )
              : (
                ""
              )}
          </article>
        ))}
      </section>
    </>
  );
}
