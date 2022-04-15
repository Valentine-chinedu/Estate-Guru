import React, { useState } from 'react'
import Link from 'next/link'

import { AiOutlineMenu } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'

const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false)

  return (
    <div className=" fixed z-50 flex h-12 w-full items-center justify-between bg-gray-100 px-8">
      <Link href="/">
        <a className="font-serif text-2xl font-bold italic text-blue-600">
          EstateGuru
        </a>
      </Link>
      <nav
        className={` fixed inset-y-0 right-0 flex flex-col items-center justify-center space-y-16 overflow-x-hidden bg-gray-200 text-lg font-bold md:space-y-20 md:text-xl lg:relative lg:h-10 lg:w-[35rem] lg:flex-row lg:space-x-8 lg:space-y-0 lg:bg-gray-100 lg:text-sm ${
          openSideBar ? 'w-56 md:w-96' : 'w-0'
        } z-50 h-full text-sm transition-[width] duration-500`}
      >
        <ul className="flex flex-col items-center space-y-8 text-lg font-medium text-gray-700 lg:flex-row lg:space-y-0 lg:space-x-12 lg:text-sm">
          <Link href="/">
            <a className="cursor-pointer py-1 px-2 hover:bg-blue-600 hover:text-gray-100">
              Home
            </a>
          </Link>
          <Link
            href={{
              pathname: '/searchAllProperty',
              query: { type: 'for-sale' },
            }}
          >
            <a className="cursor-pointer py-1 px-2 hover:bg-blue-600 hover:text-gray-100">
              Buy
            </a>
          </Link>
          <Link
            href={{
              pathname: '/searchAllProperty',
              query: { type: 'for-rent' },
            }}
          >
            <a className="cursor-pointer py-1 px-2 hover:bg-blue-600 hover:text-gray-100">
              Rent
            </a>
          </Link>

          <li className="hover:bg-600-600 cursor-pointer py-1 px-2 hover:bg-blue-600 hover:text-gray-100">
            About
          </li>
          <li className="cursor-pointer py-1 px-2 hover:bg-blue-600 hover:text-gray-100">
            contact
          </li>
        </ul>
      </nav>
      {openSideBar ? (
        <div
          onClick={() => {
            setOpenSideBar(false)
          }}
          className="relative left-1 z-50 cursor-pointer lg:hidden"
        >
          <VscChromeClose className="text-3xl text-blue-600 lg:text-5xl" />
        </div>
      ) : (
        <div
          onClick={() => {
            setOpenSideBar(true)
          }}
          className="relative left-1 cursor-pointer lg:hidden"
        >
          <AiOutlineMenu className="text-3xl text-blue-600 lg:text-5xl" />
        </div>
      )}
    </div>
  )
}

export default Header
