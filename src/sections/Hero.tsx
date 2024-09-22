import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import HeroModel from '../components/HeroModel.jsx'

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

      <div className="w-full h-full absolute inset-0">
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>

          <PerspectiveCamera makeDefault position={[0, 0, 30]}/>

          <HeroModel 
            scale={0.5} 
            position={[0, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
          />

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />

          </Suspense>
        </Canvas>
      </div>

    </section>
  )
}

export default Hero