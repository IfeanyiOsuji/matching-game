import React from 'react'
import TileSelector from '../TileSelector'
import Button from '../Button/Button'

function OptionalPanel(props) {
  return (
    <>
        <TileSelector numTiles = {props.numTiles}/>
        <Button playing = {props.playing} startGame = {props.startGame}/>
    </>
  )
}

export default OptionalPanel