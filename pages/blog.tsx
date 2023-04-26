import React from 'react'
import Image from '../images/swiftUI'

export default function Blog() {
  return (
    // <section className="bg-black dark:bg-gray-800">
      // <div className="max-w-6xl mx-auto h-48 bg-black:bg-gray-800 flex-col">
      <div className="bg-black h-screen flex-col justify-center overflow-hidden max-auto">
        <h3 className=" text-lg uppercase  text-gray-500 pb-6 tracking-[15px] text-center">Blog</h3>
        <div className="grid grid-cols-3 gap-20">
          {/* <div className="h-96 w-96 bg-red-800">01</div> */}
            <article className="h-96 w-96 bg-red-800">
              <a href="www.google.com">
                <div className="image container">
                  <Image />
                <div className="Info">
                  <div className="title">
                    <div className="title-colour">
                      <h3 className="font-sans">Hello
                      </h3>
                    </div>
                  </div>
                </div>
                </div>
              </a>
            </article>
                    
                    {/* </div>
                    </article> */}
                    
          <div className="h-96 w-96 bg-red-800">02</div>
          <div className="h-96 w-96 bg-red-800">03</div>
          <div className="h-96 w-96 bg-red-800">04</div>
          <div className="h-96 w-96 bg-red-800">05</div>
        </div>
    </div>



  )}