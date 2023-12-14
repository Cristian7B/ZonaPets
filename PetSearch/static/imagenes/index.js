function initMap() {
    const myLatLng = { lat: 4.61122, lng: -74.1607771 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatLng,
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}



window.initMap = initMap;
