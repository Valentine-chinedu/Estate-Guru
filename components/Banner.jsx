import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Banner = ({ title, listing, type }) => {
  return (
    <div className="flex h-60 flex-col items-center justify-center bg-black">
      <h2 className="text-lg uppercase text-gray-300">{title}</h2>
      <p className="ml-72 mb-6 border-l-4 border-amber-400 pl-2 text-6xl font-bold uppercase text-gray-100">
        {listing}
      </p>
      <Link
        href={{
          pathname: '/property/searchAllProperty',
          query: { type: type },
        }}
      >
        <a className="ml-16 flex items-center space-x-2 border-blue-600 hover:border-b">
          <h3 className="text-2xl font-semibold text-blue-600">Explore More</h3>
          <FaLongArrowAltRight className="pt-1 text-3xl text-blue-600" />
        </a>
      </Link>
    </div>
  )
}

export default Banner
