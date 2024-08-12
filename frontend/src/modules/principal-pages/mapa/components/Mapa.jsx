import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";

import { center } from "../consts";
import iconLocation from "../static/assets/markerzonapets.png";
import userMarkerIcon from "../static/assets/markerUser.png"; 
import axios from "axios";

import locateIcon from "../../../general/assets/locate-outline.svg"

import "../Mapa.css";
import { Filter } from "./Filter";
import { UpMapSearch } from "./UpMapSearch";
import { PlacesList } from "./PlacesList";
import { useFilters } from "../hooks/useFilters";
import { useGeolocation } from "../hooks/useGeolocation";
import { useInfo } from "../hooks/useInfo";
import { InfoPlace } from "./InfoPlace";

const libraries = ['geometry'];

export function Mapa() {
    const [sendData, setSendData] = useState(false);

    const mapRef = useRef(null);
    const markersRef = useRef([]);

    const {setUserLocation} = useGeolocation()
    const { setLocations, placesLocations, setPlacesLocations, placesListLocations, setPlacesListLocations, filterLocationsList, filters } = useFilters();
    const {placeSelected, setPlaceSelected, refOverlay} = useInfo()

    useEffect(() => {
        if (mapRef.current) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const userLatLng2 = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                        const markerUser = new window.google.maps.Marker({
                            position: userLatLng2,
                            map: mapRef.current,
                            icon: {
                                url: userMarkerIcon,
                                scaledSize: new window.google.maps.Size(60, 60),
                            }
                        });

                        mapRef.current.setCenter(userLatLng2);
                        mapRef.current.setZoom(14);

                        setUserLocation(userLatLng2)
                    },
                );
            } 
            
            else {
                console.error("La geolocalización no es compatible en este navegador.");
            }

            axios.get("http://127.0.0.1:8000/apilocation/ubicaciones/?format=json")
                .then(response => {
                    setLocations(response.data);
                    setPlacesLocations(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the locations!', error);
                });
        }

    }, [mapRef.current]); 

    useEffect(() => {
        if (mapRef.current && placesLocations.length) {
            if( !filters.length) {
                setPlacesListLocations(filterLocationsList())
            }

            setSendData(true);

            markersRef.current.forEach(marker => marker.setMap(null));
            markersRef.current = [];

            const newMarkers = placesLocations.map(location => {
                const marker = new window.google.maps.Marker({
                    map: mapRef.current,
                    position: { lat: parseFloat(location.latitud), lng: parseFloat(location.longitud) },
                    title: location.nombre_compañia,
                    icon: {
                        url: iconLocation,
                        scaledSize: new window.google.maps.Size(45, 45)
                    },
                });

                marker.addListener("click", () => {
                    setPlaceSelected({
                        nombre_compañia: location.nombre_compañia,
                        latitud: location.latitud,
                        longitud: location.longitud,
                        tipo_de_negocio: location.tipo_de_negocio,
                        telefono_usuario: location.telefono_usuario
                    });
                });

                
                return marker;
            });
            markersRef.current = newMarkers;
        }
    }, [placesLocations]);

    useEffect(() => {
        const markerReferenced = markersRef.current.find(marker => marker.title === placeSelected.nombre_compañia)
        if(markerReferenced) {
            markerReferenced.map.panTo(markerReferenced.getPosition());
            markerReferenced.setAnimation(window.google.maps.Animation.DROP);
    
            setTimeout(() => {
                markerReferenced.setAnimation(null);
            }, 3500);
        }
    }, [placeSelected])


    return (
        <>
            <LoadScript 
                googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}
                libraries={libraries}    
            >
                <div ref={refOverlay} id="overlay"></div>
                <div className="container-all" id="move-content">
                    <div style={{ display: "none" }}>
                        <input 
                            id="pac-input" 
                            className="controls" 
                            type="text" 
                            placeholder="¿A dónde deseas ir?, Centro Co... Cualquier... Rest..."
                        />
                    </div>
                    <div className="flex-desing">
                        {
                            sendData && <PlacesList/>
                        }
                        <div id="showPlacesListButton">
                            <ion-icon 
                                className="iconName" 
                                id="iconName" 
                                name="locate-outline"
                            ></ion-icon>
                            <img src={locateIcon} className="iconForLocate" alt="ícono location" />
                        </div>
                        
                        <UpMapSearch />
                        <GoogleMap
                            center={center}
                            zoom={11}
                            id="map"
                            onLoad={map => mapRef.current = map}
                        />
                        <div className="right-map">
                            <Filter />
                            <div className="info-place">
                                {
                                    placeSelected && (
                                        <InfoPlace
                                            nombre={placeSelected.nombre_compañia}
                                            latitud={placeSelected.latitud}
                                            longitud={placeSelected.longitud}
                                            tipoNegocio={placeSelected.tipo_de_negocio}
                                            telefono={`${placeSelected.telefono_usuario}`}
                                        />
                                    )
                                }
                            </div>
                        </div>
                        <div id="infowindow-content">      
                            <span 
                                id="place-name" 
                                className="title">
                            </span>
                            <br/>
                                <strong></strong>
                                <span id="place-id"></span>
                            <br/>
                            <span id="place-address"></span>
                        </div>
                    </div>
                </div>
            </LoadScript>
        </>
    );
}
