import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roeh</title>
        <link rel="stylesheet" href="card.css" />
      </Head>
      <header class="header">
        <img src="./images/logo.png" class="logo" />
        <h1 class="header-text">Rouven Hänggi</h1>
        <p></p>
    </header>
    <section class="card-list">

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

        <article class="card">
            <header class="card-header">
            <h3>16.09.2020 - 24.09.2020</h3>
            <h2>ÜK 101</h2>
            </header>
            <p>Im HTML ÜK erstellt ich nebenbei eine Seite in welcher ich das ÜK &quot;Dokumentierte&quot; habe und Übungen gelöst habe.</p>
            <p>In diesem ÜK habe ich mit Gian die Arbeit gemacht die bei https://101.roeh.ch zu finden ist.</p>
            <p>Repository:<a href="https://github.com/RoeHH/-K101.git">Repository</a></p>
            <p>Productive App:<a href="https://optimistic-jones-b147b6.netlify.app/start.html">Productive App</a></p>
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
      </section>
    </>
  );
}
