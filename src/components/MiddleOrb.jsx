import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import MeshNoiseMaterial from './materials/MeshNoiseMaterial.jsx'
import { Vector2 } from 'three'

export default function MiddleOrb(props) 
{
    const self = useRef()

    useFrame( ( state, delta ) =>
    {
        const time = state.clock.getElapsedTime() * 5
    })


    return (
        <group {...props} dispose={null}>
            <mesh ref={ self }>
                <icosahedronGeometry args={[ 1.1, 5, 5 ]} />

                <MeshNoiseMaterial
                    baseColor='#3DF5FF'
                    colorIntensity={ 1.5 }
                    darkPower={ 0.56 }
                    timeOffset={ new Vector2( 0.3, 0.4 ) }
                />
            </mesh>
        </group>
    )
}