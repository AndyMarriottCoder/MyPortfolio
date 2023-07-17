import Image from "next/image";
import codePhoto from 'public/static/images/CodePhoto.jpg'
import React from "react";

function CodeBlog(){
  return(
    <Image2 className="rounded-full pb-4"
      src={codePhoto}
      alt="Coding Photo"
      width={600}
      height={600}
    />
  )
}

export default CodeBlog;