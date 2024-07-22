import { CardContact } from "./CardContact";
import { infoCardContext } from "../consts";

export function Contacto() {
    return (
        <div className="container1">
            <h1 className="title">¡Contáctanos!</h1>
            <div className="card">
                {
                    infoCardContext.map(({icon, name, styles, url}) => (
                        <CardContact
                            icon={icon}
                            name={name}
                            styles={styles}
                            url={url}
                            key={name}
                        />
                    ))
                }
            </div>
        </div>
    )
}