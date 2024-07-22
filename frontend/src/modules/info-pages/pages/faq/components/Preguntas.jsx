import { preguntasFaq } from "../consts";
import { CategoryQuestion } from "./CategoryQuestion";

export function Preguntas() {
    return (
        <div className="preguntas">
            <div className="texto-ayuda">
                <h1>¿Cómo podemos ayudarte?</h1>
                <ion-icon id="icon-desplegable" name="caret-down-outline"></ion-icon>
            </div>

            <div className="faq-preguntas">
                {
                    Object.keys(preguntasFaq).map((category) => (
                        <CategoryQuestion 
                            key={category}
                            category={category}
                            data={preguntasFaq[category]}
                        />
                    ))
                }
            </div>
        </div>
    )
}