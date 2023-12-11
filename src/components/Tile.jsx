import './Tile.css';

function Tile(props) {
    function clickFn() {
        props.clickFunction(props.id);
    }

    let classes = `tile ${props.state}`;
    return (
        <div className={classes} key={props.key} onClick={clickFn}>

        </div>
    )
}

export default Tile;