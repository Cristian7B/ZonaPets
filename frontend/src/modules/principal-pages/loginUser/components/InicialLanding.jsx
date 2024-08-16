import zonapetsLogo from "../../../general/assets/zonapetslogo.png"
import templateMac from "../static/assets/loginTemplateImg.png"
import iconLock from "../static/assets/lock-open-outline.svg"

import "../landingLogin.css"
import { Link } from "react-router-dom"

export function InicialLandingLogin() {
    return (
        <div className="containerAllLogin">
            <div className="containerInicioRedirect">
                <img className="logoDiv" src={zonapetsLogo} alt="Logo de zonapets"/>
                <img className="templateImgMac" src={templateMac} alt="Imagen de mac"/>
                <div className="featuresZonaPets">
                    <img src={iconLock} className="iconLockFeature" alt="" />
                    <h1>¡Desbloquea todas las características de <span>ZonaPets</span>!</h1>
                    <div className="listItemsChars">
                        <ul>
                            <li>
                                Lorem Ipsum
                            </li>
                            <li>
                                Doro simend
                            </li>
                            <li>
                                Kasi foro aeis
                            </li>
                            <li>
                                Dumait
                            </li>
                        </ul>
                    </div>
                    <Link className="redirectAnchordLogin" to="/iniciarsesion/login">
                        <button className="redirectButtonLogin">
                                Inicia sesión o Registrate
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}