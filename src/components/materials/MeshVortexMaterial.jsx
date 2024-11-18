import React, { useRef } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import { shaderMaterial, useTexture } from '@react-three/drei'
import vertex from '../../shaders/vortex/vertex.glsl'
import fragment from '../../shaders/vortex/fragment.glsl'
import { DoubleSide, RepeatWrapping } from 'three'

export default function MeshVortexMaterial({
    panSpeed = 0.5, // speed of panning
}) 
{
    const self = useRef()

    const noise1 = useTexture('./textures/rgb-256x256.png')
    noise1.wrapT = RepeatWrapping
    noise1.wrapS = RepeatWrapping

    const gradientMap = useTexture('./textures/gradientmap4.png')

    const uniforms =
    {
        uTime: 0,
        uNoise1:  noise1,
        uGMap: gradientMap,
    }

    useFrame( ( state, delta ) =>
    {
        self.current.uniforms.uTime.value += delta
    })

    const MeshVortexMaterial = shaderMaterial( uniforms, vertex, fragment )
    extend( { MeshVortexMaterial } )

  return (
    <meshVortexMaterial 
        key={ MeshVortexMaterial.key }
        ref={ self }
        transparent={ true }
        side={ DoubleSide }
    />
  )
}
