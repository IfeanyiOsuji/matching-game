import Board from "../Board/Board";
import OptionalPanel from "../OptionalPanel";
import './App.css'
import { createTiles, indexOfSelected } from "../../misc/utils";

const { Component } = require("react");

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            numTiles : 36,
            playing : false,
            previousTileIndex: null,
            tiles: [],
            toBeCleared : null,
        }
        
    }
    handleTileClicked(id, color){
        this.setState((state)=>{
            const tiles = state.tiles;
            let toBeCleared = state.toBeCleared;
            const selectedTileIndex = indexOfSelected(tiles, id, color);
            let previousTileIndex = state.previousTileIndex;
            if(toBeCleared !== null){
                tiles[toBeCleared[0]].selected = false;
                tiles[toBeCleared[1]].selected = false;
                toBeCleared = null;
            }
            tiles[selectedTileIndex].selected = true;
            if(previousTileIndex !== null){
                const previousTile = tiles[previousTileIndex];
                const selectedTile = tiles[selectedTileIndex];
                console.log(previousTileIndex)
                if(previousTile.id !== selectedTile.id && previousTile.color === color){
                    selectedTile.matched = true;
                    previousTile.matched = true;
                    previousTileIndex = null;
                }
                else{
                    toBeCleared = [previousTileIndex, selectedTileIndex];
                    previousTileIndex = null;
                }
            }
            else{
                previousTileIndex = selectedTileIndex;
            }
            return {tiles, toBeCleared, previousTileIndex};
        })
    }
    startGame(){
        this.setState((state)=>{
           return { playing : true,
            previousTileIndex : null,
            toBeCleared : null,
            tiles : createTiles(state.numTiles, this.handleTileClicked.bind(this))
           }
        })
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    Turbo-Matcher
                </header>
            <OptionalPanel playing={this.state.playing} numTiles={this.state.numTiles} startGame= {this.startGame.bind(this)}/>
            <Board numTiles={this.state.numTiles} tiles={this.state.tiles}/>
            </div>
        )
    }

}

export default App;