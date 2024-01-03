function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: -25.363, lng: 131.044 },
    });

    // Utiliza una variable para almacenar los datos de Django
    const markersData = JSON.parse(document.getElementById('markers').textContent);

    // Itera sobre los datos y muestra los marcadores en el mapa
    markersData.forEach(markerInfo => {
        new google.maps.Marker({
            position: { lat: parseFloat(markerInfo.latitud), lng: parseFloat(markerInfo.longitud) },
            map,
            title: markerInfo.nombre_compañia,
        });
    });
}

window.initMap = initMap;
