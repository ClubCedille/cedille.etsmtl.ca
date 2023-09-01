function initMap() {
    var location = {lat: 45.49348835090807, lng: -73.56258114157671};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location
    })
    new google.maps.Marker({
        position: location, 
        map,
        title: 'Club Cedille'
    });
}