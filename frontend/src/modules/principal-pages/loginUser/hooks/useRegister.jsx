import { useState, useEffect } from 'react';
import { useAuth } from './useAuth'; 
import { toast } from 'sonner'; 

export const useRegister = () => {
    const [dataRegister, setDataRegister] = useState({
        email: "",
        username: "",
        nombre: "",
        telefono: "",
        password: "",
        foto: ""
    });
    const [dataLogin, setDataLogin] = useState()
    console.log(dataRegister)

    const { loginUser, registerUser, stateRegister } = useAuth();

    const handleDataOfRegister = e => {
        setDataRegister(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setDataLogin({
            email: dataRegister.email,
            password: dataRegister.password
        })
        try {
            await toast.promise(
                registerUser(dataRegister), 
                {
                    loading: 'Creando cuenta...',
                    success: 'Cuenta creada con éxito',
                    error: 'Error al crear la cuenta'
                }
            );
        } catch (error) {
            console.log(error);
        }
    };
    const handleLogin = async () => {
        if (stateRegister) {
            console.log(dataRegister.email)
            try {
                await toast.promise(loginUser({
                    email: dataLogin.email,
                    password: dataLogin.password
                }), 
                {
                    loading: "Iniciando sesión...",
                    success: "Has iniciado sesión."
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    return {
        dataRegister,
        handleDataOfRegister,
        handleRegister,
        handleLogin,
        setDataRegister
    };
};
