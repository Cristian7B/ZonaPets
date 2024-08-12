import flagIcon from "../static/assets/flag-outline.svg"
import plusIcon from "../static/assets/add-outline.svg"
import privacityIcon from "../../../../general/assets/lock-open-outline.svg"
import premiumCardIcon from "../static/assets/card-outline.svg"
import { Link } from "react-router-dom"

import iconLink from "../static/assets/link-outline.svg"

export function CategoryQuestion({category, data}) {
    const iconObject = {
        mapa: [flagIcon, "Mapa"],
        registro: [plusIcon, "Registro"],
        privacidad: [privacityIcon, "Privacidad"],
        premium: [premiumCardIcon, "Premium"]
    }

    
    return (
        <>
            <div className="category">
                <img className="iconForQuestionCategory" src={iconObject[category][0]} alt={`Icon for ${category}`} />
                <p>{iconObject[category][1]}</p>
            </div>
            <div className="preguntas-list">
                <ul>
                    {
                        data.map(({titulo}) => (
                            <li key={titulo}>
                                <Link 
                                    className="anchordForAnswer" 
                                    to={`/faq/${category}/${encodeURIComponent(titulo)}`}
                                >
                                    <p>{titulo}</p>
                                    <img className="iconLinkAnswer" src={iconLink} alt="" />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}