import { createContext, useState } from "react";

export const GeolocationContext = createContext()

export function GeolocationProvider({children}) {
    const [userLocation, setUserLocation] = useState({
        lat: "",
        lng: ""
    })

    return (
        <GeolocationContext.Provider value={{userLocation, setUserLocation}}>
            {children}
        </GeolocationContext.Provider>
    )
}