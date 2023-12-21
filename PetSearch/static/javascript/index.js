async function initMap() {
    const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary("marker"),
        google.maps.importLibrary("places"),
    ]);
    const { GeometryLibrary  } = await google.maps.importLibrary("geometry"); 
    const bogota = { lat: 4.710989, lng: -74.072090 }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: bogota,
    });

    const markers = [];
    const ubicaciones = document.querySelectorAll('.ubicacion');
    const placeNames = [];

    ubicaciones.forEach(function(ubicacion) {
        const latitud = ubicacion.getAttribute('data-latitud');
        const longitud = ubicacion.getAttribute('data-longitud');
        const nombre = ubicacion.getAttribute('data-nombre');

        const markerLatLng = { lat: parseFloat(latitud), lng: parseFloat(longitud) };
        const marker = new google.maps.Marker({
            position: markerLatLng,
            map: map,
            title: nombre,
            icon: {
                url: "{% static 'imagenes/theplacemarker.png/' %}",
                scaledSize: new google.maps.Size(37, 37)
            }
        });

        markers.push(marker); 

        const contentString = `
            <div class="info-window">
                <h1 class="info-window-content">${nombre}</h1>
                <p><a class="info-window-link"href="https://www.google.com/maps?q=${latitud},${longitud}" target="_blank">Ver en Google Maps</a></p>
            </div>
        `;

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            disableAutoPan: true, 
        });

        // Añadir evento click para abrir el infowindow
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });


    const placesList = document.getElementById("placesList");
    const listTitle = document.createElement("h2");
    listTitle.textContent = "Lista de Lugares Pet-Friendly";
    placesList.appendChild(listTitle);
    
    function addPlaceToList(nombre) {
        const placeItem = document.createElement("div");
        placeItem.className = "place-item";
        placeItem.textContent = nombre;
        placeNames.push(nombre);

        placeItem.addEventListener("click", function () {
            const matchingMarker = markers.find(marker => marker.getTitle() === nombre);
            if (matchingMarker) {
                map.panTo(matchingMarker.getPosition());
                matchingMarker.setAnimation(google.maps.Animation.DROP);
                setTimeout(() => {
                    matchingMarker.setAnimation(null);
                }, 3500);
            }
        });

        placesList.appendChild(placeItem);
    }

    function filterPlacesByDistance(userLatLng) {
    
        // Limpiar la lista actual
        while (placesList.firstChild) {
            placesList.removeChild(placesList.firstChild);
        }
    
        // Filtrar lugares por distancia
        for (const ubicacion of ubicaciones) {
            const nombre = ubicacion.getAttribute('data-nombre');
            const latitud = parseFloat(ubicacion.getAttribute('data-latitud'));
            const longitud = parseFloat(ubicacion.getAttribute('data-longitud'));
    
            const placeLatLng = new google.maps.LatLng(latitud, longitud);
            const distance = google.maps.geometry.spherical.computeDistanceBetween(userLatLng, placeLatLng);
    
            // Mostrar solo lugares dentro de 2 km
            if (distance <= 2000) {
                addPlaceToList(nombre);
            }
        }
    }    

    // Agrega un lugar a la lista por cada ubicación
    ubicaciones.forEach(function(ubicacion) {
        const nombre = ubicacion.getAttribute('data-nombre');
        addPlaceToList(nombre);
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLatLng = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                // Crear el marcador con la ubicación del usuario
                new google.maps.Marker({
                    position: userLatLng,
                    map: map,
                    title: "Tu Ubicación",
                    icon: {
                        url: "{% static 'imagenes/marker.png/' %}",
                        scaledSize: new google.maps.Size(60, 60),
                    }// Opcional: Cambiar el icono
                });

                userMarker.addListener("click", function () {
                    const nombreUsuario = userMarker.getTitle();
                    const matchingPlaceItem = placesList.querySelector(`.place-item:contains('${nombreUsuario}')`);
                    if (matchingPlaceItem) {
                    matchingPlaceItem.style.backgroundColor = "#f0f0f0";
                    setTimeout(() => {
                        matchingPlaceItem.style.backgroundColor = "";
                    }, 1000);
                    }
                });
                             
                filterPlacesByDistance(userLatLng);

            },
            (error) => {
                console.error("Error obteniendo la ubicación: ", error);
            }
        );
    } else {
        console.error("La geolocalización no es compatible en este navegador.");
    }
    const input = document.getElementById("pac-input");
    // Specify just the place data fields that you need.
    const autocomplete = new google.maps.places.Autocomplete(input, {
        fields: ["place_id", "geometry", "name", "formatted_address"],
    });

    autocomplete.bindTo("bounds", map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById("infowindow-content");

    infowindow.setContent(infowindowContent);

    const geocoder = new google.maps.Geocoder();
    const marker = new google.maps.Marker({ 
        map: map,
        icon: {
            url: "{% static 'imagenes/petsito.png/' %}",
            scaledSize: new google.maps.Size(65, 65),
        }
    });


    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
    autocomplete.addListener("place_changed", () => {
        infowindow.close();

        const place = autocomplete.getPlace();

        if (!place.place_id) {
        return;
        }

        geocoder
            .geocode({ placeId: place.place_id })
            .then(({ results }) => {
                map.setZoom(11);
                map.setCenter(results[0].geometry.location);
                // Set the position of the marker using the place ID and location.
                // @ts-ignore TODO This should be in @typings/googlemaps.
                marker.setPlace({
                placeId: place.place_id,
                location: results[0].geometry.location,
                });
                marker.setVisible(true);
                infowindowContent.children["place-name"].textContent = place.name;
                infowindowContent.children["place-id"].textContent = place.place_id;
                infowindowContent.children["place-address"].textContent =
                results[0].formatted_address;
                infowindow.open(map, marker);
            })
            .catch((e) => window.alert("Geocoder failed due to: " + e));
    });
}
window.initMap = initMap;