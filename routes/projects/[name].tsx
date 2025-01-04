import { Handlers } from "$fresh/server.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import { getProject, Post } from "../../utils/projects.ts";

export const handler: Handlers<Post> = {
  GET(_req, ctx) {
    const post = getProject(ctx.params.name);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <>
      <Head>
        <style>
          {`
        ul {
            list-style: disc !important;
        }
        li {
          list-style: decimal !important;
        }
        `}
        </style>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <link rel="stylesheet" href="css/projects.css" />
        <title>{post.title}</title>
      </Head>
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <h1 class="text-5xl font-bold">{post.title}</h1>
        <time class="text-gray-500">{post.publishedAt}</time>
        <div
          class="mt-8 markdown-body"
          dangerouslySetInnerHTML={{
            __html: render(`## ${post.snippet} \n` + post.content),
          }}
        />
      </main>
    </>
  );
}
