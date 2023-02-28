import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Intro from "../Intro";
import Header2 from "@/pages/Header2"
import Head from 'next/head'

const Layout = (props: PropsWithChildren) => {
  return (
      <div className="grid min-h-screen grid-rows-header">
        <Head>
        <title>Andy Marriott - SDEII</title>
      </Head>
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