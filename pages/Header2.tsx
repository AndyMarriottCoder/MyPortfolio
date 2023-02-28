import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link'

// Function to link up mail image to email address
function mailto(){
  window.location.href = "mailto:andymcoder@outlook.com"
}

function Header2() {
  return (

<header>
        <nav className="bg-black px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div className="flex items-center">
                    <SocialIcon url="https://www.linkedin.com/in/andrewjamesmarriott"
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
                </div>
                <div className="flex items-center lg:order-2">
                    <div className='flex flex-row items-center text-gray-500'>
                    <SocialIcon
                      className="cursor-pointer"
                      network="email"
                      fgColor="White"
                      bgColor="transparent"
                      onClick={mailto}
                     />
                    <p className="text-sm inline-flex text-white">Drop me an email!
                    </p>
                 </div>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <Link href="/" className="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:text-yellow-300 lg:p-0 dark:text-white" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                        </li>
                        <li>
                            <a href="/blog" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )};

export default Header2;