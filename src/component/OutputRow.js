import React from 'react';
import './OutputRow.css';

export default function OutputRow(props) {
  return (
    <div>
        <input type='text' className='screen' readOnly  style={props.textSize} value={props.value} />
    </div>
  )
}
