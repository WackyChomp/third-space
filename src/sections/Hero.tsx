import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className="min-h-screen">
      <div className="text-red-500 w-full mx-auto flex flex-col sm:mt-22 mt-20 c-space gap-5">
        <p className='mt-5 sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
          Hello, you are now in my dOmAiN !1! <span className='waving-hand'>👋</span>
        </p>
        <p className='hero_tag text-green-500'>
          Transfrom Ideas & Visions
        </p>
      </div>
    </section>
  )
}

export default Hero