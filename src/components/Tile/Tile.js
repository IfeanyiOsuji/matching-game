import React from 'react'
import './Tile.css'

export default function Tile(props) {
const tileColor = (props.selected || props.matched) ? {backgroundColor:props.color}
    : null

  return (
    <div className='Tile' style={tileColor} onClick={()=>props.handleTileClicked(props.id, props.color)}>
         { (props.selected || props.matched) ? <props.svg /> : null }
    </div>
  )
}
