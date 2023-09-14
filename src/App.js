import './App.css';
import Info from './componentes/info/info';
import Botonera from './componentes/botonera/botonera';
import Title from './componentes/title/title';
import PlayMode from './componentes/playMode/play_mode';
import { useState } from 'react';

function App(){
  const [name, setName] = useState("");

  const playUser = (USER_PLAY) => {
    console.log(USER_PLAY + " COMPONENTE ABUELO")
  }
  const nombreDeInfo = name;
      
  return (
    <div className='App'>
      <h1>Estoy en react</h1>
      <Title />
      <Info setName={setName}/>
      <Botonera nombreDeInfo={nombreDeInfo} playUser={playUser}/>
      <PlayMode name={name} />
    </div>
  );
}

export default App;
