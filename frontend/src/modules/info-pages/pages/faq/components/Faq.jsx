import { ButtonContacto } from "./ButtonContacto";
import { Header } from "./Header";
import { Preguntas } from "./Preguntas";
import { Footer } from "../../../../general/components/Footer"
import "../Faq.css"

export function Faq() {
    return (
        <div className="container-all">
            <Header/>
            <Preguntas/>
            <ButtonContacto/>
            <Footer/>
        </div>
    )
}