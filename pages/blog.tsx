import React from 'react'
// import apple from '../images/applelogo.png'

export default function Blog() {
  return (
    <section className="bg-black dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-black:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-center">
          Blog
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-blue dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-20 pb-40">
          {/* Single card */}
          <a
            // href="https://tailwindmasterkit.com"
            className="w-full block shadow-2xl"
          >
            <div className="relative overflow-hidden">
              {/* <img
                src={apple.src}
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              /> */}
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Tailwind Master Kit
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>
        </div>
      </div>
    </section>

  )}