import './info.css';

let USER_NAME;

function Info(props){
    function handleDisplay(d){
        let modo = document.getElementById("error").style.display = d;
        props.setDisplay(modo);
    }

    function errorName(){
        USER_NAME = document.getElementById("name").value;
        const BUSCAR = /^[A-Za-z0-9_-ñÑáéíóúÁÉÍÓÚ]{3,16}/;              
        let busqueda = BUSCAR.test(USER_NAME);
        if(busqueda === true){
            USER_NAME = USER_NAME.trim();
            handleDisplay("none")
            props.setBtnActivo(true);
            return USER_NAME;
        }
        handleDisplay("block")
        props.setBtnActivo(false)        
        return;
    }

    const handleName = () => {
        props.setInputState(true);
        props.setBtnActivo(false);
        props.setMostrarBotonera(true);
        let USER_NAME = document.getElementById("name").value;
        props.setName(USER_NAME);
    }
    return (
        <div id="info">
            <label htmlFor="name">Nombre de usuario:</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name here..."
                autoComplete="name"
                maxLength={15}
                onChange={errorName}
                disabled={props.inputState}
            />
            <p id="error" style={{ display:{handleDisplay}}}>
                Campo obligatorio 👆
            </p>
            <button id="continue" onClick={handleName} disabled={!props.btnActivo}>
                Continue...
            </button>
        </div>
    )

}
export default Info;