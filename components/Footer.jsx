import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col space-y-8 bg-black py-12 px-3 md:flex-row-reverse md:justify-evenly">
      <div className="space-y-6 border p-4 text-gray-100 md:w-96">
        <h1 className="text-lg font-semibold">Inquire</h1>
        <form className="space-y-4">
          <div className="flex w-full justify-between space-x-4">
            <div className="flex h-6 w-40 items-center bg-[#434242] px-1">
              <svg
                className="h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
              <input
                type="text"
                placeholder="First Name"
                className="h-6 w-28 border-none bg-[#434242] text-xs text-gray-100 placeholder:text-xs placeholder:text-gray-300 "
              />
            </div>
            <div className="flex h-6 w-40 items-center bg-[#434242] px-1">
              <svg
                className="h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
              <input
                type="text"
                placeholder="Last Name"
                className="h-6 w-28 border-none bg-[#434242] text-xs text-gray-100 placeholder:text-xs placeholder:text-gray-300"
              />
            </div>
          </div>

          <div className="flex h-6 w-full items-center bg-[#434242] px-1">
            <svg
              className="h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"
                fill="rgba(255,255,255,1)"
              />
            </svg>
            <input
              type="email"
              placeholder="Email Address"
              className="h-6 w-full border-none bg-[#434242] text-xs text-gray-100 placeholder:text-xs placeholder:text-gray-300"
            />
          </div>
          <div className="flex h-6 w-full items-center bg-[#434242] px-1">
            <svg
              className="h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"
                fill="rgba(255,255,255,1)"
              />
            </svg>
            <input
              type="number"
              placeholder="Phone Number"
              className="h-6 w-full border-none bg-[#434242] text-xs text-gray-100 placeholder:text-xs placeholder:text-gray-300"
            />
          </div>
          <div className="flex h-16 w-full items-start bg-[#434242] px-1">
            <svg
              className="relative top-2 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z"
                fill="rgba(255,255,255,1)"
              />
            </svg>
            <textarea
              cols="30"
              rows="3"
              placeholder="let us know how we can help..."
              className=" w-full border-none bg-[#434242] text-xs text-gray-100 placeholder:text-xs placeholder:text-gray-300"
            ></textarea>
          </div>
          <button className="border px-3 py-1 text-xs font-medium">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center">
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
          <h1 className="font-semibold text-[#D4AF37] lg:text-lg">
            ESTATE GURU
          </h1>
        </div>
        <div>
          <div className="flex w-[22rem] justify-center space-x-40 border-y py-4">
            <ul className="flex flex-col space-y-6 text-left text-xs text-gray-100">
              <Link href="/">
                <a onClick={() => setOpenSideBar(false)}>Home</a>
              </Link>
              <Link
                href={{
                  pathname: '/searchAllProperty',
                  query: { type: 'for-sale' },
                }}
              >
                <a onClick={() => setOpenSideBar(false)}>Buy</a>
              </Link>
              <Link
                href={{
                  pathname: '/searchAllProperty',
                  query: { type: 'for-rent' },
                }}
              >
                <a onClick={() => setOpenSideBar(false)}>Rent</a>
              </Link>

              <li onClick={() => setOpenSideBar(false)}>About</li>
              <li onClick={() => setOpenSideBar(false)}>contact</li>
            </ul>
            <div className="space-y-6 text-gray-100">
              <h1 className="text-xs">Our Process</h1>
              <h1 className="text-xs">News/Blog</h1>
              <div className="flex items-center space-x-1">
                <svg
                  className="h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
                <h1 className="text-xs">+971 56 824 41</h1>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  className="h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
                <h1 className="text-xs">hello@guru.com</h1>
              </div>
              <div className="flex space-x-4">
                <svg
                  className="h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
                <svg
                  className="h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
                <svg
                  className="h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
