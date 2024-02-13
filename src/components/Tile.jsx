import { useContext } from 'react';
import { LampContext } from '../contex/LampContext';
import './Tile.css';

function Tile(props) {

    const { changeTilesState } = useContext(LampContext);

    let classes = `tile ${props.state}`;
    return (
        <div className={classes} key={props.key} onClick={() => {changeTilesState(props.id)}}>

        </div>
    )
}

export default Tile;