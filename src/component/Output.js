import React from 'react'
import OutputRow from './OutputRow'

export default function Output() {
  return (
    <div>
        <OutputRow value={99} textSize={{ fontSize: '20px'}} />
        <OutputRow value={100} textSize={{ fontSize: '20px'}} />
    </div>
  )
}
