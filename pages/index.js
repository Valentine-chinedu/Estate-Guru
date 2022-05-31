import Head from 'next/head'
import Explore from '../components/Explore'
import MostViewed from '../components/MostViewed'

import HeroSection from '../components/HeroSection'
import BuyRentAHome from '../components/BuyRentAHome'
import { baseUrl, fetchApi } from '../utils/api'
import Testimonials from '../components/Testimonials'

function Home({ propertiesForRent, propertiesForSale }) {
  console.log(propertiesForRent)
  console.log(propertiesForSale)
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-x-hidden bg-black font-source">
      <Head>
        <title>EstateGuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Explore propertiesForSale={propertiesForSale} />
      <MostViewed propertiesForSale={propertiesForSale} />
      <BuyRentAHome />
      <Testimonials />
    </div>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=9`
  )
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=9`
  )

  return {
    props: {
      propertiesForRent: propertyForRent?.hits,
      propertiesForSale: propertyForSale?.hits,
    },
  }
}

export default Home
