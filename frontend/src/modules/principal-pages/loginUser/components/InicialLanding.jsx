import zonapetsLogo from "../../../general/assets/zonapetslogo.png"
import templateMac from "../static/assets/loginTemplateImg.png"
import iconLock from "../static/assets/lock-open-outline.svg"
import backIcon from "../static/assets/chevron-back-outline.svg"
import "../landingLogin.css"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { useEffect } from "react"

export function InicialLandingLogin() {
    
    const {dataUser, setToken, setDataUser} = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        const tokenFromLocal = window.localStorage.getItem("access_token")
        if (tokenFromLocal) {
            setToken(tokenFromLocal)
        }
    }, [])

    const submitLogout = () => {
        window.localStorage.removeItem("access_token")
        window.localStorage.removeItem("refresh_token")
        setDataUser(null)
        navigate("/iniciarsesion/login")
    }

    return (
        <>
            {
                !dataUser ? (
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
                ): (
                    <div className="containerAll">
                        <section className="infoDivUser">
                            <div className="containerBack">
                                <a href="https://zonapets.vercel.app/mapa/" className="goBackMap"><img src={backIcon} alt="" /></a>
                                <button id="logoutButtonResponsive" onClick={submitLogout} className="logoutButtonUser" >Cerrar sesión</button>
                            </div>
                            <div className="titleInformation">
                                <h1>Editar perfil</h1>
                                <button id="logoutButtonNormal" onClick={submitLogout} className="logoutButtonUser" >Cerrar sesión</button>
                            </div>
                            <form id="editForm">
                                <div className="textInput1">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input type="text" id="nombre" name="nombre" defaultValue={dataUser.nombre} placeholder={dataUser.nombre} required/>
                                </div>
                                <div className="textInput2">
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input type="email" id="email" name="email" defaultValue={dataUser.email} placeholder={dataUser.email} required/>
                                </div>
                                <div className="containerFlex">
                                    <div className="infoUsername">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" id="username" name="username" defaultValue={dataUser.username}
                                        placeholder={dataUser.username} required/>
                                    </div>
                                    <div className="phoneUser">
                                        <label htmlFor="telefono">Teléfono</label>
                                        <input type="text" id="telefono" name="telefono" defaultValue={dataUser.telefono}
                                            placeholder={dataUser.telefono}/>
                                    </div>
                                </div>
                                <div className="textInput5">
                                    <label htmlFor="ciudad">Ciudad de residencia</label>
                                    <input type="" id="ciudad" name="ciudad" defaultValue={dataUser.ciudad}
                                    placeholder={dataUser.ciudad}/>
                                </div>
                                <div className="buttonsForm">
                                    <a className="cancelButton" href="https://zonapets.vercel.app/mapa/">Cancelar</a>
                                    <button className="submit-datos" type="submit">Guardar</button>
                                </div>
                            </form>
                        </section>
                    </div>
                )
            }
        </>
    )
}