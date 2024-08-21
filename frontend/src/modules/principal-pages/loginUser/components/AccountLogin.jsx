import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import iconCheck from "../static/assets/checkmark-circle-outline.svg"
import "../Account.css"
import { useAuth } from "../hooks/useAuth";
import { toast, Toaster } from "sonner";
import { NavForLogin } from "./NavForLogin";
export function AccountLogin() {
    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate()

    useEffect(() => {
        const tokenFromLocal = window.localStorage.getItem("access_token")
        if (tokenFromLocal) {
            setToken(tokenFromLocal)
        }
    }, [])

    const {loginUser, error, dataUser, setToken} = useAuth()

    const handleDataOfLogin = e => {
        setDataLogin(() => ({
            ...dataLogin,
            [e.target.name]: e.target.value
        }));
    };

    const handleLogin = e => {
        e.preventDefault()

        toast.promise(loginUser(dataLogin), {
          loading: 'Iniciando sesión...',
          success: (data) => {
            return `${data.name} toast has been added`;
          },
          
        });
    }

    useEffect(() => {
        console.log(dataUser)
    }, [dataUser])

    return (
        <>
        <NavForLogin/>
            {
                dataUser ? (
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
                                        <span> {dataUser.nombre}.</span>
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
                ) : (
                    <div className="containerOfLogin">
                        <Toaster richColors/>
                        <div className="containerform" id="move-content">
                            <h1>Inicia sesión</h1>
                            {error && toast.error(`${error}`)}
                            <div className="register">
                                <div className="line-register"></div>
                                <div className="label-register"><Link to="/iniciarsesion/registrar">O crea una cuenta</Link></div>
                                <div className="line-register"></div>
                            </div>
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label>Correo</label>
                                    <input onChange={handleDataOfLogin} type="email" id="email" name="email" placeholder="Ingresa tu email" />
                                </div>
                                <div className="form-group">
                                    <label>Contraseña</label>
                                    <input onChange={handleDataOfLogin} type="password" id="password" name="password" placeholder="Contraseña" />
                                </div>
                                <div className="buttonslogin">
                                    <button className="loginbutton" type="submit">Iniciar sesión</button>
                                </div>                                   
                            </form>                         
                        </div>
                    </div>
                )
            
        
            }
        
        </>
    );
}
