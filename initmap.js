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
        lat: 22.275972,
        lng: 114.169369
    },
    {
        lat: -8.341967,
        lng: 116.030442
    },
    {
        lat: 41.008091,
        lng: 29.038232
    },
    {
        lat: 40.379835,
        lng: -3.751645
    },
    {
        lat: 45.452598,
        lng: 9.175670
    },
    {
        lat: 40.846130,
        lng: 14.316905
    },
    {
        lat: 51.484715,
        lng: -0.148324
    },
    {
        lat: 51.501817,
        lng: 7.442788
    },
    {
        lat: -8.711283,
        lng: 115.170386
    }];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });
}