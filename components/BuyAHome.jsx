import React from 'react'
import Listings from './Listings'

const BuyAHome = ({ propertiesForSale }) => {
  console.log(propertiesForSale)
  return (
    <div className="w-full bg-gray-300">
      <div className="grid h-full grid-cols-1 justify-items-center md:mx-4 md:gap-y-6 md:gap-x-4 md:py-8 lg:mx-48 lg:grid-cols-3 lg:gap-y-8">
        {propertiesForSale?.map((property) => (
          <div key={property.id}>
            <Listings
              title={property.title}
              baths={property.baths}
              area={property.area}
              isVerified={property.isVerified}
              externalID={property.externalID}
              coverPhoto={property.coverPhoto}
              price={property.price}
              rentFrequency={property.rentFrequency}
              rooms={property.rooms}
              purpose="for sale"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyAHome
