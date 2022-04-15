import Head from 'next/head'
import Banner from '../components/Banner'
import BuyAHome from '../components/BuyAHome'

import HeroSection from '../components/HeroSection'
import RentAHome from '../components/RentAHome'
import { baseUrl, fetchApi } from '../utils/api'

function Home({ propertiesForRent, propertiesForSale }) {
  console.log(propertiesForRent)
  console.log(propertiesForSale)
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
      <Head>
        <title>EstateGuru</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <Banner
        title="Luxury Realestate for sale"
        listing="Current listings"
        type="for-sale"
      />
      <BuyAHome propertiesForSale={propertiesForSale} />
      <Banner
        title="Luxury Realestate for Rent"
        listing="Current listings"
        type="for-rent"
      />
      <RentAHome propertiesForRent={propertiesForRent} />
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
