import zonapetsLogo from "../../../general/assets/zonapetslogo.png"
import templateMac from "../static/assets/loginTemplateImg.png"
import iconLock from "../static/assets/lock-open-outline.svg"
import backIcon from "../static/assets/chevron-back-outline.svg"
import "../landingLogin.css"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { useEffect, useState } from "react"
import axios from "axios"

export function InicialLandingLogin() {
    const {dataUser, setToken, setDataUser} = useAuth()
    const [formData, setFormData] = useState({
        nombre: dataUser?.nombre || "",
        email: dataUser?.email || "",
        username: dataUser?.username || "",
        telefono: dataUser?.telefono || "",
        ciudad: dataUser?.ciudad || ""
    });
    console.log(formData)
    const navigate = useNavigate();

    useEffect(() => {
        const tokenFromLocal = window.localStorage.getItem("access_token")
        if (tokenFromLocal) {
            setToken(tokenFromLocal)
        }
    }, [])

    useEffect(() => {
        if (dataUser) {
            setFormData({
                nombre: dataUser.nombre || "",
                email: dataUser.email || "",
                username: dataUser.username || "",
                telefono: dataUser.telefono || "",
                ciudad: dataUser.ciudad || ""
            });
        }
    }, [dataUser]);

    const submitLogout = () => {
        window.localStorage.removeItem("access_token")
        window.localStorage.removeItem("refresh_token")
        setDataUser(null)
        navigate("/iniciarsesion/login")
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = window.localStorage.getItem("access_token");
            console.log(token)
            await axios.post(
                'http://127.0.0.1:8000/api/update_user_info/', 
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            alert("Información actualizada con éxito");
        } catch (error) {
            console.error("Error actualizando la información:", error);
        }
    };

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
                            <form onSubmit={handleSubmit} id="editForm">
                                <div className="textInput1">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input onChange={handleInputChange} type="text" id="nombre" name="nombre" defaultValue={dataUser.nombre} placeholder={dataUser.nombre} required/>
                                </div>
                                <div className="textInput2">
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input onChange={handleInputChange} type="email" id="email" name="email" defaultValue={dataUser.email} placeholder={dataUser.email} required/>
                                </div>
                                <div className="containerFlex">
                                    <div className="infoUsername">
                                        <label htmlFor="username">Username</label>
                                        <input onChange={handleInputChange} type="text" id="username" name="username" defaultValue={dataUser.username}
                                        placeholder={dataUser.username} required/>
                                    </div>
                                    <div className="phoneUser">
                                        <label htmlFor="telefono">Teléfono</label>
                                        <input onChange={handleInputChange} type="text" id="telefono" name="telefono" defaultValue={dataUser.telefono}
                                            placeholder={dataUser.telefono}/>
                                    </div>
                                </div>
                                <div className="textInput5">
                                    <label htmlFor="ciudad">Ciudad de residencia</label>
                                    <input onChange={handleInputChange} type="" id="ciudad" name="ciudad" defaultValue={dataUser.ciudad}
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