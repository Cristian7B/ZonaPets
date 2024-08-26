import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Account.css"
import { useAuth } from "../hooks/useAuth";
import { toast, Toaster } from "sonner";
import { NavForLogin } from "./NavForLogin";
import { AlreadyLogged } from "./AlreadyLogged";
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
        <NavForLogin/>
            {
                dataUser ? (
                    <AlreadyLogged/>
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
