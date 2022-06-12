import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Component {...pageProps} />
    </UserProvider>
  )
}
