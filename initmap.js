// google map api initial render
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });


    //adding pinpoints on the map

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{
                lat: 1.351639,
                lng: 103.845329
            }, {
                lat:22.275972, 
                lng:114.169369
            }, 
            {
                lat:-8.341967, 
                lng:116.030442
            },
            {
                lat: -8.711283, 
                lng: 115.170386
            }];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' 
    });
}