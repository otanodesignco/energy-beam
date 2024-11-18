import Vortex from './components/Vortex.jsx'
import BeamSpiral from './components/BeamSpiral.jsx'
import Floor from './components/Floor.jsx'
import Ball from './components/Ball.jsx'
import Blast from './components/Blast.jsx'
import { useRef } from 'react'
import { useProgress } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import Sphere from './components/Sphere.jsx'

export default function Experience()
{

    const blastRef = useRef()
    const beamRef = useRef()
    const orbRef = useRef()
    const vortexRef = useRef()

    const tl = gsap.timeline()

    const progress = useProgress()

    useFrame( ( state, delta ) =>
    {
        if( progress.progress === 100 )
        {
            tl.to( orbRef.current.scale, {
                x: 0.6,
                y: 0.6,
                z: 0.6,
                duration: 0.7
                ,delay: 1
            })
            tl.to( orbRef.current, {
                visible: false,
            })
            tl.to( blastRef.current.scale ,{
                x: 1,
                y: 1,
                z: 1,
                duration: 0.8,
                delay: 0.2
            }, '>')
            tl.to( vortexRef.current.scale, {
                x: 1,
                y: 1,
                z: 1,
                duration: 0.8,
                delay: 0.2,

            }, '<')
            tl.to( beamRef.current.scale , {
                z: 1,
                duration: 0.8,
                delay: 0.2,
            }, "<")
        }
    })
    
    return(
        
        <group>
            <group rotation-y={ 35 * Math.PI / 180 }>
                <group  position={ [ 0, 1.2, 3 ] }>
                    <group ref={ vortexRef } scale={ 0 }>
                        <Vortex />
                    </group>
                    <group ref={ beamRef } scale-z={ 0 }>
                        <BeamSpiral position-y={ -0.9 }  />
                    </group>
                    
                </group>
                <group ref={ orbRef } scale={ 0 }>
                    <Sphere position={ [ 0, 1.6, 6] } />
                </group>
                
                <Ball position-y={ 1 } />
                
            </group>
            <group ref={ blastRef } scale={ 0 }>
                <Blast position-y={ 0 } scale={ 0.25 } />
                <Blast position-y={ 0 } scale={ 0.15 } />
            </group>
            <Floor rotation-x={ -90 *  Math.PI / 180 } />
        </group>
        
        
    )
}