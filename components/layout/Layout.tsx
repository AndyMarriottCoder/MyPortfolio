import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Intro from "../Intro";
import Header2 from "@/pages/Header2"

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="grid min-h-screen grid-rows-header">
      <header className="items-start bg-black">
        <Header2 />
      </header>

      <div className="items-start">
        <Intro />
      </div> 

        
    </div>
    
  );
};
export default Layout;