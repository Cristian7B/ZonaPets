import { useContext } from "react";
import { GeolocationContext } from "../context/GeolocationsContext";

export function useGeolocation() {
    const {userLocation, setUserLocation} = useContext(GeolocationContext)

    return {userLocation, setUserLocation}

}