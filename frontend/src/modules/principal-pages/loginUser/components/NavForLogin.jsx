import zonapetsLogo from "../../../general/assets/zonapetslogo.png"

export function NavForLogin() {
    return (
        <nav className="navForAccount">
            <img src={zonapetsLogo} alt="" className="imgNavBar" />
            <a href="" className="descriptionLogo">ZonaPets</a>
        </nav>
    )
}