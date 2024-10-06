import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import HeroCamera from '../components/HeroCamera'
import HeroModel from '../components/HeroModel'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import RubixCube from '../components/RubixCube'
import Banana from '../components/Banana'
import Rings from '../components/Rings'
import ComputerMonitor from '../components/ComputerMonitor'
import Button from '../components/Button'
import { calculateSizes } from '../constants'

type Props = {}

const Hero = (props: Props) => {

  const isSmall = useMediaQuery({ maxWidth:450 })
  const isMobile = useMediaQuery({ maxWidth:768 })
  const isTablet = useMediaQuery({ minWidth:768, maxWidth:1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  const x = useControls(
    'HeroModel',
    {
      scale:{
        value: 1,
        min: 2,
        max: 10,
      },
      positionX: {
        value: 2.5,
        min: -10,
        max: 10,
      },
      positionY: {
        value: 2.5,
        min: -10,
        max: 10,
      },
      positionZ: {
        value: 2.5,
        min: -10,
        max: 10,
      },
      rotationX:{
        value: 0,
        min: -10,
        max: 10,
      },
      rotationY:{
        value: 0,
        min: -10,
        max: 10,
      },
      rotationZ:{
        value: 0,
        min: -10,
        max: 10,
      },
    }
  )

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
        <Leva />

        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>

          <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
          {/* PerspectiveCamera - lowering z-position increases model size */}

          <HeroCamera isMobile={isMobile}>
            <HeroModel 
              scale={isMobile ? 1.7 : 3.76} 
              position={[-0.9, -2.3, 2.5]}
              rotation={[0, -Math.PI / 2, 0]}
              //scale={[x.scale, x.scale, x.scale]}
              //position={[x.positionX, x.positionY, x.positionZ]}
              //rotation={[x.rotationX, x.rotationY, x.rotationZ]}
              //scale={3} 
              //position={[0, 0, 0]}
              //rotation={[0, -Math.PI / 2, 0]}
            />          
          </HeroCamera>

          <group>
            <Target 
              scale={sizes.targetScale}
              position={sizes.targetPosition}
              rotation={[0, 1.1, 0]}
            />

            <ReactLogo 
              scale={1.3}
              position={sizes.reactLogoPosition}
              rotation={[0, 1.7, 0]}
            />

            <RubixCube 
              scale={.7}
              position={sizes.rubixCubePosition}
              rotation={[0, 1.7, 0]}
            />
            <Banana
              scale={4}
              position={sizes.bananaPosition}
              rotation={[0, 1.6, 0]}
            />

            <Rings
              scale={4}
              position={sizes.ringsPosition}
              rotation={[0, 1.6, 0]}
            />

            <ComputerMonitor 
              scale={1.2}
              position={sizes.computerMonitorPosition}
              rotation={[0, 15, 0]}
            />
          </group>

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />

          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-10 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className='w-fit'>
          <Button 
            name="Let's Collaborate!"
            isBeam
            containerClass='sm:w-fit w-full sm:min-w-96'
          />
        </a>
      </div>

    </section>
  )
}

export default Hero