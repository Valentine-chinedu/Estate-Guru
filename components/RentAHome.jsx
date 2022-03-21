import React from 'react'
import Listings from './Listings'

const RentAHome = ({ propertiesForRent }) => {
  return (
    <div className="w-full bg-gray-300">
      <div className=" mx-4 grid h-full grid-cols-2 justify-items-center gap-x-4 gap-y-6 py-8 md:grid-cols-3 md:gap-x-4 lg:mx-48 lg:grid-cols-3 lg:gap-y-8">
        {propertiesForRent?.map((property) => (
          <div className="" key={property.id}>
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
              purpose="for rent"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RentAHome
