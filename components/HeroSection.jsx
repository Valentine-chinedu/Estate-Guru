import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-8 bg-[url('/realestate4.jpg')] ">
      <div className="flex w-6/12 flex-col items-center text-6xl font-bold uppercase text-blue-200">
        <h1>looking for a new</h1>
        <h1>Property?</h1>
      </div>
      <div className="h-0.5 w-7/12 bg-gray-50 "></div>
      <div className="space-x-8 text-gray-100">
        <Link
          href={{
            pathname: '/property/searchAllProperty',
            query: { type: 'for-sale' },
          }}
        >
          <a className="cursor-pointer bg-blue-600 px-8 py-1 font-medium uppercase hover:bg-blue-400">
            Buy
          </a>
        </Link>
        <Link
          href={{
            pathname: '/property/searchAllProperty',
            query: { type: 'for-rent' },
          }}
        >
          <a className="cursor-pointer bg-blue-600 px-8 py-1 font-medium uppercase hover:bg-blue-400">
            Rent
          </a>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
