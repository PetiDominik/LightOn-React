import { createContext, useState } from "react";
import Tiles from "../model/Tiles";


const TILES = new Tiles();
export const LampContext = createContext("");

export default function LampProvider({children}) {

    let [tilesState, setFieldState] = useState(TILES.getTiles());

    function changeTilesState(id) {
        TILES.flipState(id);
        
        setFieldState(TILES.getTiles());

        if (TILES.checkStateCount() >= 9) {
            alert("Siker!");
        }
    }

    return (
        <LampContext.Provider value={{tilesState, setFieldState, changeTilesState}} >
            {children}
        </LampContext.Provider>
    );
}