import './info.css';

function Info() {
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
            <button id="continue" disabled="">
                Continue...
            </button>
        </div>
    )
}
export default Info;