import React from 'react'

type Props = {}

export default function about({}: Props) {
  return (
    <div className="bg-black h screen flex flex-col justify-center overflow-hidden">
    <h3 className="text-lg uppercase text-gray-500 pb-6 tracking-[15px] text-center">About</h3>
    <p className="m-10 font-light text-center text-base text-white">2022 was a big year for me. I made the transition from Infrastructure Engineering to Software Engineering</p>
    </div>
  )
}
