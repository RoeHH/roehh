function convertHTMLtoJSON(htmlString) {
  const monthStartIndex = htmlString.indexOf('<h3>') + 4;
  const monthEndIndex = htmlString.indexOf('</h3>');
  const month = htmlString.substring(monthStartIndex, monthEndIndex).trim();

  const titleStartIndex = htmlString.indexOf('<h2>') + 4;
  const titleEndIndex = htmlString.indexOf('</h2>');
  const title = htmlString.substring(titleStartIndex, titleEndIndex).trim();

  const descriptionStartIndex = htmlString.indexOf('<p>', titleEndIndex) + 3;
  const descriptionEndIndex = htmlString.indexOf('</p>', descriptionStartIndex);
  const description = htmlString.substring(descriptionStartIndex, descriptionEndIndex).trim();

  const repositoryStartIndex = htmlString.indexOf('<a href="', descriptionEndIndex) + 9;
  const repositoryEndIndex = htmlString.indexOf('">', repositoryStartIndex);
  const repository = htmlString.substring(repositoryStartIndex, repositoryEndIndex);

  const appStartIndex = htmlString.indexOf('<a href="', repositoryEndIndex) + 9;
  const appEndIndex = htmlString.indexOf('">', appStartIndex);
  const app = htmlString.substring(appStartIndex, appEndIndex);


  const json = {
    month: month,
    title: title,
    description: description,
    repository: repository,
    app: app
  };

  return json;
}

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
