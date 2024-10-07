import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Mesh from scratch

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

  useGSAP( () => {
    gsap.to(targetRef.current.position, {
      x: targetRef.current.position.x - 2,
      y: targetRef.current.position.y + 1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    })
  })
  return (
    <mesh {...props} ref={targetRef}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Target