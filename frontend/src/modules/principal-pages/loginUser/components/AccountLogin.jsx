import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Account.css"
import { useAuth } from "../hooks/useAuth";
import { toast, Toaster } from "sonner";
import { NavForLogin } from "./NavForLogin";
import { AlreadyLogged } from "./AlreadyLogged";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { LoginFromGoogle } from "./LoginFromGoogle";
import { ButtonStyle } from "./ButtonStyle";
import iconZonaPets from "../../../general/assets/zonapetslogo.png"
import iconPerson from "../static/assets/person-add-outline.svg"
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
          success: 'Haz iniciado sesión.'
        });
    }

    useEffect(() => {
        console.log(dataUser)
    }, [dataUser])
    return (
        <>
            <GoogleOAuthProvider clientId="662936439332-at27tnvnji933e25o8s4ioqm2o80fgbp.apps.googleusercontent.com">
                {/* <NavForLogin/> */}
                    {
                        dataUser ? (
                            <AlreadyLogged/>
                        ) : (
                            <div className="containerOfLogin">
                                <Toaster richColors/>
                                <div className="containerform" id="move-content">
                                    <div className="containerLogoLogin">
                                        <img className="zonapetsLogoLogin" src={iconZonaPets} alt="" /> 
                                    </div>
                                    <div className="firstContainer">
                                        <h1>Inicia sesión</h1>
                                        <div className="optionsButtons">
                                            <LoginFromGoogle/>
                                            <Link to="/iniciarsesion/registrar/">
                                                <ButtonStyle
                                                    text="Crear una cuenta nueva"
                                                    srcImg={iconPerson}
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <hr className="hrLogin"/>
                                    {error && toast.error(`${error}`)}
                                    <form onSubmit={handleLogin}>
                                        <div className="form-group">
                                            <label>Correo</label>
                                            <input className="inputDataUser" onChange={handleDataOfLogin} type="email" id="email" name="email" placeholder="Ingresa tu email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Contraseña</label>
                                            <input className="inputDataUser" onChange={handleDataOfLogin} type="password" id="password" name="password" placeholder="Contraseña" />
                                        </div>
                                        <div className="buttonslogin">
                                            <button className="loginbutton" type="submit">Iniciar sesión</button>
                                        </div>                                   
                                    </form>                         
                                </div>
                            </div>
                        )
                    }        
            </GoogleOAuthProvider>
        </>
    );
}
