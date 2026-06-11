import React from 'react'
import Preloader from './components/Preloader'
import SiteChrome from './components/SiteChrome'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Preloader />
      <SiteChrome />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Process />
        <Contact />
      </main>
    </>
  )
}

export default App
