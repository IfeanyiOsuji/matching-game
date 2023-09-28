import Board from "../Board/Board";
import OptionalPanel from "../OptionalPanel";
import './App.css'
import { createTiles } from "../../misc/utils";

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
    startGame(){
        this.setState((state)=>{
           return { playing : true,
            previousTileIndex : null,
            toBeCleared : null,
            tiles : createTiles(this.state.numTiles)
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