import Link from 'next/link'
import React from 'react'

const MostViewed = ({ propertiesForSale }) => {
  console.log(propertiesForSale)
  return (
    <div className="h-full w-full py-4 px-2 md:w-7/12 md:py-8">
      <div>
        <h1 className="text-xs text-gray-100 md:text-sm">
          Most viewed Properties
        </h1>
        <div className="flex items-end space-x-0.5 pb-1">
          <Link
            href={{
              pathname: '/searchAllProperty',
              query: { type: 'for-sale' },
            }}
          >
            <a className="cursor-pointer text-xs text-[#D4AF37] lg:hover:text-[#f7d871]">
              See more
            </a>
          </Link>
          <svg
            className="h-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="rgba(212,175,55,1)"
            />
          </svg>
        </div>
      </div>
      <div className="mb-1 grid grid-cols-2 gap-x-1 md:mb-2 md:gap-x-2">
        <Link href={`/property/${propertiesForSale[4].externalID}`}>
          <a
            className="flex h-40 items-end bg-cover text-xs md:h-96 md:w-full"
            style={{
              backgroundImage: `url(${propertiesForSale[4].coverPhoto.url})`,
            }}
          >
            <h1 className="bg-white p-0.5">
              From AED {propertiesForSale[4].price}
            </h1>
          </a>
        </Link>
        <Link href={`/property/${propertiesForSale[3].externalID}`}>
          <a
            className="flex h-40 items-end bg-cover text-xs md:h-96 md:w-full"
            style={{
              backgroundImage: `url(${propertiesForSale[3].coverPhoto.url})`,
            }}
          >
            <h1 className="bg-white p-0.5">
              From AED {propertiesForSale[3].price}
            </h1>
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-x-1 md:gap-x-2">
        <Link href={`/property/${propertiesForSale[5].externalID}`}>
          <a
            className="flex h-40 items-end bg-cover text-xs md:h-96"
            style={{
              backgroundImage: `url(${propertiesForSale[5].coverPhoto.url})`,
            }}
          >
            <h1 className="bg-white p-0.5">
              From AED {propertiesForSale[5].price}
            </h1>
          </a>
        </Link>
        <Link href={`/property/${propertiesForSale[6].externalID}`}>
          <a
            className="flex h-40 items-end bg-cover text-xs lg:h-96"
            style={{
              backgroundImage: `url(${propertiesForSale[6].coverPhoto.url})`,
            }}
          >
            <h1 className="bg-white p-0.5">
              From AED {propertiesForSale[6].price}
            </h1>
          </a>
        </Link>
        <Link href={`/property/${propertiesForSale[7].externalID}`}>
          <a
            className="flex h-40 items-end bg-cover text-xs md:h-96"
            style={{
              backgroundImage: `url(${propertiesForSale[7].coverPhoto.url})`,
            }}
          >
            <h1 className="bg-white p-0.5">
              From AED {propertiesForSale[7].price}
            </h1>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default MostViewed
