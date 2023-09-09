import './info.css';

function Info({name, setName}){
    const handleName = () => {
        let nombre = document.getElementById("name").value;
        setName(nombre);
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
            />
            <p id="error" style={{ display: "none", color: "white" }}>
                Campo obligatorio 👆
            </p>
            <button id="continue" onClick={handleName}>
                Continue...
            </button>
        </div>
    )
}
export default Info;