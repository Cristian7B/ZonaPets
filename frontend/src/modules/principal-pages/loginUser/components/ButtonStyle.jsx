import { useGoogleLogin } from "@react-oauth/google"
import "../ButtonGoogle.css"
export function ButtonStyle({onClick, srcImg, text}) {
    return (
        <div className="googleButton" onClick={onClick}>
            <div className="containerContentButton">
                <div className="SvgLogoGoogle">
                    <img src={srcImg} alt="" />
                </div>
                <div className="layoutGoogle">
                    {text}
                </div>
            </div>
        </div>
    )
}