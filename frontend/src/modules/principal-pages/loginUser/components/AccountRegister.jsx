import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast, Toaster } from "sonner";
import { NavForLogin } from "./NavForLogin";
import { AlreadyLogged } from "./AlreadyLogged";
import { LoginFromGoogle } from "./LoginFromGoogle";
import { ButtonStyle } from "./ButtonStyle";
import { GoogleOAuthProvider } from "@react-oauth/google";
import iconZonaPets from "../../../general/assets/zonapetslogo.png"
import iconAccount from "../static/assets/person-circle-outline.svg"
import { useRegister } from "../hooks/useRegister";
import { DataUserContext } from "../context/DataUserContext";
export function AccountRegister() {

    const {handleLogin, handleRegister, handleDataOfRegister} = useRegister()
    const { errorRegister, error, dataUser } = useAuth()
    const {stateRegister, setStateRegister} = useContext(DataUserContext)
    console.log(stateRegister)
    useEffect(() => {
        if (stateRegister) {
            handleLogin();
            setStateRegister(false)
        }
    }, [stateRegister]);



    return (
        <>
            <GoogleOAuthProvider clientId="662936439332-at27tnvnji933e25o8s4ioqm2o80fgbp.apps.googleusercontent.com">
                {
                    dataUser ? (
                        <AlreadyLogged/>
                    ) : (
                        <div className="containerOfLogin">
                            <Toaster expand={true} richColors/>
                            <div className="containerform" id="move-content">
                                <div className="containerLogoLogin">
                                    <img className="zonapetsLogoLogin" src={iconZonaPets} alt="" /> 
                                </div>
                                <div className="firstContainer">
                                    <h1>Crea una cuenta</h1>
                                    <div className="optionsButtons">
                                        <LoginFromGoogle/>
                                        <Link to="/iniciarsesion/login/">
                                            <ButtonStyle
                                                text="Inicia sesión"
                                                srcImg={iconAccount}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <hr className="hrLogin"/>
                                {errorRegister && toast.error(`${errorRegister}`)}
                                {error && toast.error(`${error}`)}
                                <form onSubmit={handleRegister}>
                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <input className="inputDataUser" onChange={handleDataOfRegister} name="nombre" type="text" id="nombre" placeholder="Ingresa tu nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label>Correo</label>
                                        <input className="inputDataUser" onChange={handleDataOfRegister} name="email" type="email" id="email" placeholder="Ingresa tu email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Telefono</label>
                                        <input className="inputDataUser" onChange={handleDataOfRegister} name="telefono" type="number" id="telefono" placeholder="Ingresa tu número de telefono" />
                                    </div>
                                    <div className="form-group">
                                        <label>Nombre de usuario</label>
                                        <input className="inputDataUser" onChange={handleDataOfRegister} name="username"  type="text" id="username" placeholder="Ingresa un username" />
                                    </div>
                                    <div className="form-group">
                                        <label>Contraseña</label>
                                        <input className="inputDataUser" onChange={handleDataOfRegister} name="password"  type="password" id="password" placeholder="Ingresa una contraseña" />
                                    </div>
                                    <div className="buttonslogin">
                                    <button className="auth-button" type="submit">Registrar</button>
                                    </div>  
                                </form>                        
                            </div>
                        </div>
                    )
                }
            </GoogleOAuthProvider>
        </>
    )
}