function initMap() {
    var location = {lat: 45.4934676539119, lng: -73.56275806246913};
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