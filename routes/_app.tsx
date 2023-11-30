import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/index.scss" />
        <title>roehh</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}