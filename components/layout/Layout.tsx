import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Intro from "../Intro";

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="grid min-h-screen grid-rows-header">
      <header className="items-start bg-black">
        <Header />
      </header>

      <div className="items-start">
        <Intro />
      </div> 

        
    </div>
    
  );
};
export default Layout;