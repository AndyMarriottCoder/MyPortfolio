import Head from 'next/head'
import Header from '../components/layout/Header'
import Intro from '../components/Intro'
import About from './about'
import Blog from './blog'
import Projects from './projects'
import Contact from './contactMe'

export default function Home() {
  return (
    <div className="bg-[#0e7490] text-white h-screen snap-y snap-mandatory overflow=scroll z=0">
      <Head>
        <title>Andy Marriott - Software Engineer</title>
      </Head>

      <Header />

      <section id="intro" className="snap-start">
      <Intro />
      </section>

      <section id="about" className="snap-start">
      <About />
      </section>

      <section id="blog" className="snap-start">
      <Blog />
      </section>

      <section id="projects" className="snap-start">
      <Projects />
      </section>

      <section id="contact" className="snap-start">
      <Contact />
      </section>

    </div>
  )
}
