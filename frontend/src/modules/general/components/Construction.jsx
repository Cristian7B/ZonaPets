import constructionImg from "../assets/sapiens.svg"
import arrow from "../assets/diagonal-arrow-svgrepo-com.svg"
import urlIcon from "../assets/link-outline.svg"
import registerIcon from "../assets/add-circle-outline.svg"
import "../Construction.css"
import { Link } from "react-router-dom"
export function Construction() {
    return (
        <div className="containerFromAll">
            <div className="containerConstruction">
                <img src={constructionImg} alt="" />
                <div className="textConstruction">
                    <h1>Estamos <span>construyendo</span> este sitio para ti</h1>
                    <img src={arrow} alt="" />
                <div className="redirectConstruction">
                    <button>
                        <Link to="/mapa"><img src={urlIcon} alt="" />Ir al mapa</Link>
                    </button>
                    <button>
                        <Link to="/registrar"><img src={registerIcon} alt="" />Registrar</Link>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}