import Boton from './boton/boton';
import './boton/boton.css';
import './botonera.css';
// import { useRef } from 'react';
// import styled from 'styled-components';


function Botonera(props){

    const handlePlayUser = (USER_PLAY) => {
        console.log(USER_PLAY + " COMPONENTE PADRE")
        props.playUser(USER_PLAY);
    }

    if(props.nombreDeInfo !== ""){
        document.getElementsByClassName("choise")[0].style.display = "flex";
    }

    return (
        <div className='choise' style={{display: 'none'}}>
            <Boton
                imagen='piedra.png'
                altImagen='boton piedra'
                ID='piedra'
                playUser={handlePlayUser}/>
            <Boton
                imagen='papel.png'
                altImagen='boton papel'
                ID='papel'
                playUser={handlePlayUser}/>
            <Boton
                imagen='tijera.png'
                altImagen='boton tijera'
                ID='tijera'
                playUser={handlePlayUser}/>
        </div>
    )
}
export default Botonera;