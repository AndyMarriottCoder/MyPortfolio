import Image from "next/image";
import profilePhoto from 'public/static/images/photoofme.png'
import React from "react";

function myPhoto(){
  return(
    <Image className="rounded-full pb-4"
      src={profilePhoto}
      alt="Profile Photo"
      width={600}
      height={600}
    />
  )
}

export default myPhoto;