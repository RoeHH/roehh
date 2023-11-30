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
        <link rel="stylesheet" href="/stars.scss" />
        <link rel="stylesheet" href="/card.scss" />
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
      <section id="universe">
        <div id="stars">
          <div id="stars2">
            <div id="stars3">
                <img id="rocket" src="./images/astronaut.svg" alt="Cute little astronaut hanging on to an UFO like it is a ballon" />
                <img id="donut" src="./images/donut.svg" alt="A cute donut planet" />
                <img id="meditate" src="./images/meditate.svg" alt="A meditating astronaut with a planet halo" />
              <img id="earth" src="./images/earth.svg" alt="Planet Earth" />
            </div>
          </div>
        </div>
      </section>
      <script src="position.js"></script>
    </>
  );
}
