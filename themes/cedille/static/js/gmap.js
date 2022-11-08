function initMap() {
    var location = {lat: 45.493823, lng: -73.562332};
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

$('#contact .form-selector').on('click', 'a', function(){
    var t = $(this).data('target');
    $('#contact-form, #adhesion-form').not(t).addClass('hidden');
    $(t).removeClass('hidden');

    $('#contact .form-selector .active').removeClass('active');
    $(this).addClass('active');
})