import React from 'react'
import { motion } from 'framer-motion';


type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border-8 white rounded-full h-[650px] w-[650px] mt-52 animate-ping">
      </div>
    </div>
  )
}

export default BackgroundCircles