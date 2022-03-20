import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

import Head from 'next/head'
import BuyAHome from '../components/BuyAHome'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import RentAHome from '../components/RentAHome'
import { baseUrl, fetchApi } from '../utils/api'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSection />
      <BuyAHome />
      <RentAHome />
    </div>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  )
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  )

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  }
}
