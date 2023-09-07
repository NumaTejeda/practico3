import './boton.css'

function Boton(props){
    return(
        <img 
            src={require(`../../../img/${props.imagen}`)} 
            alt={props.altImagen} 
            className="botones" 
            id="piedra" 
        />
    )
}

export default Boton;