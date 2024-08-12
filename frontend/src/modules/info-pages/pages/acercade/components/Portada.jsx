import acercaDeImg from "../static/assets/acercade.png"

export function Portada() {
    return (
        <>
            <header className="portadaAcercaDe">
                <div className="text-wall">
                    <div className="txt1">
                        <h1 id="title1">Sobre</h1>
                    </div>
                    <div className="txt2">
                        <h1 id="title2">ZonaPets</h1>
                    </div>
                </div>
                <img id="imgAcercaDe" src={acercaDeImg} alt="Portada de acerca de ZonaPets"/>
            </header>
            <div className="div-wall"></div>
        </>
    )
}