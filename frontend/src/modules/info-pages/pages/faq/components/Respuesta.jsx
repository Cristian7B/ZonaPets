import { Link, useParams } from "react-router-dom"
import { preguntasFaq } from "../consts"
import questionIcon from "../static/assets/help-outline.svg"
import iconBack from "../static/assets/arrow-back-outline.svg"
export function Respuesta() {
    const {category, question} = useParams()
    const questionsOfCategory = preguntasFaq[category]

    const questionObject = questionsOfCategory.find(questionIt => questionIt.titulo === decodeURIComponent(question))

    return (
        <div style={{height: "80vh", justifyContent: "center"}} className="container-all">
            {
                questionObject ? (
                    <div className="container-respuesta">
                        <div className="questionIcon">
                            <img src={questionIcon} alt="" />
                        </div>
                        <div className="contentOfQuestion">
                            <header>
                                <h1>{questionObject.titulo}</h1>
                            </header>
                            <div className="contentAnswer">
                                <p>{questionObject.respuesta}</p>
                            </div>
                        </div>
                        <div className="goBack">
                            <Link to="/faq">
                                <img src={iconBack} alt="" />
                            </Link>
                        </div>
                    </div>
                ):(
                    <h1 className="errorAnswer">
                        Pregunta no encontrada
                    </h1>
                )
            }
        </div>
    )
}