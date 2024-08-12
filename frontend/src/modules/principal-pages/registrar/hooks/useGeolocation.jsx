import { useEffect, useState } from "react";
import userMarkerIcon from "../../mapa/static/assets/markerUser.png"

export function useGeolocation(mapRef) {
    const [userLocation, setUserLocation] = useState(null)
    const [objectLocation, setObjectLocation] = useState({
        lat: "",
        lng: "",
    })
    useEffect(() => {
        // if (mapRef.current) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setObjectLocation({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        })
                        const userLatLng2 = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        setUserLocation(userLatLng2)
                    },
                );
            } 
            
            else {
                console.error("La geolocalización no es compatible en este navegador.");
            }

    }, []); 

    return {setUserLocation, setObjectLocation, userLocation, objectLocation}
}