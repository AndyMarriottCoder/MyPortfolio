import React from 'react'
import { SocialIcon } from 'react-social-icons';


type Props = {}

export default function Header({}: Props) {
  return (
  <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto'>
    <div className='flex flex-row items-center'>
      <SocialIcon
        url="https://www.linkedin.com/in/andrewjamesmarriott"
        fgColor="Gray"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://www.twitter.com/AndyMCoder"
        fgColor="Gray"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://github.com/AndyMarriottCoder"
        fgColor="Gray"
        bgColor="transparent"
      />
    </div>

    <div className='flex flex-row items-center text-gray-500'>
      <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor="Gray"
        bgColor="transparent"
    />
    <p className="text-sm inline-flex">Drop me an email!</p>
    </div>
  </header>
  )
}