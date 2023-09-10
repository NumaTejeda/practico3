import Boton from './boton/boton';
import './boton/boton.css';
import './botonera.css';
// import styled from 'styled-components';


function Botonera({name}){
    if(name !== ""){
        document.getElementsByClassName("choise")[0].style.display = "flex";
    }
    return (
        <div className='choise' style={{display: "none"}}>
            <Boton
                imagen='piedra.png'
                altImagen='boton piedra'
                ID='piedra'
                />
            <Boton
                imagen='papel.png'
                altImagen='boton papel'
                ID='papel'
                />
            <Boton
                imagen='tijera.png'
                altImagen='boton tijera'
                ID='tijera'
                />
        </div>
    )
}
export default Botonera;