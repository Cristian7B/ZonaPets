import imgFaq from "../static/assets/FaQ.png"

export function Header() {
    return (
        <header className="inicioFaq">
            <div className="title">
                <h1>FaQ`s</h1>
                <p>Preguntas Frecuentes</p>
            </div>
            <img className="happyDog" src={imgFaq} alt="Perro negro sonriendo"/>
        </header>
    )
}