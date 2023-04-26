import Image from "next/image";
import swiftUILogo from 'public/static/images/SwiftUI.png'
import React from "react";

function SwiftUI(){
  return(
    <Image className="rounded-full pb-4"
      src={swiftUILogo}
      alt="SwiftUI Logo"
      width={600}
      height={600}
    />
  )
}

export default SwiftUI;