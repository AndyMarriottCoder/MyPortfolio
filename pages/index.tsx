import React, { PropsWithChildren } from "react";
import Intro from "../components/Intro";
import Header2 from "@/components/Header2"
import Head from 'next/head'
import About from './about'
import Blog from './blog'
import Projects from './projects'
import Contact from './contactMe'
import Blog2 from "./blog2";

const Layout = (props: PropsWithChildren) => {
  return (
      <div className="grid min-h-screen grid-rows-header">
      <Head>
        <title>Andy Marriott - SDEII</title>
        <meta property="og:title" content="Andy Marriott - SDEII" key="title" />
        </Head>

      <header className="items-start bg-black">
        <Header2 />
      </header>

      <div className="items-start">
        <Intro />
      </div>

      <section id="about" className="snap-center">
        <About />
      </section> 

      <section id="blog">
        <Blog2 />
      </section> 

      <section id="projects">
        <Projects />
      </section> 

      <section id="contactMe">
        <Contact />
      </section> 



      

        
    </div>
    
  );
};
export default Layout;