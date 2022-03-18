import '@app/core/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { Provider } from 'react-redux'

import defaultSeo from '@config/defaultSeo'
import { store } from '@redux/store'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <DefaultSeo {...defaultSeo} />

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default App
