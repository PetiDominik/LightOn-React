import Tile from "./Tile";
import './PlayGround.css';

function PlayGround(props) {
    
    return (
        <div className="playGround">
            {
                props.tiles.map((element, index) => {
                    return (
                        <Tile key={index} id={index} state={element} clickFunction={props.clickFunction} />
                    )
                })
            }
        </div>
    )
}

export default PlayGround;