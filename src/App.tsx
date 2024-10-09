import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'

type Props = {}

const App = (props: Props) => {


  return (
    <main className='bg-purple-800'>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App