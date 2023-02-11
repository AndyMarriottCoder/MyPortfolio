import React from 'react'
import { SocialIcon } from 'react-social-icons';
import classNames from "classnames";

type Props = {}

// Function to link up mail image to email address
function mailto(){
  window.location.href = "mailto:andymcoder@outlook.com"
}

function Header({}: Props) {
  return (
  <header 
    className={classNames({
      "sticky top-0 flex items-start": true, //Layout 
      "justify-between max-w7xl mx-auto": true, //Positioning
    })}
    >
    <div className='flex flex-row items-center'>
      <SocialIcon
        url="https://www.linkedin.com/in/andrewjamesmarriott"
        fgColor="White"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://www.twitter.com/AndyMCoder"
        fgColor="White"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://github.com/AndyMarriottCoder"
        fgColor="White"
        bgColor="transparent"
      />

    {/* Commented out the divs below so that all of of the icons are bunched together */}
    {/* </div> */}

    {/* <div className='flex flex-row items-center text-gray-500'> */}
      <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor="White"
        bgColor="transparent"
        onClick={mailto}
    />
    <p className="text-sm inline-flex text-white">Drop me an email!</p>
    </div>
  </header>
  )
}

export default Header

// Function adding the social icons to the header along with the links
// function Header({}: Props) {
//   return (
//   <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto'>
//     <div className='flex flex-row items-center'>
//       <SocialIcon
//         url="https://www.linkedin.com/in/andrewjamesmarriott"
//         fgColor="Gray"
//         bgColor="transparent"
//       />
//       <SocialIcon
//         url="https://www.twitter.com/AndyMCoder"
//         fgColor="Gray"
//         bgColor="transparent"
//       />
//       <SocialIcon
//         url="https://github.com/AndyMarriottCoder"
//         fgColor="Gray"
//         bgColor="transparent"
//       />
//     </div>

//     <div className='flex flex-row items-center text-gray-500'>
//       <SocialIcon
//         className="cursor-pointer"
//         network="email"
//         fgColor="Gray"
//         bgColor="transparent"
//         onClick={mailto}
//     />
//     <p className="text-sm inline-flex">Drop me an email!</p>
//     </div>
//   </header>
//   )
// }

// export default Header