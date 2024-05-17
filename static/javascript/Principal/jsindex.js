async function initMap() {
    const [{ Map }, { AdvancedMarkerElement }, { geometry }] = await Promise.all([
        google.maps.importLibrary("marker"),
        google.maps.importLibrary("places"),
        google.maps.importLibrary("geometry"),
    ]);
    const bogota = { lat: 4.710989, lng: -74.072090 }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: bogota,
        mapTypeControl: false
    });

    const markers = [];
    const ubicaciones = document.querySelectorAll('.ubicacion');
    const placeNames = [];

    ubicaciones.forEach(function (ubicacion) {
        const latitud = ubicacion.getAttribute("data-latitud");
        const longitud = ubicacion.getAttribute("data-longitud");
        const nombre = ubicacion.getAttribute("data-nombre");
        const tipoNegocio = ubicacion.getAttribute("data-tipo-negocio");
        const telefonoUsuario = ubicacion.getAttribute("data-telefono"); 

        const markerLatLng = { lat: parseFloat(latitud), lng: parseFloat(longitud) };
        const marker = new google.maps.Marker({
            position: markerLatLng,
            map: map,
            title: nombre,
            icon: {
                url: "/static/imagenes/markerzonapets.png",
                scaledSize: new google.maps.Size(45, 45)
            },
            data: {
                latitud: parseFloat(latitud),
                longitud: parseFloat(longitud),
                tipoNegocio: tipoNegocio,
                telefonoUsuario: telefonoUsuario 
            }
        });

        markers.push(marker);

        const placesList = document.querySelector(".info-place");

        marker.addListener('click', function () {
            const nombre = marker.getTitle();
            const tipoNegocio = marker.data.tipoNegocio;
            const telefonoUsuario = marker.data.telefonoUsuario; 
            placesList.innerHTML = getContentStringForMarker(nombre, latitud, longitud, tipoNegocio, telefonoUsuario); 
        });
    });

    function getContentStringForMarker(nombre, latitud, longitud, tipoNegocio, telefono) {
        return `
            <div class="info-window">
                <div id="dialog" class="dialog">
                    <ion-icon id="hide" class="close-icon" name="close-outline"></ion-icon>
                    <div class="titledialog">${nombre}</div>
                    <div class="information">
                        <div class="info1">
                            <div class="tipo">
                                <p>${tipoNegocio}</p>
                            </div>
                            <div class="telefono">
                                    <ion-icon class="icon" name="call-outline"></ion-icon>
                                    <p>${telefono}</p>
                            </div>
                        </div>
                        <div class="info2">
                            <div class="g-maps">
                                <ion-icon class="icon" name="flag-outline"></ion-icon>
                                <p><a class="info-window-link" href="https://www.google.com/maps?q=${latitud},${longitud}" target="_blank">Ver en <span>Google Maps</span></a></p>
                            </div>
                            <div class="plus">
                                <ion-icon name="add-circle-outline"></ion-icon>
                            </div>
                        </div>    
                    </div>
                </div>
                <h1 class="info-window-content">${nombre}</h1>
                <div class="tipo-negocio">
                    <ion-icon name="pricetag-outline"></ion-icon>
                    <p class="tipo-negocio-p">${tipoNegocio}</p>
                </div>
                <button class="show-button" id="show"><ion-icon class="show-icon" name="information-circle-outline"></ion-icon>Saber más</button>
            </div>
        `;
    }

    const placesList1 = document.querySelector(".info-place");
    const placesList = document.getElementById("placesList");

    function addPlaceToList(nombre) {
        const placeItem = document.createElement("div");
        placeItem.className = "place-item";
        placeItem.textContent = nombre;
        placeNames.push(nombre);

        placeItem.addEventListener("click", function () {
            const matchingMarker = markers.find(marker => marker.getTitle() === nombre);
            if (matchingMarker) {
                const latitud = matchingMarker.data.latitud;
                const longitud = matchingMarker.data.longitud;
                const tipoNegocio = matchingMarker.data.tipoNegocio;
                const telefonoUsuario = matchingMarker.data.telefonoUsuario;

                map.panTo(matchingMarker.getPosition());
                matchingMarker.setAnimation(google.maps.Animation.DROP);
                setTimeout(() => {
                    matchingMarker.setAnimation(null);
                }, 3500);
                placesList1.innerHTML = getContentStringForMarker(nombre, latitud, longitud, tipoNegocio, telefonoUsuario);
            }
        });

        placesList.appendChild(placeItem);
    }

    function filterPlacesByDistance(userLatLng) {
        placesList.innerHTML = '';

        const listTitle = document.createElement("h2");
        const listDescription = document.createElement("span")
        const listHr = document.createElement("hr")
        listDescription.textContent = ", 2km a la redonda."
        listTitle.textContent = "Lugares cerca de ti";
        listTitle.appendChild(listDescription);
        placesList.appendChild(listTitle);
        placesList.appendChild(listHr);

        for (const ubicacion of ubicaciones) {
            const nombre = ubicacion.getAttribute('data-nombre');
            const latitud = parseFloat(ubicacion.getAttribute('data-latitud'));
            const longitud = parseFloat(ubicacion.getAttribute('data-longitud'));

            const placeLatLng = new google.maps.LatLng(latitud, longitud);
            const distance = google.maps.geometry.spherical.computeDistanceBetween(userLatLng, placeLatLng);

            if (distance <= 2000) {
                addPlaceToList(nombre);
            }
        }
    }

    const checkboxes = document.querySelectorAll('.tipo-checkbox');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            filterPlacesByCheckbox();
        });
    });

    function filterPlacesByCheckbox() {
        const selectedTypes = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        placesList.innerHTML = '';

        const filter = "Lugares filtrados: "
        const selectedTypesDisplay = selectedTypes.join(', ');
        const titleElement = document.createElement("h2");
        const listDescription = document.createElement("span");
        listDescription.textContent = selectedTypesDisplay;
        titleElement.textContent = filter;
        placesList.appendChild(titleElement);

        if (selectedTypes.length === 0) {
            placesList.innerHTML = '';

            const listTitle = document.createElement("h2");
            listTitle.textContent = "Lugares cerca de ti";
            placesList.appendChild(listTitle);

            ubicaciones.forEach(function (ubicacion) {
                const nombre = ubicacion.getAttribute('data-nombre');
                addPlaceToList(nombre);
            });

            markers.forEach(marker => marker.setVisible(true));
            return;
        }

        markers.forEach(marker => {
            if (selectedTypes.includes(marker.data.tipoNegocio)) {
                marker.setVisible(true);
                const nombre = marker.getTitle();
                addPlaceToList(nombre);
            } else {
                marker.setVisible(false);
            }
        });
    }

    ubicaciones.forEach(function (ubicacion) {
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

                const userMarker = new google.maps.Marker({
                    position: userLatLng,
                    map: map,
                    title: "Tu Ubicación",
                    icon: {
                        url: "/static/imagenes/marker.png",
                        scaledSize: new google.maps.Size(60, 60),
                    }
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
            url: "/static/imagenes/petsito.png",
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

document.addEventListener("DOMContentLoaded", function() {
    var showPlacesListButton = document.getElementById("showPlacesListButton");

    showPlacesListButton.addEventListener('click', function() {
        var placesList = document.querySelector('.places-list');
        placesList.classList.toggle('show-places-list');
        placesList.style.display = placesList.style.display === 'block' ? 'none' : 'block';
    });

    function checkWindowSize() {
        var width = window.innerWidth;
        var showPlacesListButton = document.getElementById('showPlacesListButton');

        if (width <= 1000) {
            showPlacesListButton.style.display = 'flex';
        } else {
            showPlacesListButton.style.display = 'none';
        }
    }

    checkWindowSize(); 
    window.addEventListener('resize', checkWindowSize); 
});
