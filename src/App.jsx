import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Contact />
      </main>
    </>
  )
}

export default App
