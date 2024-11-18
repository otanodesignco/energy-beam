import FlashSpiral from './FlashSpiral.jsx'
import MiddleOrb from './MiddleOrb.jsx'
import CenterOrb from './CenterOrb.jsx'

export default function Sphere( props ) 
{
  return (
    <group { ...props }>
        <FlashSpiral scale={ 1.4 } />
        <MiddleOrb />
        <CenterOrb />
    </group>
  )
}
