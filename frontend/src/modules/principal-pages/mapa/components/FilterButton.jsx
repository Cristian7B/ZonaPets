import filterLogo from "../static/assets/filterLogo.svg"

export function FilterButton() {
    return (
        <div className="filter-button" id="filterButton">
            <img className="filter-logo" src={filterLogo} alt=""/>
        </div>
    )
}