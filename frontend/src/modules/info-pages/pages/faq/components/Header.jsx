import imgFaq from "../assets/FaQ.png"

export function Header() {
    return (
        <header>
            <div className="title">
                <h1>FaQ`s</h1>
                <p>Preguntas Frecuentes</p>
            </div>
            <img src={imgFaq} alt="Perro negro sonriendo"/>
        </header>
    )
}