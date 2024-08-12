import { useEffect, useState } from "react"
import { useFilters } from "../hooks/useFilters"
import { useInfo } from "../hooks/useInfo"

export function PlacesList() {

    const {placesListLocations} = useFilters()
    const [render, setRender] = useState(false)
    const {setPlaceSelected} = useInfo()

    useEffect(() => {
        setRender(true)
    }, [placesListLocations])

    const handlePlace = (place) => {
        setPlaceSelected(place)
    }

    return (
        <div id="placesList" className="places-list">
            <h2>Lugares cerca de ti</h2>
            {
                render && (
                    placesListLocations.map(place => (
                        <div onClick={() => handlePlace(place)} key={place.id} className="place-item">
                            {place.nombre_compañia}
                        </div>
                    ))
                )
            }
        </div>
    )
}