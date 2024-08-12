import { useState } from "react"
import { useInfo } from "../hooks/useInfo";
import closeIcon from "../static/assets/closeIcon.svg"
import callIcon from "../static/assets/call-outline.svg"
import tagIcon from "../static/assets/pricetag-outline.svg"
import infoIcon from "../static/assets/help-outline.svg"
import flagIcon from "../../../info-pages/pages/faq/static/assets/flag-outline.svg"
import addIcon from "../../../general/assets/add-outline.svg"

export function InfoPlace({nombre, latitud, longitud, tipoNegocio, telefono}) {
    const [displayDialog, setDisplayDialog] = useState({ display: "none" });
    const { refOverlay } = useInfo()

    const handleDisplay = () => {
        if (displayDialog.display === "none") {
            refOverlay.current.style.display = "block"
            setDisplayDialog({
                display: "block"
            })
        }
        else {
            refOverlay.current.style.display = "none"
            setDisplayDialog({
                display: "none"
            })
        }
    }


    return (
        <div className="info-window">
            <div style={displayDialog} id="dialog" className="dialog">
                <img src={closeIcon} onClick={handleDisplay} className="closeIcon"/>
                <div className="titledialog">{nombre}</div>
                <div className="information">
                    <div className="info1Dialog">
                        <div className="tipo">
                            <p>{tipoNegocio}</p>
                        </div>
                        <div className="telefono">
                            <img src={callIcon} className="iconInfoPlace" alt="Icon call for phone" />
                            <p>{telefono}</p>
                        </div>
                    </div>
                    <div className="info2More">
                        <div className="g-maps">
                            <img src={flagIcon} className="iconInfoPlace" alt="" />
                            <p><a className="info-window-link" href={`https://www.google.com/maps?q=${latitud},${longitud}`} target="_blank">Ver en <span>Google Maps</span></a></p>
                        </div>
                        <div className="plus">
                            <img src={addIcon} alt="" className="iconInfoPlace" />
                        </div>
                    </div>    
                </div>
            </div>
            <h1 className="info-window-content">{nombre}</h1>
            <div className="moreInfo">
                <div className="tipo-negocio">
                    <img src={tagIcon} alt="" className="iconInfoPlace" />
                    <p className="tipo-negocio-p">{tipoNegocio}</p>
                </div>
                <button onClick={handleDisplay} className="show-button" id="show">
                    <img id="moreInfoIcon" src={infoIcon} alt="" className="iconInfoPlace" />
                    Saber más
                </button>
            </div>
        </div> 
    )
}