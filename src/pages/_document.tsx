import Document, { Html, Main, NextScript, Head } from 'next/document'
import clsx from 'clsx'

const isDev = process.env.NODE_ENV === 'development'

class MyDocument extends Document {
  render() {
    const bodyClass = clsx({ 'debug-screens': isDev })

    return (
      <Html lang="da">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300..900&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body className={bodyClass}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
