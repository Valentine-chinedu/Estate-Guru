import React from 'react'

const Header = () => {
  return (
    <div className=" fixed flex h-12 w-full items-center justify-between bg-blue-500 px-8">
      <h1>EstateGuru</h1>
      <nav>
        <ul className="flex space-x-12 text-gray-100">
          <li>Home</li>
          <li>Buy</li>
          <li>Rent</li>
          <li>About</li>
          <li>Search</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
