import Image from "next/image";
import profilePhoto from '@/images/photoofme.png'
import React from "react";

function myPhoto(){
  return(
    <Image
      src={profilePhoto}
      alt="Icon used to collapse the sidebar"
      width={50}
    />
  )
}

export default CollapseIcon;