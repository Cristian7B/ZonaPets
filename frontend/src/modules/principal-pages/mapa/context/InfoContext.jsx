import { createContext, useRef, useState } from "react";

export const InfoContext = createContext()

export function InfoProvider({children}) {
    const [placeSelected, setPlaceSelected] = useState(null)
    const refOverlay = useRef()
    return (
        <InfoContext.Provider value={{placeSelected, setPlaceSelected, refOverlay}}>
            {children}
        </InfoContext.Provider>
    )
}