import { MeshReflectorMaterial } from "@react-three/drei"
export default function Floor( props ) 
{
 
  return (
    <mesh { ...props } receiveShadow>
        <planeGeometry args={[ 120, 120, 64, 64]} />
        <MeshReflectorMaterial
           blur={[400, 100]}
           resolution={1024}
           mixBlur={1}
           mixStrength={15}
           depthScale={1}
           minDepthThreshold={0.85}
           color="#638899"
           metalness={0.6}
           roughness={1}
        />
    </mesh>
  )
}
