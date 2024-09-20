import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

type Props = {}

const App = (props: Props) => {


  return (
    <main className='bg-purple-800'>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App