import { Link } from "react-router-dom"
import iconZonaPets from "../assets/zonapetslogo.png"
import menuIcon from "../assets/menu-outline.svg"
import closeIcon from "../assets/close-outline.svg"
import logoFacebook from "../assets/logo-facebook.svg"
import logoInstragram from "../assets/logo-instagram.svg"
import logoTiktok from "../assets/logo-tiktok.svg"
import { useEffect, useRef } from "react"

export function PrincipalNav () {
    const refIconNav = useRef(null)
    const contentOfNav = useRef(null)

    const handleClick = () => {
        if (refIconNav.current) {
            refIconNav.current.classList.toggle("active")
        }
        if (contentOfNav.current) {
            contentOfNav.current.classList.toggle("active")
        }
    }

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
                            
                            <Link to="/iniciarsesion">Ver Mapa</Link>
                            <Link to="/registrar">Registrar</Link>
                            <a href="https://zonapets.vercel.app/contacto/">Contacto</a>
                        </div>
                        <div className="right">
                            <div className="premium-login">
                                <a href="https://zonapets.vercel.app/afiliate/"><button className="button-nav">Premium</button></a>
                            </div>
                            <div className="premium-login">
                            <a href="https://zonapets.vercel.app/iniciarsesion/"><button className="button-nav2">Inicia sesion</button></a>
                        </div>
                        </div>
                        <div ref={refIconNav} onClick={handleClick} className="menu-icon">
                            <img src={menuIcon} className="menu" alt="menu-outline" />
                            <img src={closeIcon} className="close" alt="close-outline" />
                            <ion-icon name="menu-outline" className="menu"></ion-icon>
                            <ion-icon name="close-outline" className="close"></ion-icon>
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