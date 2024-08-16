import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const [error, setError] = useState(null);
    const [errorRegister, setErrorRegister] = useState(null);
    const navigate = useNavigate();

    const loginUser = async (dataLogin) => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login/", dataLogin, { withCredentials: true });
            console.log(response);

            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);

            navigate("/mapa");  
        } catch (error) {
            setError("Credenciales incorrectas. Por favor, intenta nuevamente.");
            console.error("Error durante el inicio de sesión:", error);
        }
    };

    const registerUser = async (dataToRegister) => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/register/", dataToRegister, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
        }
        catch (errorRegister) {
            setErrorRegister("Credenciales incorrectas. Por favor, intenta nuevamente.");
        }
    }

    return {
        loginUser,
        error,
        registerUser,
        errorRegister
    };
};
