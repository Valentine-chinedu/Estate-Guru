import React from 'react'
import { baseUrl, fetchApi } from '../../utils/api'
import Image from 'next/image'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'

const propertyDetails = ({
  propertyInfo: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    amenities,
    photos,
    furnishingStatus,
  },
}) => {
  console.log(photos)

  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="w-full bg-black pt-[4.5rem]">
        <ImageGallery
          infinite
          showPlayButton={false}
          showThumbnails={false}
          showBullets
          items={photos.map((photo) => ({
            original: photo.url,
          }))}
        />
      </div>

      <div className="w-4/6 p-6">
        <div className="flex items-center justify-between pt-2">
          <div className="items=center flex pt-2">
            <div className="pr-3 pt-1.5 text-green-400">
              {isVerified && <GoVerified />}
            </div>
            <h3 className=" text-lg font-bold">
              AED {price} {rentFrequency && `/${rentFrequency}`}
            </h3>
          </div>
        </div>
        <div
          className="
          flex
          w-64
          items-center
          justify-between
          p-1
          text-blue-400"
        >
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </div>
        <div className="mt-2">
          <h2 className="pb-4 text-lg font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="flex flex-wrap justify-between uppercase">
          <div className="flex w-[25rem] justify-between border-b border-gray-100 p-1">
            <h3>Type</h3>
            <h3 className="font-bold">{type}</h3>
          </div>
          <div className="flex w-[25rem] justify-between border-b border-gray-100 p-1">
            <h3>Property Type</h3>
            <h3 className="font-bold">{purpose}</h3>
          </div>
          {furnishingStatus && (
            <div className="w-[25rem] justify-between border-b border-gray-100 p-3">
              <h3>Furnishing Status</h3>
              <h3 className="font-bold">{furnishingStatus}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default propertyDetails

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)

  return {
    props: {
      propertyInfo: data,
    },
  }
}
