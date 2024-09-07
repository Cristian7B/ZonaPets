import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { decodeJwt } from "../utils/decodeJwt";
import "../Account.css"
import { ButtonStyle } from "./ButtonStyle";
import { useContext, useEffect, useState } from "react";
import { useRegister } from "../hooks/useRegister";
import checkIcon from "../static/assets/checkmark-outline.svg"
import { DataUserContext } from "../context/DataUserContext";
import axios from "axios";
export function LoginFromGoogle() {
    const [display, setDisplay] = useState("none")
    const [imgSrc, setImgSrc] = useState(null)
    const [name, setName] = useState("")
    const { stateRegister, setDataUser } = useContext(DataUserContext)
    const {setDataRegister, handleDataOfRegister, handleRegister, handleLogin} = useRegister()
    const handleError = () => {
        console.log("Failed")
    }

    useEffect(() => {
        if (stateRegister) {
            handleLogin();
        }
    }, [stateRegister]);

    const handleSuccessCredential = async (credentialsResponse) => {
        console.log(credentialsResponse);
        if(credentialsResponse.credential) {
            const { payload } = decodeJwt(credentialsResponse.credential)
            try {
                const response = await axios.post("http://127.0.0.1:8000/api/google_credential/", {token: credentialsResponse.credential}, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setDataUser(response.data.user)
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                return
            }
            catch (errorRegister) {
                console.log(errorRegister);
            }
            try {    
                setDataRegister(prevState => ({
                    ...prevState,
                    nombre: payload.name,
                    email: payload.email,
                    username: payload.name,
                    foto: payload.picture
                }));
                setDisplay("grid");
                setImgSrc(payload.picture); 
                setName(payload.name);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        }
    }

    useGoogleOneTapLogin({
        onSuccess: credentialResponse => {
            handleSuccessCredential(credentialResponse)
        },
        onError: () => {
            console.log('Login Failed');
        },
    });

    const handleSuccess = async (tokenResponse) => {
        console.log(tokenResponse)
        const accessToken = tokenResponse.access_token;
        console.log('Access Token:', accessToken);
        const userInfo = await getUserInfo(accessToken);
        console.log(userInfo)
    };

    const getUserInfo = async (accessToken) => {
        try {
            const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch user info');
            }

            try {
                const response = await axios.post("http://127.0.0.1:8000/api/google_token/", {token: accessToken}, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log(response)
                setDataUser(response.data.user)
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                return
            }
            catch (errorRegister) {
                console.log(errorRegister);
            }
    
            const userInfo = await response.json();

            setDataRegister(prevState => ({
                ...prevState,
                nombre: userInfo.name,
                email: userInfo.email,
                username: userInfo.name,
                foto: userInfo.picture
            }))
            setDisplay("grid")
            setImgSrc(userInfo.picture)
            setName(userInfo.name)
            return userInfo;
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    const login = useGoogleLogin({
        onSuccess: handleSuccess,
        onError: handleError,
        flow: "implicit"
    });
    console.log(imgSrc)
    return (
        <>
            <ButtonStyle 
                onClick={login}
                text="Iniciar sesión con Google"    
                srcImg="https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg"
            />
            <div style={{display: display}} className="inputPassword">
                <div className="contentModalPassword">
                    <div className="allContentModal">
                        <img className="userPhoto" src={imgSrc} alt="" />
                        <div>
                            <h2>{name}</h2>
                            <h3>Ingresa la contraseña para tu cuenta.</h3>
                            <div className="inputForModal">
                                <input onChange={handleDataOfRegister} name="password"  type="password" id="password"/>
                                <article onClick={handleRegister}>
                                    <img className="checkIconModal" src={checkIcon} alt="" />
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}