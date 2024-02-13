import './App.css';
import PlayGround from './components/PlayGround';
import React, { useState } from 'react';
import LampProvider from './contex/LampContext';


function App() {

    return (
        <div className="App">
            <LampProvider>
                <PlayGround />
            </LampProvider>

            <footer>Péti Dominik</footer>
        </div>
    );
}

export default App;
