import iconZonaPets from "../assets/zonapetslogo.png"
import logoFacebook from "../assets/logo-facebook.svg"
import logoInstragram from "../assets/logo-instagram.svg"
import logoTiktok from "../assets/logo-tiktok.svg"
import mailIcon from "../assets/mail-open-outline.svg"

export function Footer() {
    return (
        <footer>
            <div className="zonapets-footer">
                <div className="top">
                    <div className="img-divfooter1">
                        <img className="img-footer" src={iconZonaPets} alt=""/>
                        <h1 className="logo-title">ZonaPets</h1>
                    </div>
                    <div className="logo-footer">
                        <div className="img-divfooter">
                            <img className="img-footer" src={iconZonaPets} alt=""/>
                            <h1 className="logo-title">ZonaPets</h1>
                        </div>
                        <div className="social-mediaFooter">
                            <a 
                                className="plus-icon3" 
                                href="https://www.instagram.com/zonapets0?igsh=MTUzdHBwanJ2NGJwdQ=="
                                target="_blank"
                            >
                                <ion-icon className="plus-icon3" name="logo-instagram"></ion-icon>
                                <img className="plus-icon3" src={logoInstragram} alt="" />
                            </a>
                            <a 
                                className="plus-icon3" 
                                href="https://www.facebook.com/zonappets?mibextid=ZbWKwL"
                                target="_blank"
                            >
                                <ion-icon className="plus-icon3" name="logo-facebook"></ion-icon>
                                <img className="plus-icon3" src={logoFacebook} alt="" />
                            </a>
                            <a 
                                className="plus-icon3" 
                                href="https://www.tiktok.com/@zonapets0?_t=8kor95lpkeb&_r=1"
                                target="_blank"
                            >
                                <ion-icon className="plus-icon3" name="logo-tiktok"></ion-icon>
                                <img className="plus-icon3" src={logoTiktok} alt="" />
                            </a>
                            <a 
                                className="plus-icon3" 
                                href="mailto:zonapetscompany@gmail.com" 
                                target="_blank"
                            >
                                <ion-icon className="plus-icon3" name="mail-open-outline"></ion-icon>
                                <img className="plus-icon3" src={mailIcon} alt="" />
                            </a>
                        </div>

                    </div>
                    <div className="description-footer">
                        <div className="footer-container">
                            <div className="footer-divs">
                                <h1 className="title-desc">
                                    Nosotros
                                </h1>
                                <div className="width-url">
                                    <a className="url-footer" href="https://zonapets.vercel.app/acercade/" target="_blank">Sobre ZonaPets</a>
                                    <a className="url-footer" href="https://zonapets.vercel.app/terminos-y-condiciones/" target="_blank">Términos y condiciones</a>                            </div>
                            </div>
                            <div className="footer-divs">
                                <h1 className="title-desc">
                                    Servicio
                                </h1>
                                <div className="width-url">
                                    <a className="url-footer" href="https://zonapets.vercel.app/preguntas-frecuentes/" target="_blank">Preguntas frecuentes</a>
                                    <a className="url-footer" href="https://zonapets.vercel.app/contacto/" target="_blank">Contacto</a>
                                </div>
                            </div>
                            <div className="footer-divs">
                                <h1 className="title-desc">
                                    Comunidad
                                </h1>
                                <div className="width-url">
                                    <a className="url-footer" href="https://www.instagram.com/zonapets0" target="_blank">Instagram</a>
                                    <a className="url-footer" href="https://www.facebook.com/zonappets" target="_blank">Facebook</a>
                                    <a className="url-footer" href="https://zonapets.vercel.app/contacto/" target="_blank">Reportar un bug</a>
                                    <a className="url-footer" href="https://zonapets.vercel.app/registrar/" target="_blank">Pon tu lugar en ZonaPets</a>
                                </div>
                            </div>
                            <div className="footer-divs">
                                <h1 className="title-desc">
                                    Links de interés
                                </h1>
                                <div className="width-url">
                                    <a className="url-footer" href="https://zonapets.vercel.app/mapa/" target="_blank">Mapa de lugares</a>
                                    <a className="url-footer" href="https://zonapets.vercel.app/registrar/" target="_blank">Registrar un lugar</a>
                                    <a className="url-footer" href="https://zonapets.vercel.app/afiliate/" target="_blank">Trabaja con nosotros</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="bottom">
                    <p className="copyrigth">Copyright © 2023, ZonaPets.</p>
                    <p className="copyrigth2">Contactános 
                        <span>
                            <a href="mailto:zonapetscompany@gmail.com">
                                 zonapetscompany@gmail.com
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    )
}