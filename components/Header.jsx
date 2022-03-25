import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=" fixed z-50 flex h-12 w-full items-center justify-between bg-gray-100 px-8">
      <Link href="/">
        <a className="font-serif text-2xl font-bold italic text-blue-600">
          EstateGuru
        </a>
      </Link>
      <nav>
        <ul className="flex space-x-12 text-sm font-medium text-gray-700">
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
    </div>
  )
}

export default Header
