import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataUserContext } from "../context/DataUserContext";

export const useAuth = () => {
    const [error, setError] = useState(null);
    const [errorRegister, setErrorRegister] = useState(null);

    const {dataUser, setDataUser, token, setToken} = useContext(DataUserContext)

    const fetchDataUser = () => {
        const token = localStorage.getItem('access_token');

        axios.get("http://127.0.0.1:8000/api/user/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            setDataUser(response.data.user);
        })
        .catch(async (error) => {
            if (error.response && error.response.status === 401) {
                try {
                    const refreshToken = localStorage.getItem('refresh_token');
                    const refreshResponse = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {
                        refresh: refreshToken
                    });
                    
                    localStorage.setItem('access_token', refreshResponse.data.access);
                    setToken(refreshResponse.data.access);
    
                    const retryResponse = await axios.get("http://127.0.0.1:8000/api/user/", {
                        headers: {
                            Authorization: `Bearer ${refreshResponse.data.access}`,
                        },
                    });
                    
                    setDataUser(retryResponse.data.user);
                } catch (refreshError) {
                    console.error('Error refreshing access token:', refreshError);
                }
            } else {
                console.error('Error fetching user data:', error);
            }
        });
    };
    
    useEffect(() => {        
        fetchDataUser()
    }, [token])

    const loginUser = async (dataLogin) => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login/", dataLogin, { withCredentials: true });

            setToken(response.data.access)

            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);

        } catch (error) {
            setError("Credenciales incorrectas. Por favor, intenta nuevamente.");
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
        errorRegister,
        dataUser,
        setToken,
        setDataUser
    };
};
