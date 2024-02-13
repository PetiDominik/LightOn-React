import Tile from "./Tile";
import './PlayGround.css';
import { useContext } from "react";
import { LampContext } from "../contex/LampContext";

function PlayGround(props) {

    const { tilesState } = useContext(LampContext);

    return (
        <div className="playGround">
            {
                tilesState.map((element, index) => {
                    return (
                        <Tile key={index} id={index} state={element} />
                    )
                })
            }
        </div>
    )
}

export default PlayGround;