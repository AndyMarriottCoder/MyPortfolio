import React from 'react'
import Image from '../images/swiftUI'
import Image2 from '../images/codephoto'

export default function Blog2() {
  return (
      <div className="bg-black h-screen flex-col justify-center overflow-hidden max-auto">
        <h3 className=" text-lg uppercase  text-gray-500 pb-6 tracking-[15px] text-center">Blog</h3>
        <ul className="grid grid-cols-3">
        <div className="border my-4 w-80 shadow hover:shadow-xl">
                  <Image />
                  <div className="p-2 flex justify-between items-baseline">
                  <h2 className="text-lg text-white font-bold">
                    Swift
                  </h2>
                  </div>
        </div>
        </ul>
    </div>



  )}