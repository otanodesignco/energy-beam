/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import MeshDustyMaterial from './materials/MeshDustyMaterial'

export function BlastInner(props) {
  const { nodes } = useGLTF('./models/blast.glb')
  return (
    <group {...props} dispose={null}>
        <mesh
            geometry={nodes.Cylinder.geometry}
            position={[0, 10.477, 0]}
        >
            <MeshDustyMaterial />
        </mesh>
    </group>
  )
}

useGLTF.preload('./models/blast.glb')