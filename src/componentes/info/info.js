import './info.css';
import { useState } from 'react';

let USER_NAME;

function Info({setName}){
    const [inputState, setInputState] = useState(false);
    const [btnActivo, setBtnActivo] = useState(false);
    const [display, setDisplay] = useState("none");
    function handleDisplay(d){
        let modo = document.getElementById("error").style.display = d;
        setDisplay(modo);
    }

    function errorName(){
        USER_NAME = document.getElementById("name").value;
        const BUSCAR = /[A-Za-z0-9]/;             
        let busqueda = BUSCAR.test(USER_NAME);
        if(busqueda === true){
            USER_NAME = USER_NAME.trim();
            handleDisplay("none")
            setBtnActivo(true);
            return USER_NAME;
        }
        handleDisplay("block")
        setBtnActivo(false)        
        return;
    }

    const handleName = () => {
        setInputState(true);
        setBtnActivo(false);
        let USER_NAME = document.getElementById("name").value;
        setName(USER_NAME);
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
                disabled={inputState}
            />
            <p id="error" style={{ display:{handleDisplay}}}>
                Campo obligatorio 👆
            </p>
            <button id="continue" onClick={handleName} disabled={!btnActivo}>
                Continue...
            </button>
        </div>
    )

}
export default Info;