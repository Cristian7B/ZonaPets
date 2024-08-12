import { createContext, useState } from "react";

export const FilterContext = createContext()

export function FilterProvider({children}) {
    const [filters, setFilters] = useState([])
    const [locations, setLocations] = useState([]);
    const [placesLocations, setPlacesLocations] = useState([]);
    const [placesListLocations, setPlacesListLocations] = useState([])

    return (
        <FilterContext.Provider value={{filters,setFilters, placesLocations, setPlacesLocations, locations, setLocations, placesListLocations, setPlacesListLocations}}>
            {children}
        </FilterContext.Provider>
    )
}

