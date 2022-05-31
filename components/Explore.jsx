import React from 'react'
import Link from 'next/link'

const Explore = () => {
  return (
    <div className="flex w-full flex-col items-center ">
      <div className="flex h-10 items-end pb-1 text-sm text-gray-100 md:h-20 md:pb-4">
        <h1>We make finding the right home easier for families.</h1>
      </div>
      <div className="flex h-80 w-full flex-col justify-center bg-[url('/surface-Xh1bnFfVFI4-unsplash.jpg')] bg-cover md:h-[600px] lg:bg-center">
        <div className="pl-4 md:w-6/12 md:pl-14">
          <p className="mb-4 w-52 text-xs text-gray-100 md:w-[500px] lg:text-xl">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Duis massa eros, imperdiet quis massa vel,
            suscipit consequat tortor.
          </p>
          <Link
            href={{
              pathname: '/searchAllProperty',
              query: { type: 'for-sale' },
            }}
          >
            <a className=" cursor-pointer bg-[#D4AF37] px-2 py-1 text-xs font-medium uppercase hover:bg-[#b9982a] lg:px-4 lg:py-2">
              Explore
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Explore
