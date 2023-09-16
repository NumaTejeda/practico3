import { useState } from 'react';
import './play_mode.css';

let PIEDRA = "piedra", PAPEL = "papel", TIJERA = "tijera";
let OPCIONES = [PIEDRA, PAPEL, TIJERA];
let SCORE_PC = 0;
let SCORE_USUARIO = 0;
let PC_PLAY;
const POSIBLES_RESULTADOS = ["Empate!", "Ganaste!", "Gana la PC!"];

function jugadaPC(){
    PC_PLAY = OPCIONES[Math.floor(Math.random() * 3)];
    return PC_PLAY;
};

function PlayMode(props){    
    
    const [textoResultado, setTextoResultado] = useState("");
    const [textoScore, setTextoScore] = useState("");
    const [ganador, setGanador] = useState("");

    const borrarPantalla = () => {
        
            setGanador("");
            setTextoResultado("");
            setTextoScore("");
       
    }
    function resultadosParciales(jugadaUsuario, jugadaPC){
            if(jugadaUsuario === jugadaPC){return setTextoResultado(POSIBLES_RESULTADOS[0])}
            else if(jugadaUsuario === PAPEL){
                if(PC_PLAY === PIEDRA){SCORE_USUARIO += 1; return setTextoResultado(POSIBLES_RESULTADOS[1])}
                if(PC_PLAY === TIJERA){SCORE_PC += 1;return setTextoResultado(POSIBLES_RESULTADOS[2])}
            }
            else if(jugadaUsuario === PIEDRA){
                if(PC_PLAY === PAPEL){SCORE_PC += 1; return setTextoResultado(POSIBLES_RESULTADOS[2])}
                if(PC_PLAY === TIJERA){SCORE_USUARIO += 1; return setTextoResultado(POSIBLES_RESULTADOS[1])}
            }
            else if(jugadaUsuario === TIJERA){
                if(PC_PLAY === PIEDRA){SCORE_PC += 1; return setTextoResultado(POSIBLES_RESULTADOS[2])}
                if(PC_PLAY === PAPEL){SCORE_PC += 1; return setTextoResultado(POSIBLES_RESULTADOS[1])}
            }
    }
    const play = () => { 
        jugadaPC();
        resultadosParciales(props.jugadaUsuario, PC_PLAY);
        setTextoResultado(props.name + " jugó " + props.jugadaUsuario + ` y la pc ${PC_PLAY}`);
        setTextoScore(SCORE_USUARIO + "///" + SCORE_PC)        
        if(SCORE_PC  === 3|| SCORE_USUARIO === 3){
            setTextoResultado("Juego terminado")
            props.setMostrarBotonera(false);
            SCORE_PC = 0;
            SCORE_USUARIO = 0;
            props.setBtnDisabled(true);
            if(SCORE_PC === 3){return setGanador(POSIBLES_RESULTADOS[2])}
            else{return setGanador(POSIBLES_RESULTADOS[1])}
        }
    }
    
    return (
        <>
            <div>
                <button id="play" onClick={play} disabled={props.btnDisabled}>
                    Play
                </button>
            </div>
            <div id="pantalla">
                <p id="resultado">{textoResultado}<br/>{textoScore}<br/>{ganador}</p>
            </div>
            <div className="hide">
                <button className="reset" id="reset" onClick={()=>{props.reset(); borrarPantalla()}}>
                    Reset
                </button>
            </div>
        </>
    )
}
export default PlayMode;