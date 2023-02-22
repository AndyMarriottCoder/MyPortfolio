import Image from "next/image";
import ToggleIcon from '@/images/CollapseIcon.png'
import React from "react";

function CollapseIcon(){
  return(
    <Image
      src={ToggleIcon}
      alt="Icon used to collapse the sidebar"
      width={50}
    />
  )
}

export default CollapseIcon;