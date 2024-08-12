import { FilterButton } from "./FilterButton"
export function UpMapSearch() {
    return (
        <div className="up-map">
            <div id="searchBar" className="search-bar">
                <ion-icon id="icon-search" name="search-outline"></ion-icon>
                <div className="text">
                    <h3>
                        ¿A dónde deseas ir?
                    </h3>
                    <p>
                        Centro Co... Cualquier... Rest...
                    </p>
                </div>
            </div>
            <FilterButton/>
        </div>
    )
}