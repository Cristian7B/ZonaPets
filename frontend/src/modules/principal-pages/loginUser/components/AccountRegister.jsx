import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast, Toaster } from "sonner";
import { NavForLogin } from "./NavForLogin";

export function AccountRegister() {

    const [dataRegister, setDataRegister] = useState({
        email: "",
        username: "",
        password: ""
    })

    const handleDataOfRegister = e => {
        setDataRegister(() => ({
            ...dataRegister,
            [e.target.name]: e.target.value
        }))
    }

    console.log(dataRegister)

    const { loginUser, registerUser, errorRegister, error } = useAuth()

    const handleRegister = e => {
        e.preventDefault()
        registerUser(dataRegister)
        // if(!errorRegister) {
        //     loginUser(
        //         {
        //             email: dataRegister.email, 
        //             password: dataRegister.password
        //         }
        //     )
        // }
    }


    return (
        <>
        <NavForLogin/>
            <div className="containerOfLogin">
                <Toaster richColors/>
                <div className="containerform" id="move-content">
                    <h1>Crea una cuenta</h1>
                    
                    {errorRegister && toast.error(`${errorRegister}`)}
                    {error && toast.error(`${error}`)}
                    <div className="register">
                        <div className="line-register"></div>
                        <div className="label-register"><Link to="/iniciarsesion/login">O inicia sesion</Link></div>
                        <div className="line-register"></div>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <label>Correo</label>
                            <input onChange={handleDataOfRegister} name="email" type="email" id="email" placeholder="Ingresa tu email" />
                        </div>
                        <div className="form-group">
                            <label>Nombre de usuario</label>
                            <input onChange={handleDataOfRegister} name="username"  type="text" id="username" placeholder="Ingresa un username" />
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input onChange={handleDataOfRegister} name="password"  type="password" id="password" placeholder="Ingresa una contraseña" />
                        </div>
                        <div className="buttonslogin">
                        <button className="auth-button" type="submit">Registrar</button>
                        </div>  
                    </form>                        
                </div>
            </div>
        </>
        )
}