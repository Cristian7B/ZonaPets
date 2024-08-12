import { useEffect } from "react"
import { useFilters } from "../hooks/useFilters"

export function Filter() {
    const {setPlacesLocations, filters, setFilters, locationsFiltered, setPlacesListLocations,  locationsFilteredPlacesList} = useFilters()

    const addFilters = event => {
        if (filters.includes(event.target.value)) {
            setFilters(
                prevState => prevState.filter(filter => { 
                    return filter !== event.target.value
                })
            )
        } else {
            setFilters(prevState => [
                ...prevState,
                event.target.value
            ])
        }
    }

    useEffect(() => {
        setPlacesLocations(locationsFiltered())
        setPlacesListLocations(locationsFilteredPlacesList())
    }, [filters])

    return (
        <div id="filterContainer" className="filter-container">
            <div id="closeFilter" className="close-filter">
                <ion-icon name="close-outline"></ion-icon>
            </div>
            <div className="filter-div">
                <h2 className="title-filter">Filtra por tipo</h2>
                <label>
                    <input onClick={addFilters} type="checkbox" className="tipo-checkbox" id="hotelFilter" value="Hoteles"/> Hoteles
                </label>
                <label>
                    <input onClick={addFilters} type="checkbox" className="tipo-checkbox" id="restaurantFilter" value="Restaurante"/> Restaurantes
                </label>
                <label>
                    <input onClick={addFilters} type="checkbox" className="tipo-checkbox" id="parkFilter" value="Parque Para Mascotas"/> Parques Para Mascotas
                </label>
                <label>
                    <input onClick={addFilters} type="checkbox" className="tipo-checkbox" id="mallFilter" value="Centro Comercial"/> Centro Comercial
                </label>
                <label>
                    <input onClick={addFilters} type="checkbox" className="tipo-checkbox" id="shopFilter" value="Tiendas de mascotas"/> Tiendas De Mascotas
                </label>
                <label>
                    <input onClick={addFilters} type="checkbox" className="tipo-checkbox" id="placeFilter" value="Sitios Turísticos"/> Sitios Turísticos
                </label>
                <label>
                    <input onClick={addFilters} type="checkbox" className="tipo-checkbox" id="serviceFilter" value="Servicios de paseo de perros"/> Servicios De Paseo
                </label>
                <label>
                    <input onClick={addFilters} type="checkbox" className="tipo-checkbox" id="otherFilter" value="Otro"/> Otros
                </label>
            </div>       
        </div>   
    )
}