import imgMision from "../static/assets/imgMision.png"

export function Mision() {
    return (
        <div className="container-mision">
            <img className="img" src={imgMision} alt="Mision de ZonaPet"/>
            <div className="text-info">
                <h2>Nuestra misión</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehender</p>
            </div>
        </div> 
    )
}