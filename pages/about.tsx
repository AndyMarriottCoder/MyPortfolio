import React from 'react'
import Head from 'next/head'

function about() {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta property="og:title" content="About Me" key="title" />
      </Head>

    <div className="bg-black h screen flex flex-col justify-center overflow-hidden">
      <h3 className="text-lg uppercase text-gray-500 pb-6 tracking-[15px] text-center">About</h3>
      <p className="m-10 font-medium text-center text-base text-white">Hi there, I'm Andy Marriott. In October 2022, I became a Software Development Engineer. 
        For over 15 years I have worked in Infrastructure mainly working on engineering the Microsoft Windows platform. This was hugely rewarding and I had some fantastic achievements. 
      </p>
      <p className="m-10 font-medium text-center text-base text-white">When the subject of returning to the office came up following the pandemic, I created a C# application which was deployed to the desktop of all the Windows devices. 
        This application guided the user through the new layout and how to connect their machines up to the monitors using the Cables and Adapters available. 
      </p>
    </div>
    </div>
  )
};

export default about;