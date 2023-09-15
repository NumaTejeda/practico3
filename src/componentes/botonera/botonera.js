import Boton from './boton/boton';
import './boton/boton.css';
import './botonera.css';
import styled from 'styled-components';
// import { useRef } from 'react';



// queda por hacer: que se pinten las opciones al ser selecionadas
function Botonera(props){
    // const elementRef = useRef(null);

    // const changeDisplay = () =>{
    //     if(props.name !== ""){
    //         document.getElementsByClassName("choise")[0].style.display = "flex";
    //     }
    //     else{
    //         changeDisplay();
    //     }
    // }
    const handlePlayUser = (USER_PLAY) => {
        console.log(USER_PLAY + " COMPONENTE PADRE")
        props.playUser(USER_PLAY);
    }
    
    
    return (
        <div className='choise' /*ref={elementRef}*/>
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