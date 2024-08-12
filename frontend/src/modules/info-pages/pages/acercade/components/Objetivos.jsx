import imgObjetivos from "../static/assets/imgObjetivos.png"

export function Objetivos() {
    return (
        <div className="container-objetivos">
            <div className="text-info">
                <h2 id="text2">Nuestros objetivos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehender</p>
            </div>
            <img className="img" src={imgObjetivos} alt="Objetivos de ZonaPets"/>
        </div>
    )
}