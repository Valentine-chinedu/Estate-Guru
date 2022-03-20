import React from 'react'
import ListingDetails from './ListingDetails'

const BuyAHome = ({ propertiesForSale }) => {
  console.log(propertiesForSale)
  return (
    <div className=" mx-4 grid h-full grid-cols-2 justify-items-center gap-x-4 gap-y-6 py-8 md:grid-cols-3 md:gap-x-4 lg:mx-48 lg:grid-cols-3 lg:gap-y-8">
      {propertiesForSale?.map((property) => (
        <div className="" key={property.id}>
          <ListingDetails property={property} />
        </div>
      ))}
    </div>
  )
}

export default BuyAHome
