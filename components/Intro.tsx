import React from 'react'
import Link from 'next/link';
import { useTypewriter } from 'react-simple-typewriter';
import myImage from '../images/PhotoOfMe.png';

type Props = {}

// Function displaying the TypeWriter functions
export default function Intro({}: Props) {
  const [text] = useTypewriter({
    words: ['Welcome To My Portfolio', 'I\'m Andy Marriott'],
    loop: 5,
    typeSpeed: 100,
    delaySpeed: 1000,
    onLoopDone: () => console.log('loop completed after 5 runs.')
  });

  // Styling of the font and the buttons
  return (
    <div className="bg-slate-800 text-white h-screen flex flex-col items-center justify-center text-center overflow-hidden">
    {/* >BackgroundCircles /> */}
    <img className="relative rounded-full h-40 w-50 mx-auto pb-4" src={myImage.src} />
    <div className="z-10">
    <h2 className="text-lg uppercase text-gray-500 pb-6 pt-6 tracking-[15px]">
    Software Development Engineer II
    </h2>
    <h1 className="lg:text-6xl px-10">
      <span className="inline-block">{text}</span>
    </h1>

    <div className="pt-10">
      <Link href="#about">
      <button className="IntroButton">About</button>
      </Link>
      <Link href="#blog">
      <button className="IntroButton">Blog</button>
      </Link>
      <Link href="#projects">
      <button className="IntroButton">Projects</button>
      </Link>
      <Link href="#contact">
      <button className="IntroButton">Contact Me</button>
      </Link>
      </div>
      </div>
      </div>
  )
}
