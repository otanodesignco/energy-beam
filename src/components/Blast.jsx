import React from 'react'
import { BlastInner } from './BlastInner'

export default function Blast( props ) {
  return (
    <group { ...props }>
        <BlastInner />
    </group>
  )
}
