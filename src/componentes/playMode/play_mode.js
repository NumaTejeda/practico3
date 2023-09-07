import './play_mode.css';

function PlayMode() {
    return (
        <>
            <div>
                <button id="play">
                    Play
                </button>
            </div>
            <div id="pantalla">
                <p id="resultado" />
            </div>
            <div className="hide">
                <button className="reset" id="reset">
                    Reset
                </button>
            </div>
        </>
    )
}
export default PlayMode;