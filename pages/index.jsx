import Head from 'next/head'
import Banner from '../components/Banner'
import BuyAHome from '../components/BuyAHome'

import HeroSection from '../components/HeroSection'
import RentAHome from '../components/RentAHome'
import { baseUrl, fetchApi } from '../utils/api'

export default function Home({ propertiesForRent, propertiesForSale }) {
  return (
    <div className="relative flex min-h-screen flex-col">
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
      <BuyAHome propertiesForSale={propertiesForSale && propertiesForSale} />
      <Banner
        title="Luxury Realestate for Rent"
        listing="Current listings"
        type="for-rent"
      />
      <RentAHome propertiesForRent={propertiesForRent && propertiesForRent} />
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
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  }
}
