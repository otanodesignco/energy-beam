import { shaderMaterial, useTexture } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Color, DoubleSide, RepeatWrapping, Vector2 } from 'three'
import vertex from '../../shaders/dusty/vertex.glsl'
import fragment from '../../shaders/dusty/fragment.glsl'

export default function MeshDustyMaterial() 
{
    const self = useRef()

    const texture = useTexture('./textures/widen_1840x0.png')
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping

    const uniforms = 
    {
        uTime: 0,
        uTexture: texture,
        uPanSpeed: new Vector2( 1.1 , 0.0 ),
        uColor1: new Color( '#0E0EC0' ),
        uColor2: new Color( '#3DF5FF' ).multiplyScalar( 2 ),
    }

    useFrame( ( state, delta ) =>
    {
        self.current.uniforms.uTime.value += delta
    })
    const MeshDustyMaterial = shaderMaterial( uniforms, vertex, fragment )

    extend( { MeshDustyMaterial } )

  return (
    <meshDustyMaterial
        key={ MeshDustyMaterial.key }
        ref={ self }
        transparent={ true }
        side={ DoubleSide }
    />
  )
}
