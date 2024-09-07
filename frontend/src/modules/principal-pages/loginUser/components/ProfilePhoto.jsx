import "../Account.css"

export function ProfilePhoto({srcImg}) {
    return(
        <div className="imgProfileFoto">
            <img src={srcImg} alt="" />
        </div>
    )
}