
import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import iconCheck from "../static/assets/checkmark-circle-outline.svg"

export function AlreadyLogged() {
    const {dataUser} = useAuth()
    return (
        <div className="showAlreadyLogin">
        <div className="alertLogin">
            <img src={iconCheck} alt="" />
            <div className="textToShow">
                <div className="headerTextLogin">
                    <h1>
                        ¡Has iniciado 
                        sesion! 
                    </h1>
                    <h1>
                        <span> {dataUser.nombre}</span>
                    </h1>
                </div>
                <p className="dataToRedirect">
                    Revisa tus datos y la información de tu cuenta.
                    Si necesitas realizar algún cambio o actualizar tu información, 
                    ahora es el momento perfecto para hacerlo.
                </p>
            </div>
            <Link className="redirectLinkData" to="/iniciarsesion">
                <button>Tus datos</button>
            </Link>
        </div>
    </div>
    )
}