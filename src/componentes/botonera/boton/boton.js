import './boton.css';


function Boton(props){
    let USER_PLAY;
    const user_play = (boton) => {
        USER_PLAY = boton.id;
        console.log(USER_PLAY + " COMPONENTE NIETO")
        return props.playUser(USER_PLAY);
    }
    return(
        <img 
            src={require(`./img/${props.imagen}`)} 
            alt={props.altImagen} 
            className="botones" 
            id={props.ID} 
            onClick={(event) => user_play(event.target)}
        />
    )
}

export let USER_PLAY;
export default Boton;