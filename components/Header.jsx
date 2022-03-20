import React from 'react'

const Header = () => {
  return (
    <div className=" fixed flex h-16 w-full items-center justify-between bg-white px-8">
      <h1 className="font-serif text-2xl font-bold italic text-red-500">
        EstateGuru
      </h1>
      <nav>
        <ul className="flex space-x-12 text-sm font-medium text-gray-700">
          <li className="cursor-pointer py-1 px-2 hover:bg-red-500 hover:text-gray-100">
            Home
          </li>
          <li className="cursor-pointer py-1 px-2 hover:bg-red-500 hover:text-gray-100">
            Buy
          </li>
          <li className="cursor-pointer py-1 px-2 hover:bg-red-500 hover:text-gray-100">
            Rent
          </li>
          <li className="cursor-pointer py-1 px-2 hover:bg-red-500 hover:text-gray-100">
            About
          </li>
          <li className="cursor-pointer py-1 px-2 hover:bg-red-500 hover:text-gray-100">
            Search
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
