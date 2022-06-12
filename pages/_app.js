import Head from 'next/head'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
