import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'

const Listings = ({
  purpose,
  title,
  baths,
  area,
  isVerified,
  externalID,
  coverPhoto,
  price,
  rentFrequency,
  rooms,
}) => {
  console.log(purpose)
  return (
    <div>
      <Link href={`/property/${externalID}`}>
        <a>
          <div className="group relative h-[24rem] w-[27rem] cursor-pointer">
            <Image
              src={coverPhoto ? coverPhoto.url : 'NoImage'}
              alt=""
              layout="fill"
            />
            <div className="absolute flex h-full w-full justify-center bg-black bg-opacity-25 pt-4 transition-all duration-500 lg:justify-start lg:pl-4 lg:group-hover:bg-black lg:group-hover:bg-opacity-50">
              <h2 className="h-8 overflow-hidden font-bold uppercase text-amber-500 transition-all duration-500 lg:h-0 lg:text-xl lg:group-hover:h-8">
                {purpose}
              </h2>
            </div>
            <div className="absolute bottom-10 z-40 flex h-20 w-full flex-col justify-center overflow-hidden px-10 py-2 font-medium text-white transition-all duration-500 lg:h-8 lg:px-2 lg:group-hover:h-20">
              <div className="mb-1 flex items-center justify-between">
                <div>
                  {isVerified && (
                    <GoVerified className="bg-gray-50 p-0.5 text-lg text-green-500" />
                  )}
                </div>
                <h3>
                  AED {millify(price)}
                  {rentFrequency && `/${rentFrequency}`}
                </h3>
              </div>
              <div className="flex w-64 items-center justify-between p-1">
                {rooms} <FaBed className="text-2xl text-blue-500" /> | {baths}
                <FaBath className="text-2xl text-blue-500" /> | {millify(area)}{' '}
                sqft
                <BsGridFill className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-sm">
                {title.length > 30 ? `${title.substring(0, 30)}...` : title}
              </h3>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Listings
