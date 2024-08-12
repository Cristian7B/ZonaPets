import { preguntasFaq } from "../consts";
import { CategoryQuestion } from "./CategoryQuestion";
import iconDesplegable from "../static/assets/caret-down-outline.svg"
import { useEffect, useRef } from "react";
export function Preguntas() {

    const containerQuestionsRef = useRef(null)
    const iconDesplegableRef = useRef(null)
    const clickableTextRef = useRef(null)


    useEffect(() => {

        const handleShowQuestions = () => {
            if(containerQuestionsRef.current) {
                containerQuestionsRef.current.classList.toggle("mostrar")
                const toChangeTransform = iconDesplegableRef.current.style.transform === "" || iconDesplegableRef.current.style.transform === "rotate(0deg)" ? "rotate(180deg)":"rotate(0deg)"
                iconDesplegableRef.current.style.transform = toChangeTransform
            }
        }

        const textToRef = clickableTextRef.current
        if(textToRef) {
            textToRef.addEventListener("click", handleShowQuestions)
        }

        
        return () => {
            if (textToRef) {
                textToRef.removeEventListener("click", handleShowQuestions)
            }
        }
    }, [])

    return (
        <div className="preguntas">
            <div ref={clickableTextRef} className="texto-ayuda">
                <h1>¿Cómo podemos ayudarte?</h1>
                <img src={iconDesplegable} id="icon-desplegable" alt="" ref={iconDesplegableRef}/>
            </div>

            <div ref={containerQuestionsRef} className="faq-preguntas">
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