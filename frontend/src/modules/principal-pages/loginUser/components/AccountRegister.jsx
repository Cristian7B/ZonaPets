import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast, Toaster } from "sonner";
import { NavForLogin } from "./NavForLogin";
import { AlreadyLogged } from "./AlreadyLogged";

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

    const { loginUser, registerUser, errorRegister, error, dataUser, stateRegister } = useAuth()

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await toast.promise(
                registerUser(dataRegister), 
                {
                    loading: 'Creando cuenta...',
                    success: 'Cuenta creada con éxito',
                    error: 'Error al crear la cuenta'
                }
            );
        } catch(e) {
            console.log(e)
        }
    };
    
    useEffect(() => {
        const handleLogin = async () => {
            if (stateRegister) {
                try {
                    await toast.promise(loginUser({
                        email: dataRegister.email,
                        password: dataRegister.password
                    }),
                    {
                        loading: "Iniciando sesion...",
                        success: "Haz iniciado sesión."
                    }
                )
                } catch (error) {
                    console.log(error)
                }
            }
        };
    
        handleLogin();
    }, [stateRegister]);



    return (
        <>
            <NavForLogin/>
            {
                dataUser ? (
                    <AlreadyLogged/>
                ) : (
                    <div className="containerOfLogin">
                        <Toaster expand={true} richColors/>
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
                )
            }
        </>
    )
}