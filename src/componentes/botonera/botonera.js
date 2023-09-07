import Boton from './boton/boton';
import './boton/boton.css';
import './botonera.css';
function Botonera() {
    return (
        <div className='choise'>
            <Boton
                imagen='piedra.png'
                altImagen='boton piedra'
            />
            <Boton
                imagen='papel.png'
                altImagen='boton papel'
            />
            <Boton
                imagen='tijera.png'
                altImagen='boton tijera'
            />
        </div>
    )
}
export default Botonera;