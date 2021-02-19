import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="favicon.ico" rel="shortcut icon" />
          <link href="site.webmanifest" rel="manifest" />
          <link
            href="apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#da532c" name="msapplication-TileColor" />
          <meta
            content="browserconfig.xml"
            name="msapplication-config"
          />
        </Head>
        <body className="bg-orwhite">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
