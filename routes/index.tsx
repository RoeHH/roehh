import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import { AboutMe } from "@/components/sections/about-me.tsx";
import { ArrowDown } from "@/components/ArrowDown.tsx";
import { Jubla } from "@/components/sections/jubla.tsx";
import { getProjects } from "@/utils/projects.ts";
import { page } from "fresh";
import { Projects } from "@/components/sections/projects.tsx";


interface Data {
  project: any;
}

export const handler =  define.handlers({
  GET(ctx) {
    return page({
      projects: getProjects(),
    });
  }}
);


export default define.page<typeof handler>(function Home({ data }) {
  return (
    <>
      <Head>
        <title>Rouven Hänggi</title>
        <link rel="icon" href="./img/avatar.jpg" />
      </Head>
      <div id="pages-container">
        <header id="home" class="page header-page">
          <div class="header-image">
            <img src="./img/logo.png" class="logo" />
            <p></p>
          </div>
        </header>
        <AboutMe />
        <Jubla />
        <Projects />
      </div>
      <ArrowDown />
      <script src="js/pages.js"></script>
    </>
  );
});