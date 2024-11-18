import { shaderMaterial, useTexture } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Color, DoubleSide, RepeatWrapping, Vector2 } from 'three'
import vertex from '../../shaders/beam/vertex.glsl'
import fragment from '../../shaders/beam/fragment.glsl'

export default function MeshBeamMaterial({
    colorBeam = '#022028', // color of the beam
    colorIntensity = 1., // intensity for bloom
    speedBeam = new Vector2( 0.4, 0.7 ), // animation speed
    powerOffset = 1.2, // pow offset for cutting
    noiseTexture = './textures/noiseVoronoi2.png', // noise texture
    clipThreshold = 0.4, // clip threshold
    skew = true, // skew texture
    skewAmt = new Vector2( 1.0, 1.3 ), // skew amount
    hardEdge = true, // uses step to create hard edge
    edgeClip = 0.145
}) 
{
    const self = useRef()

    const noise = useTexture( noiseTexture )
    noise.wrapS = RepeatWrapping
    noise.wrapT = RepeatWrapping

    colorBeam = new Color( colorBeam ).multiplyScalar( colorIntensity )
    speedBeam = ( speedBeam instanceof Vector2 ) ? speedBeam : new Vector2( 0.6, 0.0 )
    skewAmt = ( skewAmt instanceof Vector2 ) ? skewAmt : new Vector2( 1.0, 1.0 )

    const uniforms =
    {
        uTime: 0,
        uColor: colorBeam,
        uTexture: noise,
        uPowerOffset: powerOffset,
        utimeOffset: speedBeam,
        uClipThreshold: clipThreshold,
        uSkew: skew,
        uSkewAmt: skewAmt,
        uHardEdge: hardEdge,
        uEdgeAmt: edgeClip,
    }

    useFrame( ( state, delta ) =>
    {
        self.current.uniforms.uTime.value += delta
    })

    const MeshBeamMaterial = shaderMaterial( uniforms, vertex, fragment )
    extend( { MeshBeamMaterial } )

  return (
    <meshBeamMaterial 
        key={ MeshBeamMaterial.key }
        ref={ self }
        transparent={ true }
        side={ DoubleSide }
    />
  )
}
