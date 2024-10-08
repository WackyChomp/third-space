import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

// Moving my mouse around tilts the screen

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef()
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 33], 0.25, delta);

  // to enable moving camera on mobile remove the if conditional
  if(!isMobile){
     easing.dampE(groupRef.current.rotation, [-state.pointer.y/3, -state.pointer.x/3, 0], 0.25, delta);
   }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 1.5 : 1 }>
      {children}
    </group>
  )
}

export default HeroCamera