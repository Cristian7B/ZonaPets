export function PrincipalNav () {
    return (
        <div className="container1">
            <nav>
                <ul>
                    <li>
                        <div className="zonapets">
                        <img src="{% static 'imagenes/landinglogo.png' %}" alt="logozonapets" className="imgnavbar"/>
                        <h2>ZonaPets</h2>
                        </div>
                        <div className="links-page">
                            <a href="https://zonapets.vercel.app/mapa/">Ver Mapa</a>
                            <a href="https://zonapets.vercel.app/registrar/">Registrar</a>
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
                        <div className="menu-icon">
                            <ion-icon name="menu-outline" className="menu"></ion-icon>
                            <ion-icon name="close-outline" className="close"></ion-icon>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className="mobile-links-page">
                <a href="https://zonapets.vercel.app/mapa/">Inicio</a>
                <a href="https://zonapets.vercel.app/acercade/">Acerca de ZonaPets</a>
                <a href="https://zonapets.vercel.app/registrar/">Registrar</a>
                <a href="https://zonapets.vercel.app/afiliate/"><button className="button-nav">Premium</button></a>
                <div className="social-media">
                    <a className="fa" href="https://www.facebook.com/zonappets?mibextid=ZbWKwL"
                    target="_blank" id="icon1"><ion-icon name="logo-facebook" className="logo-red"></ion-icon></a>
                    <a className="fa" href="https://www.instagram.com/zonapets0?igsh=MTUzdHBwanJ2NGJwdQ=="
                    target="_blank"><ion-icon name="logo-instagram" className="logo-red"></ion-icon></a>
                    <a className="fa" href="https://www.tiktok.com/@zonapets0?_t=8kor95lpkeb&_r=1"
                    target="_blank" id="icon2"><ion-icon name="logo-tiktok" className="logo-red"></ion-icon></a>
                </div>
            </div>
        </div>
    )
}