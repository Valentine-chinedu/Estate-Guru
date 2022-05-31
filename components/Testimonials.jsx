import Image from 'next/image'
import React from 'react'
import avaterPic1 from '../public/elizeu-dias-2EGNqazbAMk-unsplash.jpg'
import avaterPic2 from '../public/jake-nackos-IF9TK5Uy-KI-unsplash.jpg'
import avaterPic3 from '../public/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'

const Testimonials = () => {
  return (
    <div className="w-full">
      <div className="flex h-10 items-end justify-center pb-1 md:h-20 md:pb-4">
        <h1 className="text-gray-100">What Our Customers Are Saying</h1>
      </div>
      <div className="h-[53rem] w-full justify-center space-y-44 bg-gray-100 py-8 md:flex md:h-[400px] md:space-x-56 md:space-y-0 md:py-0 md:pt-20">
        <div className="relative flex flex-col items-center">
          <div className="relative z-10 h-24 w-24 rounded-full">
            <Image
              className=" rounded-full object-cover"
              src={avaterPic1}
              alt="picture of the customer"
              layout="fill"
            />
          </div>
          <div className="absolute top-12 flex h-48 w-72 flex-col items-center justify-end bg-[#686868] pb-4">
            <svg
              className="relative right-[6.4rem] top-2 h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                fill="rgba(212,175,55,1)"
              />
            </svg>
            <span className="w-48 text-center text-xs text-gray-100">
              Vestibulum vulputate ante diam, ac pharetra velit rhoncus et.
              Suspendisse consectetur augue ac metus tristique, nec rhoncus
              libero vehicula
            </span>
            <svg
              className="relative left-8 bottom-4 h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"
                fill="rgba(212,175,55,1)"
              />
            </svg>
            <h1 className="text-[#D4AF37]">JohnPaul</h1>
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="relative z-10 h-24 w-24 rounded-full">
            <Image
              className=" rounded-full object-cover"
              src={avaterPic2}
              alt="picture of the customer"
              layout="fill"
            />
          </div>
          <div className="absolute top-12 flex h-48 w-72 flex-col items-center justify-end bg-[#686868] pb-4">
            <svg
              className="relative right-[6.4rem] top-2 h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                fill="rgba(212,175,55,1)"
              />
            </svg>
            <span className="w-48 text-center text-xs text-gray-100">
              Vestibulum vulputate ante diam, ac pharetra velit rhoncus et.
              Suspendisse consectetur augue ac metus tristique, nec rhoncus
              libero vehicula
            </span>
            <svg
              className="relative left-8 bottom-4 h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"
                fill="rgba(212,175,55,1)"
              />
            </svg>
            <h1 className="text-[#D4AF37]">Anabel</h1>
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="relative z-10 h-24 w-24 rounded-full">
            <Image
              className=" rounded-full object-cover"
              src={avaterPic3}
              alt="picture of the customer"
              layout="fill"
            />
          </div>
          <div className="absolute top-12 flex h-48 w-72 flex-col items-center justify-end bg-[#686868] pb-4">
            <svg
              className="relative right-[6.4rem] top-2 h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"
                fill="rgba(212,175,55,1)"
              />
            </svg>
            <span className="w-48 text-center text-xs text-gray-100">
              Vestibulum vulputate ante diam, ac pharetra velit rhoncus et.
              Suspendisse consectetur augue ac metus tristique, nec rhoncus
              libero vehicula
            </span>
            <svg
              className="relative bottom-4 left-8 h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"
                fill="rgba(212,175,55,1)"
              />
            </svg>
            <h1 className="text-[#D4AF37]">Christopher</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
