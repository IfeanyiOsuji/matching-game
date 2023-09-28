import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <button onClick={props.startGame}>
        {props.playing ? 'reset' : 'start'}
    </button>
  )
}

export default Button