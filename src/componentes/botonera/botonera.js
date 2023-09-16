import Boton from './boton/boton';
import './boton/boton.css';
import './botonera.css';
import styled from 'styled-components';



// queda por hacer: que se pinten las opciones al ser selecionadas
function Botonera(props){
    
    const handlePlayUser = (USER_PLAY) => {
        props.playUser(USER_PLAY);
        props.setBtnDisabled(false);
    }
    
    
    return (
        <div className='choise'>
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