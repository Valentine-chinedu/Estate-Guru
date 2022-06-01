import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="relative w-full">
      <div className="flex h-screen w-full flex-col items-center justify-center space-y-12 bg-[url('/outsite-co-R-LK3sqLiBw-unsplash.jpg')] bg-cover px-4 lg:flex-row lg:space-x-40 lg:space-y-0 lg:pt-16">
        <div className=" z-40 flex flex-col items-center text-gray-100">
          <p className="text-center text-lg font-bold lg:text-3xl">
            The Best Place to Find The Perfect Home
          </p>
          <p className="text-sm font-medium text-gray-200 lg:text-lg">
            More than 5000 properties available
          </p>
        </div>
        <div className="z-40 flex h-72 w-64 flex-col items-center justify-center space-y-6 rounded-2xl bg-black bg-opacity-50 px-2 text-gray-100 lg:h-96 lg:w-80 lg:px-4">
          <div className="space-x-1 text-sm text-gray-50 lg:text-lg lg:font-medium">
            <span>Dream</span>
            <span className="text-[#D4AF37]">Homes</span>
          </div>
          <p className="text-center text-sm font-medium text-gray-50">
            Apartments in the excellent Emaar development of Marina Quays
          </p>
          <div className="flex space-x-8 text-gray-50">
            <div className="flex flex-col items-center">
              <h1 className="font-semibold">72</h1>
              <h2 className="text-sm text-gray-300">Areasqft</h2>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold">6</h1>
              <h2 className="text-sm text-gray-300">Bedroom</h2>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold">2</h1>
              <h2 className="text-sm text-gray-300">Toilet</h2>
            </div>
          </div>
          <div className="flex">
            <h2 className="bg-[#D4AF37] px-2 py-1 text-xs font-semibold text-gray-900">
              From AED 20000
            </h2>
            <Link
              href={{
                pathname: '/searchAllProperty',
                query: { type: 'for-sale' },
              }}
            >
              <a className="cursor-pointer bg-black px-2 py-1 text-xs font-medium hover:text-[#D4AF37]">
                View Properties
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  )
}

export default HeroSection
