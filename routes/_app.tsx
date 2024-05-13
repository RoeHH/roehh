import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>roehh</title>
      </head>
      <body id="img-container" f-client-nav>
        <Component />
      </body>
      <script src="coursor.js"></script>
    </html>
  );
}