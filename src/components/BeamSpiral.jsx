import BeamCenter from "./BeamCenter"
import BeamMid from "./BeamMid"
import BeamOuter from "./BeamOuter"

export default function BeamSpiral( props ) 
{
  return (
    <group
        {...props}
    >
        <BeamOuter scale={ 0.7 } />
        <BeamMid scale={ 0.5 }  position-y={ 0.2 } />
        <BeamCenter scale={ 0.4 } position-y={ 0.3 } />
    </group>
  )
}
