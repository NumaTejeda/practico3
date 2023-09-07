import './App.css';
import Info from './componentes/info/info';
import Botonera from './componentes/botonera/botonera';
import Title from './componentes/title/title';
import PlayMode from './componentes/playMode/play_mode';

function App() {
  return (
    <div className='App'>
      <Title />
      <Info />
      <Botonera />
      <PlayMode />
    </div>

  );
}

export default App;
