/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Griffin Keller (https://sketchfab.com/griffinkeller)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/retro-computer-monitor-b4e4f8a5685b45bfa2916a519a71176e
Title: Retro Computer Monitor
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const ComputerMonitor = (props) => {
  const { nodes, materials } = useGLTF('/models/retro_computer_monitor.glb')

  const monitorTexture = useTexture('https://c.tenor.com/x8v1oNUOmg4AAAAd/tenor.gif')

  return (
    <group {...props} dispose={null}>
      <group position={[-3.199, 0, 5.594]} rotation={[0, Math.PI / 2 ,0]} scale={0.02}>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane__0.geometry}
            material={materials.Plane__0}
            position={[88.238, 166.36, 0]}
            scale={1.055}>
            <meshMatcapMaterial map={monitorTexture} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Box_Mat_0.geometry}
            material={materials.material}
            position={[-83.182, 169.758, 0]}
            scale={1.055}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FrontPanel_Mat_0.geometry}
            material={materials.Mat_0}
            position={[83.193, 177.17, 0]}
            scale={1.055}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/retro_computer_monitor.glb')

export default ComputerMonitor