import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import MeshNoiseMaterial from './materials/MeshNoiseMaterial.jsx'
import { Vector2 } from 'three'

export default function CenterOrb(props) 
{
    const self = useRef()

    useFrame( ( state, delta ) =>
    {
        const time = state.clock.getElapsedTime() * 5
    })


    return (
        <group {...props} dispose={null}>
            <mesh ref={ self }>
                <icosahedronGeometry args={[ 1.07, 5, 5 ]} />

                <MeshNoiseMaterial
                    baseColor='#0E0EC0'
                    colorIntensity={ 2 }
                    darkPower={ 0.35 }
                    timeOffset={ new Vector2( 0.3, 0.6 ) }
                />
            </mesh>
        </group>
    )
}