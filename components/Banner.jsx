import React from 'react'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Banner = ({ title, listing, type }) => {
  return (
    <div className="flex h-60 w-full flex-col items-center justify-center space-y-4 bg-black lg:space-y-0">
      <h2 className="text-lg uppercase text-gray-300">{title}</h2>
      <p className="border-l-4 border-amber-400 pl-2 text-3xl font-bold uppercase text-gray-100 lg:mb-6 lg:ml-72 lg:text-6xl">
        {listing}
      </p>
      <Link
        href={{
          pathname: '/searchAllProperty',
          query: { type: type },
        }}
      >
        <a className="flex items-center space-x-2 border-blue-600 hover:border-b lg:ml-16">
          <h3 className="text-2xl font-semibold text-blue-600">Explore More</h3>
          <FaLongArrowAltRight className="pt-1 text-3xl text-blue-600" />
        </a>
      </Link>
    </div>
  )
}

export default Banner
