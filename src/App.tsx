import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'

type Props = {}

const App = (props: Props) => {


  return (
    <main className='bg-purple-900'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default App