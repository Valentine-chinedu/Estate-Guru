import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
// import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {' '}
      <Header />
      <Component {...pageProps} />
      <Footer />{' '}
    </>
  )
}

export default MyApp
