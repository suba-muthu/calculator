import React from 'react'
import OutputRow from './OutputRow'

export default function Output({input, result}) {
  return (
    <div>
        <OutputRow value={result} textSize={{ fontSize: '20px'}} />
        <OutputRow value={input} />
    </div>
  )
}
