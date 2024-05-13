import { extract } from "https://deno.land/std@0.163.0/encoding/front_matter.ts";

const DEFAULT_PATH = "./routes/projects/md";

export interface Post {
  slug: string;
  title: string;
  publishedAt: string;
  content: string;
  noImgContent: string;
  snippet: string;
  repository: string;
  app: string;
  number: number;
}

export const getProjects =  () => {
  const projects = Deno.readDirSync(DEFAULT_PATH);
  const result = [];
  for (const project of projects) {
    if(project.isFile && project.name.endsWith(".md")) {
      result.push(getProject(project.name));
    }    
  }
  result.sort((a, b) => {
    return a.number - b.number;
  });
  return result;
}

export const getProject = (id: string): Post => {
  const text = Deno.readTextFileSync(`${DEFAULT_PATH}/${id}`);
  const { attrs, body } = extract(text);
  
  return {
    slug: id,
    title: attrs.title as string,
    publishedAt: attrs.month as string,
    content: body.replace(/!\[(.*?)\]\((.*?)\)/g,  '<img alt="$1" src=$2 />'),
    noImgContent: body.replace(/!\[(.*?)\]\((.*?)\)/g,  ''),
    snippet: attrs.snippet as string,
    repository: attrs.repository as string,
    app: attrs.app as string,
    number: attrs.number as number
  };
}

