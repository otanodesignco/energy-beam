import React from 'react'
import MeshVortexMaterial from './materials/MeshVortexMaterial'

export default function Vortex() 
{
  return (
    <mesh>
        <planeGeometry args={[4,4,64,64]} />
        <MeshVortexMaterial />
    </mesh>
  )
}
