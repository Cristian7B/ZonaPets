import { CardContact } from "./CardContact";
import { infoCardContext } from "../consts";
import { Footer } from "../../../../general/components/Footer";
import "../Contacto.css"
export function Contacto() {
    return (
        <>
            <div className="container1">
                <h1 className="titleContacto">¡Contáctanos!</h1>
                <div className="cards">
                    {
                        infoCardContext.map(({icon, index, name, url, id}) => (
                            <CardContact
                                icon={icon}
                                name={name}
                                url={url}
                                id={id}
                                key={name}
                                index={index}
                            />
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}