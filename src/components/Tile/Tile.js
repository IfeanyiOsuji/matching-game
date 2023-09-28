import React from 'react'
import './Tile.css'

export default function Tile(props) {
const tileColor = (props.selected || props.matched) ? {backgroundColor:props.color}
    : null
console.log(props.svg)
  return (
    <div className='Tile' style={tileColor}>
         { (props.selected || props.matched) ? <props.svg /> : null }
    </div>
  )
}
