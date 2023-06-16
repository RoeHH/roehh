import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roeh</title>
        <link rel="stylesheet" href="card.css" />
      </Head>

      <header>
        <div class="header-image">
          <img src="./images/logo.png" class="logo" />
          <p></p>
        </div>
        <section>
          <div class="about">
            <div class="column">
              <h1 class="header-text">Rouven Hänggi</h1>
              <ul>
                <li>
                  {Math.floor(
                    (new Date(Date.now()).getTime() -
                      (new Date("08/20/2005")).getTime()) /
                      (1000 * 60 * 60 * 24 * 365.25),
                  )} Years
                </li>
                <li>Ruswil, Switzerland</li>
                <li></li>
              </ul>
            </div>
          </div>
        </section>
      </header>

      <section class="card-list">
        <article class="card">
          <header class="card-header">
            <h3>August 2020</h3>
            <h2>LabyrinthTheGame</h2>
          </header>
          <p>Erstes Projekt in der Lehre.</p>
          <p>Labyrinth Game gemacht mit Processing..</p>
          <p>
            Repository:<a href="https://github.com/RoeHH/blj_Labyrinth_the_Game.git">
              Repository
            </a>
          </p>
          <p>
            Productive
            App:<a href="https://cloud.ict-bz.ch/index.php/s/nRFHkyVayl03vhK">
              Productive App
            </a>
          </p>
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
          <p>
            Im HTML ÜK erstellt ich nebenbei eine Seite in welcher ich das ÜK
            &quot;Dokumentierte&quot; habe und Übungen gelöst habe.
          </p>
          <p>
            In diesem ÜK habe ich mit Gian die Arbeit gemacht die bei
            https://101.roeh.ch zu finden ist.
          </p>
          <p>
            Repository:<a href="https://github.com/RoeHH/-K101.git">
              Repository
            </a>
          </p>
          <p>
            Productive
            App:<a href="https://optimistic-jones-b147b6.netlify.app/start.html">
              Productive App
            </a>
          </p>
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
            <h3>Sep-Dez 2020</h3>
            <h2>Yuumi Discord-Bot</h2>
          </header>
          <p>Node.Js Discord-Bot</p>
          <p>
            Ich erstellte einen Discord-Bot mit Discord.js dieser kann Stats
            über den Server ausgeben, Zufallsnummern generieren, den Avatar
            eines Benutzers anzeigen und per Google translate API Texte
            übersetzen.
          </p>
          <p>
            Repository:<a href="https://gitlab.wuersch.org/iccee0/yuumi-dc-bot.git">
              Repository
            </a>
          </p>

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
            <h3>Nov 2020</h3>
            <h2>roeh.ch V1</h2>
          </header>
          <p>Die erste version von roeh.ch</p>
          <p>
            Nach dem HTML ÜK wollte ich meine skills in HTML/CSS vertiefen.
            Deswegen erstellte diese seite auf welcher ich auch sogleich meine
            Lernerfolge Dokumentierte.
          </p>
          <p>
            Repository:<a href="https://github.com/RoeHH/roehV1.git">
              Repository
            </a>
          </p>
          <p>
            Productive
            App:<a href="https://objective-bartik-95941a.netlify.app/">
              Productive App
            </a>
          </p>
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
            <h3>Dez 2020</h3>
            <h2>PHP Blog</h2>
          </header>
          <p>Das schlimmstes GUI das es gibt ;)</p>
          <p>
            Im Basislehrjahr lernten wir PHP und setzten dies in einem Projekt
            genauergesagt einem Blog ein.
          </p>
          <p>
            Repository:<a href="https://github.com/RoeHH/php-blog-blj.git">
              Repository
            </a>
          </p>
          <p>
            Productive
            App:<a href="http://www.041er-blj.ch/2020/rohaenggi/blog/">
              Productive App
            </a>
          </p>
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
            <h3>Dez 2020 + Jan 2021</h3>
            <h2>Do it</h2>
          </header>
          <p>
            Die Do it to-do-list App ist das ergebnis meines Projektes im
            Basislehrjahr.
          </p>
          <p>
            Ich entwickelte diese in Ionic mit Angular und für das Backend
            wählte ich eine ExpressJs Web API mit einer MongoDB als Datenbank.
          </p>
          <p>
            Repository:<a href="https://gitlab.wuersch.org/iccee0/to-do-list.git">
              Repository
            </a>
          </p>
          <p>
            Productive App:<a href="https://toll-app.herokuapp.com/">
              Productive App
            </a>
          </p>
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
            <h3>Jan 2021</h3>
            <h2>OOP im BLJ</h2>
          </header>
          <p>Kleine WindowsForms Applikationen.</p>
          <p>
            Am ende des Basislehrjahres haben wir OOP angeschaut und dazu einige
            mini Apps entwickelt.
          </p>
          <p>
            Repository:<a href="https://github.com/RoeHH/blj-oop.git">
              Repository
            </a>
          </p>

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
            <h3>Jan 2021</h3>
            <h2>Yuumi Dencord Bot</h2>
          </header>
          <p>Discord Bot in Deno</p>
          <p>
            Ende Januar 2021 hörte ich einen Podcast über Deno und ich war
            sofort fasziniert. Ich musste es aus Probieren deshalb schrieb ich
            meinen Discord Bot neu dismal jedoch nicht mit Node sondern Deno.
          </p>
          <p>
            Repository:<a href="https://gitlab.wuersch.org/iccee0/yuumi-dencordjs-bot.git">
              Repository
            </a>
          </p>

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
            <h3>Jan 2021</h3>
            <h2>Rechner ohne *|/|-</h2>
          </header>
          <p>Taschenrechner ohne minus, geteilt und mal.</p>
          <p>
            Eines Tages hatte ich die idee diesen Taschenrechner zu
            programmieren. So machte ich mich an das Werk. Dabei heraus gekommen
            ist ein Deno modul welches nur mit plus und leider zwei minus alle
            vier grundrechen operationen durchf�hren kann.
          </p>
          <p>
            Repository:<a href="https://bitbucket.org/iccee0/calc/src/master/.git">
              Repository
            </a>
          </p>

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
            <h3>Jan 2021</h3>
            <h2>roeh.ch V2</h2>
          </header>
          <p>
            Diese seite Entwickelte ich um meine Projekte besser Dokumentieren
            zu können.
          </p>
          <p>
            Es ist jedoch nicht einfach HTML und CSS. Es ist nämlich eine
            statisch dynamische Seite. Sie zieht Inhalt aus Markdown Dokumenten
            heraus macht diesen zu HTML und fügt alles mit EJS zu dieser Seite
            zusammen.
          </p>
          <p>
            Repository:<a href="https://github.com/RoeHH/roeh.git">
              Repository
            </a>
          </p>

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
            <h3>Mai 2021</h3>
            <h2>nprime</h2>
          </header>
          <p>A deno command get the n&#39;th prime number.</p>
          <p>Challenge is Challenge</p>
          <p>
            Repository:<a href="https://gitlab.wuersch.org/iccee0/nprime.git">
              Repository
            </a>
          </p>
          <p>
            Productive App:<a href="https://gitlab.wuersch.org/iccee0/nprime">
              Productive App
            </a>
          </p>
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
            <h3>Mai Juni 21</h3>
            <h2>roeh-x-cli</h2>
          </header>
          <p>A deno command to commit roeh.yml files to MongoDB.</p>
          <p>
            Erstelt um einfacher inhalt für roeh.ch zu erfassen. Und um deno
            Module an einem Ort verwalten zu können. Löst die Lösung mit den
            Markdown dataein ab.
          </p>
          <p>
            Repository:<a href="https://gitlab.wuersch.org/iccee0/roeh-x-cli.git">
              Repository
            </a>
          </p>

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
            <h3>Mai Juni 21</h3>
            <h2>roeh-x-cli</h2>
          </header>
          <p>A deno command to commit roeh.yml files to MongoDB.</p>
          <p>
            Erstelt um einfacher inhalt für roeh.ch zu erfassen. Und um deno
            Module an einem Ort verwalten zu können. Löst die Lösung mit den
            Markdown dataein ab.
          </p>
          <p>
            Repository:<a href="https://gitlab.wuersch.org/iccee0/roeh-cli.git">
              Repository
            </a>
          </p>

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
            <h3>September 21</h3>
            <h2>roeh-Api</h2>
          </header>
          <p>A API to get rid of credentials in the runroeh command</p>
          <p>ABC 🔥🔥</p>
          <p>
            Repository:<a href="https://github.com/RoeHH/roehAPI.git">
              Repository
            </a>
          </p>
          <p>
            Productive App:<a href="https://secret-ocean-93187.herokuapp.com/">
              Productive App
            </a>
          </p>
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
