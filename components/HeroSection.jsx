import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-8 bg-[url('/realestate4.jpg')]">
      <h1 className="w-6/12 text-6xl font-semibold uppercase text-gray-50">
        looking for a new home?
      </h1>
      <div className="h-0.5 w-7/12 bg-gray-50 "></div>
      <div className="space-x-8 text-gray-100">
        <button className="bg-red-500 px-8 py-1 font-medium uppercase">
          buy
        </button>
        <button className="bg-red-500 px-8 py-1 font-medium uppercase">
          rent
        </button>
      </div>
    </div>
  )
}

export default HeroSection
