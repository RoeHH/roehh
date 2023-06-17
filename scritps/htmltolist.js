import "https://deno.land/x/dotenv/load.ts";

function convertHTMLtoJSON(htmlString) {
  const monthStartIndex = htmlString.indexOf('<h3>') + 4;
  const monthEndIndex = htmlString.indexOf('</h3>');
  const month = htmlString.substring(monthStartIndex, monthEndIndex).trim();

  const titleStartIndex = htmlString.indexOf('<h2>') + 4;
  const titleEndIndex = htmlString.indexOf('</h2>');
  const title = htmlString.substring(titleStartIndex, titleEndIndex).trim();

  const descriptionStartIndex = htmlString.indexOf('<p>', titleEndIndex) + 3;
  const descriptionEndIndex = htmlString.indexOf('</p>', descriptionStartIndex);
  const description1 = htmlString.substring(descriptionStartIndex, descriptionEndIndex).trim();

  const descriptionStartIndex2 = htmlString.indexOf('<p>', descriptionEndIndex + 1) + 3;
  const descriptionEndIndex2 = htmlString.indexOf('</p>', descriptionStartIndex2);
  const description2 = htmlString.substring(descriptionStartIndex2, descriptionEndIndex2).trim();

  const repositoryStartIndex = htmlString.indexOf('<a href="', descriptionEndIndex2) + 9;
  const repositoryEndIndex = htmlString.indexOf('">', repositoryStartIndex);
  const repository = htmlString.substring(repositoryStartIndex, repositoryEndIndex);

  const appStartIndex = htmlString.indexOf('<a href="', repositoryEndIndex) + 9;
  const appEndIndex = htmlString.indexOf('">', appStartIndex);
  let app = undefined;
  if (appStartIndex != 8)
    app = htmlString.substring(appStartIndex, appEndIndex);

  const json = {
    month: month,
    title: title,
    description1: description1,
    description2: description2,
    repository: repository,
    app
  };

  return json;
}


const st = (new TextDecoder("utf-8").decode(await Deno.readFile('./routes/index.tsx'))).split('<article class="card">');

st.shift();

console.log(st.length);

const json = st.map((htmlString) => convertHTMLtoJSON(htmlString));

Deno.writeFileSync('./data/projects.json', new TextEncoder().encode(JSON.stringify(json, null, 2)))



const htmlString = `
<article class="card">
  <header class="card-header">
    <h3>August 2020</h3>
    <h2>LabyrinthTheGame</h2>
  </header>
  <p>Erstes Projekt in der Lehre.</p>
  <p>Labyrinth Game gemacht mit Processing..</p>
  <p>Repository:<a href="https://github.com/RoeHH/blj_Labyrinth_the_Game.git">Repository</a></p>
  <p>Productive App:<a href="https://cloud.ict-bz.ch/index.php/s/nRFHkyVayl03vhK">Productive App</a></p>
  <div class="card-author">
    <div class="author-avatar" href="#">
      <img src="./images/avatar.jpg" />
    </div>
    <svg class="half-circle" viewBox="0 0 106 57">
      <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4">
      </path>
    </svg>
    <div class="author-name">
      <div class="author-name-prefix">Author</div>
      Rouven Hänggi
    </div>
  </div>
</article>
`;

const jsonResult = convertHTMLtoJSON(htmlString);
console.log(JSON.stringify(jsonResult, null, 2));

