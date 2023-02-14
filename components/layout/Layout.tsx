import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Sidebar from "../sidebar";
import Intro from "../Intro";

const Layout = () => {
  return (
    <div className="grid min-h-screen grid-rows-header">
      <header className="items-start bg-black">
        <Header />
      </header>
        
      <div className="h-screen flex flex-row justify-start">
        <Sidebar />
      </div>

      <div className="items-start">
        <Intro />
      </div> 

        
    </div>
    
  );
};
export default Layout;