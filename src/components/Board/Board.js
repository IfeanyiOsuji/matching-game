
import Tile from "../Tile";

import React from 'react'
import './Board.css'

function Board(props) {
  const tileArray = props.tiles.map((tile) => <Tile {...tile} />);

  return (
  <div className='Board'>
     {/* { props.tiles.map((tile) => <Tile {...tile} />)} */}
     {tileArray}
    </div>
  )
}

export default Board