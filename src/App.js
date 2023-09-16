import './App.css';
import Info from './componentes/info/info';
import Botonera from './componentes/botonera/botonera';
import Title from './componentes/title/title';
import PlayMode from './componentes/playMode/play_mode';
import { useState } from 'react';

function App(){
  
  const [name, setName] = useState("");
  const [inputState, setInputState] = useState(false);
  const [btnActivo, setBtnActivo] = useState(false);
  const [display, setDisplay] = useState("none");
  const [mostrarBotonera, setMostrarBotonera] = useState(false)
  const [jugadaUsuario, setJugadaUsuario] = useState(null);
  const [btnDisabled, setBtnDisabled] = useState(true);

  
  // Esta funcion esta trayendo la eleccion del jugador desde dos niveles mas abajo. 
  let playUser = (USER_PLAY) => {
    setJugadaUsuario(USER_PLAY);
  }
  const reset = () => {
    setName("");
    setInputState(false);
    playUser = "";
    setMostrarBotonera(false);
    setBtnActivo(true);
  }
     
  return (
    <div className='App'>
      <Title />
      <Info 
        setName={setName} 
        setInputState={setInputState} 
        setBtnActivo={setBtnActivo} 
        setDisplay={setDisplay}
        setMostrarBotonera={setMostrarBotonera}
        inputState={inputState}
        btnActivo={btnActivo}
        display={display}
        />
      { mostrarBotonera && <Botonera 
        name={name}
        playUser={playUser} 
        reset={reset}
        setBtnDisabled={setBtnDisabled}
        />}
      <PlayMode  
        name={name} 
        reset={reset}
        jugadaUsuario={jugadaUsuario}
        setMostrarBotonera={setMostrarBotonera}
        setBtnDisabled={setBtnDisabled}
        btnDisabled={btnDisabled}
        />
    </div>
  );
}

export default App;
