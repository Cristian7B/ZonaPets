import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { useGeolocation } from "./useGeolocation";

export function useFilters() {
    const {filters, setFilters, locations, setLocations, placesLocations, setPlacesLocations, placesListLocations, setPlacesListLocations} = useContext(FilterContext)
    const {userLocation} = useGeolocation()

    const locationsFiltered = () => {
        if(!filters.length) {
            return locations
        }

        return locations.filter(location => {
            return filters.includes(location.tipo_de_negocio)
        })
    }

    const locationsFilteredPlacesList = () => {
        if(!filters.length) {
            return filterLocationsList()
        }

        return locations.filter(location => {
            return filters.includes(location.tipo_de_negocio)
        })
    }
    

    const filterLocationsList = () => {
        
        return locations.filter(location => {
            const placeLatLng = new window.google.maps.LatLng(location.latitud, location.longitud);
            const distance = window.google.maps.geometry.spherical.computeDistanceBetween(userLocation, placeLatLng);
            return 2000 >= distance 
        })

    }

    return {locationsFiltered, filters, setFilters, locations, setLocations, placesLocations, setPlacesLocations, placesListLocations, setPlacesListLocations, filterLocationsList, locationsFilteredPlacesList}
}