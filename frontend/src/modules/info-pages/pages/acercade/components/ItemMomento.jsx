import infoDog1 from "../static/assets/info-dog.png"
import infoDog2 from "../static/assets/info-dog2.png"

export function ItemMomento() {
    return (
        <div className="info1">
            <img id="imgInfo1" className="images" src={infoDog1} alt="Imagen de perro viajando"/>
            <img id="imgInfo2" className="images" src={infoDog2} alt="Imagen de perro feliz"/>

            <div className="text-info1">
                <h1 id="textoH1">
                    Creando momentos inolvidables con tu mascota.
                </h1>
                <p id="textoP">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}