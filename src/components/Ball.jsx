import { MeshReflectorMaterial, useTexture } from "@react-three/drei"

export default function Ball( props ) 
{
    const matcap = useTexture('./textures/6.png')
  return (
    <mesh {...props} >
        <sphereGeometry args={[1]} />
        <meshMatcapMaterial
            matcap={ matcap }
        />
    </mesh>
  )
}
