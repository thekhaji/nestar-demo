import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT PAGE-ROUTER");
  
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="title" content="NESTAR DEMO"/>
        <meta name="robots" content="index, follow"/>
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

        <meta name="keyword" content={"nestar , nestar.uz , devex mern, mern nestjs fullstack"}/>
        <meta name="description" content={
          "Buy and sell properties anywhere anytime in South Korea. |" + 
          " |" +
          " " 
          }/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
