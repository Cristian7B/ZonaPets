import { useContext } from "react"
import { InfoContext } from "../context/InfoContext"

export function useInfo() {
    const {placeSelected, setPlaceSelected, refOverlay} = useContext(InfoContext)
    
    return {placeSelected, setPlaceSelected, refOverlay}
}