import './App.css';
import PlayGround from './components/PlayGround';
import React, { useState } from 'react';
import Tiles from './model/Tiles';

const TILES = new Tiles();

function App() {
    
    let [tilesState, setFieldState] = useState(TILES.getTiles());

    function changeTilesState(id) {
        TILES.flipState(id);
        
        setFieldState(TILES.getTiles());

        if (TILES.checkStateCount() >= 9) {
            alert("Siker!");
        }
    }


    return (
        <div className="App">
            <PlayGround tiles={tilesState} clickFunction={changeTilesState} />

            <footer>Péti Dominik</footer>
        </div>
    );
}

export default App;
