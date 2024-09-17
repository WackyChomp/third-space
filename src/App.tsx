import React from 'react'
import { useState } from 'react'

type Props = {}

const App = (props: Props) => {
  const [count, setCount] = useState(-10);

  return (
    <main className='text-red-600'>
      <h1>Story of my life</h1>
      <button 
        className='bg-white-600'
        onClick={() => setCount((count) => count + 2*2)}
      >
        count is currently: {count}
      </button>
    </main>
  )
}

export default App