import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { center, containerStyle } from "../consts"

import iconLocation from "../static/assets/markerzonapets.png"

export function PruebaMapa() {
    const [locations, setLocations] = useState([])
    const mapRef = useRef(null)
    const [renderLocations, setRenderLocations] = useState(false)

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/apilocation/ubicaciones/?format=json")

            .then(response => {
                setLocations(response.data);
            })

            .catch(error => {
                console.error('There was an error fetching the locations!', error);
            });
        
    }, [])


    useEffect(() => {
        if (locations.length) {   
            setRenderLocations(true)
        }
    }, [locations]);

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
            <Map
                mapContainerStyle={containerStyle}
                center={center}
                defaultZoom={11}
                style={{height: "100vh"}}
                mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
            >
                {renderLocations && locations.map(location => {
                    const lat = parseFloat(location.latitud);
                    const lng = parseFloat(location.longitud);

                    if (isNaN(lat) || isNaN(lng)) {
                        console.error('Invalid location data:', location);
                        return null;
                    }

                    const position = { lat, lng };

                    return (
                        <AdvancedMarker
                            key={location.id}
                            position={position}
                        />
                    );
                })}

            <AdvancedMarker
                position={center}
            />
            </Map>
        </APIProvider>
    )
}