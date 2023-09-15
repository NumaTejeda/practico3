import './play_mode.css';


function PlayMode(props){    

    return (
        <>
            <div>
                <button id="play">
                    Play
                </button>
            </div>
            <div id="pantalla">
                <p id="resultado">{props.name} jugó: {props.jugadaUsuario}</p>
            </div>
            <div className="hide">
                <button className="reset" id="reset" onClick={props.reset}>
                    Reset
                </button>
            </div>
        </>
    )
}
export default PlayMode;