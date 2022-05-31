import Link from 'next/link'
import React from 'react'

const BuyRentAHome = () => {
  return (
    <div className="relative w-full bg-[url('/vita-vilcina-KtOid0FLjqU-unsplash.jpg')] bg-cover md:flex md:items-center md:justify-center md:bg-center">
      <div className="flex w-full flex-col items-center space-y-8 py-14 px-10 md:w-7/12 md:flex-row md:space-x-20 md:space-y-0">
        <div className="z-10 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-1.5">
            <svg
              className="h-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"
                fill="rgba(255,255,255,1)"
              />
            </svg>
            <h2 className="text-center font-medium text-gray-100">
              Save Your Time And Money When Buying With Us
            </h2>
          </div>
          <p className="text-center text-xs text-gray-100">
            Vestibulum vulputate ante diam, ac pharetra velit rhoncus et.
            Suspendisse consectetur augue ac metus tristique, nec rhoncus libero
            vehicula. Proin congue ante ex, hendrerit malesuada libero
            ullamcorper quis. Sed dictu
          </p>

          <Link
            href={{
              pathname: '/searchAllProperty',
              query: { type: 'for-sale' },
            }}
          >
            <a className="cursor-pointer bg-[#D4AF37] px-2 py-1 text-xs font-medium lg:hover:bg-[#ac8e2b]">
              Buy Properties
            </a>
          </Link>
        </div>
        <div className="z-10 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-1.5">
            <svg
              className="h-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"
                fill="rgba(255,255,255,1)"
              />
            </svg>
            <h2 className="text-center font-medium text-gray-100">
              Buy Properties in Top cities When Renting With US
            </h2>
          </div>
          <p className="text-center text-xs text-gray-100">
            Vestibulum vulputate ante diam, ac pharetra velit rhoncus et.
            Suspendisse consectetur augue ac metus tristique, nec rhoncus libero
            vehicula. Proin congue ante ex, hendrerit malesuada libero
            ullamcorper quis. Sed dictu
          </p>

          <Link
            href={{
              pathname: '/searchAllProperty',
              query: { type: 'for-rent' },
            }}
          >
            <a className="cursor-pointer bg-[#D4AF37] px-2 py-1 text-xs font-medium lg:hover:bg-[#ac8e2b]">
              Rent Properties
            </a>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  )
}

export default BuyRentAHome
