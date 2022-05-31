import React, { useState } from 'react'
import Link from 'next/link'

import { AiOutlineMenu } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'

const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false)

  return (
    <div className="fixed inset-x-0 z-50  bg-black">
      <div className=" flex h-12 items-center justify-between bg-black px-2 lg:h-16 lg:px-16">
        {openSideBar ? (
          <div
            onClick={() => {
              setOpenSideBar(false)
            }}
            className="relative left-1 z-50 cursor-pointer lg:hidden"
          >
            <VscChromeClose className="text-3xl text-gray-100 lg:text-5xl" />
          </div>
        ) : (
          <div
            onClick={() => {
              setOpenSideBar(true)
            }}
            className=" cursor-pointer lg:invisible"
          >
            <AiOutlineMenu className="text-3xl text-gray-100 lg:text-5xl" />
          </div>
        )}
        <div className="flex flex-col items-center">
          <Link href="/">
            <a className="font-source font-bold uppercase text-[#D4AF37] lg:text-xl">
              Estate Guru
            </a>
          </Link>
          <div className="flex w-full items-center space-x-0.5">
            <div className="h-[0.1px] w-full bg-white"></div>
            <svg
              className="h-4 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm2-4h8v2H8v-2z"
                fill="rgba(255,255,255,1)"
              />
            </svg>
            <div className="h-[0.1px] w-full bg-white"></div>
          </div>
        </div>

        <div className="flex space-x-2 lg:space-x-4">
          <svg
            className="h-4 lg:h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655z"
              fill="rgba(212,175,55,1)"
            />
          </svg>
          <svg
            className="h-4 lg:h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
              fill="rgba(212,175,55,1)"
            />
          </svg>
        </div>
      </div>

      <nav
        className={` fixed inset-y-0 left-0 flex flex-col items-center justify-center space-y-16 overflow-x-hidden bg-black text-lg font-bold md:space-y-20 md:text-xl lg:relative lg:h-10 lg:w-full lg:flex-row lg:space-x-8 lg:space-y-0 lg:bg-gray-100 lg:text-sm ${
          openSideBar ? 'w-56 md:w-96' : 'w-0'
        } z-40 h-full text-sm transition-[width] duration-500`}
      >
        <ul className="flex flex-col items-center space-y-8 font-source text-lg font-semibold text-gray-100 lg:h-full lg:flex-row lg:space-y-0 lg:space-x-12 lg:text-sm lg:text-gray-900">
          <Link href="/">
            <a
              onClick={() => setOpenSideBar(false)}
              className="cursor-pointer py-1 px-2 hover:text-gray-100 lg:h-full lg:pt-2.5 lg:hover:bg-black"
            >
              Home
            </a>
          </Link>
          <Link
            href={{
              pathname: '/searchAllProperty',
              query: { type: 'for-sale' },
            }}
          >
            <a
              onClick={() => setOpenSideBar(false)}
              className="cursor-pointer py-1 px-2 hover:text-gray-100 lg:h-full lg:pt-2.5 lg:hover:bg-black"
            >
              Buy
            </a>
          </Link>
          <Link
            href={{
              pathname: '/searchAllProperty',
              query: { type: 'for-rent' },
            }}
          >
            <a
              onClick={() => setOpenSideBar(false)}
              className="cursor-pointer py-1 px-2 hover:text-gray-100 lg:h-full lg:pt-2.5 lg:hover:bg-black"
            >
              Rent
            </a>
          </Link>

          <li
            onClick={() => setOpenSideBar(false)}
            className="cursor-pointer py-1 px-2 hover:text-gray-100 lg:h-full lg:pt-2.5 lg:hover:bg-black"
          >
            About
          </li>
          <li
            onClick={() => setOpenSideBar(false)}
            className="cursor-pointer py-1 px-2 hover:text-gray-100 lg:h-full lg:pt-2.5 lg:hover:bg-black"
          >
            Contact
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
