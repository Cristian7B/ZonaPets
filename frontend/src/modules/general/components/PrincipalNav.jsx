import { Link } from "react-router-dom"
import iconZonaPets from "../assets/zonapetslogo.png"
import menuIcon from "../assets/menu-outline.svg"
import closeIcon from "../assets/close-outline.svg"
import logoFacebook from "../assets/logo-facebook.svg"
import logoInstragram from "../assets/logo-instagram.svg"
import logoTiktok from "../assets/logo-tiktok.svg"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

export function PrincipalNav () {
    const refIconNav = useRef(null)
    const contentOfNav = useRef(null)
    const [dataUser, setDataUser] = useState(null)
    const [token, setToken] = useState()
    const [profilePhoto, setProfilePhoto] = useState(null)

    const handleClick = () => {
        if (refIconNav.current) {
            refIconNav.current.classList.toggle("active")
        }
        if (contentOfNav.current) {
            contentOfNav.current.classList.toggle("active")
        }
    }

    useEffect(() => {
        fetchDataUser()
    }, [])

    useEffect(() => {
        if(dataUser) {
            setProfilePhoto(dataUser.foto)
        }
    }, [dataUser])

    const fetchDataUser = () => {
        setToken(localStorage.getItem('access_token'))

        axios.get("http://127.0.0.1:8000/api/user/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            setDataUser(response.data.user);
            console.log(response.data.user)
            console.log(dataUser)
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


                    console.log("Response", retryResponse.data.user)
                    
                    setDataUser(retryResponse.data.user);
                } catch (refreshError) {
                    console.error('Error refreshing access token:', refreshError);
                }
            } else {
                console.error('Error fetching user data:', error);
            }
        });
    };

    return (
        <div className="container1">
            <nav>
                <ul>
                    <li>
                        <div className="zonapets">
                        <img src={iconZonaPets} alt="logozonapets" className="imgnavbar"/>
                        <h2>ZonaPets</h2>
                        </div>
                        <div className="links-page">
                            <Link to="/mapa">Ver Mapa</Link>
                            <Link to="/registrar">Registrar</Link>
                            <a href="https://zonapets.vercel.app/contacto/">Contacto</a>
                        </div>
                        <div className="right">
                            <div className="premium-login">
                                <a href="https://zonapets.vercel.app/afiliate/"><button className="button-nav">Premium</button></a>
                            </div>
                            <div className="premium-login">
                                {
                                    profilePhoto ? (
                                        <Link className="linkToData" to="/iniciarsesion">
                                            <img className="profilePhotoNav" src={profilePhoto} alt="ImagenDePerfil" />
                                            
                                        </Link>
                                    ) : (
                                        <a href="https://zonapets.vercel.app/iniciarsesion/"><button className="button-nav2">Inicia sesion</button></a>
                                    )
                                }
                            </div>
                        </div>
                        <div ref={refIconNav} onClick={handleClick} className="menu-icon">
                            <img src={menuIcon} className="menu" alt="menu-outline" />
                            <img src={closeIcon} className="close" alt="close-outline" />
                        </div>
                    </li>
                </ul>
            </nav>
            <div ref={contentOfNav} className="mobile-links-page">
                <a href="https://zonapets.vercel.app/mapa/">Inicio</a>
                <a href="https://zonapets.vercel.app/acercade/">Acerca de ZonaPets</a>
                <a href="https://zonapets.vercel.app/registrar/">Registrar</a>
                <a href="https://zonapets.vercel.app/afiliate/"><button className="button-nav">Premium</button></a>
                <div className="social-media">
                    <a 
                        className="fa" 
                        href="https://www.facebook.com/zonappets?mibextid=ZbWKwL"
                        target="_blank" id="icon1"
                    >
                        <ion-icon name="logo-facebook" className="logo-red"></ion-icon>
                        <img src={logoFacebook} alt="" />
                    </a>
                    <a 
                        className="fa" 
                        href="https://www.instagram.com/zonapets0?igsh=MTUzdHBwanJ2NGJwdQ=="
                        target="_blank"
                    >
                        <ion-icon name="logo-instagram" className="logo-red"></ion-icon>
                        <img src={logoInstragram} alt="logo-instagram" />
                    </a>
                    <a 
                        className="fa" 
                        href="https://www.tiktok.com/@zonapets0?_t=8kor95lpkeb&_r=1"
                        target="_blank" id="icon2"
                    >
                        <ion-icon name="logo-tiktok" className="logo-red"></ion-icon>
                        <img src={logoTiktok} alt="logo-tiktok" />
                    </a>
                </div>
            </div>
            <hr/>
        </div>
    )
}