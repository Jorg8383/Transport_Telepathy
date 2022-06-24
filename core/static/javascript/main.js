
/* dynamic main page component behaviour. */

$(".appbar").hide(); // Hiding appbar on loading

/* When an icon is clicked */
$(".vertical-menu a").click(function(){
    if ($(this).hasClass("active")){ // If the clicked item is highlighted
        $(this).removeClass("active") // unhighlight the item
        $(".appbar").animate({width: 'toggle'}); // Collapse or uncollapse the appbar
    }
    else {
        if ($(".vertical-menu a").hasClass("active")){ // If any of the icons are active (other than the one clicked)
            $(".vertical-menu a").removeClass("active"); // Unhighlight all icons
            $(this).toggleClass('active'); // Highlight this icon
        } 
        else {
            $(".vertical-menu a").removeClass("active"); 
            $(".appbar").animate({width: 'toggle'}); // Toggle appbar
            $(this).toggleClass('active'); // Make the clicked icon active
        }
    }
})

let map;
//var apikey = 'https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyBEulkjFc2UqiZiYyTqCTeYBG_BvpzI4ek';


function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.3498, lng: -6.2603 },
    zoom: 11,
    });
    directionsRenderer.setMap(map);
    calcRoute(directionsService, directionsRenderer)
}

// refer from https://developers.google.com/maps/documentation/javascript/directions?hl=en#TravelModes
function calcRoute(directionsService, directionsRenderer) {
    var request = {
        origin: {lat: 53.3068, lng:-6.2229}, // start location
        destination: {lat:53.3449, lng:-6.2601}, // end location
        travelMode: 'TRANSIT', // -> public transport
        transitOptions: {
            //departureTime: new Date(), the time of departure, default now
            modes: ['BUS'],
            //routingPreference:'FEWER_TRANSFERS'/'LESS_WALKING' 
        },
        //waypoints: DirectionsWaypoint, the points the route will pass throuth
        //optimizeWaypoints: Boolean,
        provideRouteAlternatives: true, // show more than one routes
        avoidHighways: false, // no need to avoid the highway
        avoidTolls: false //no need to avoid the tolles
    };
    directionsService.route(request, function(result, status){
        if(status == 'OK'){
            directionsRenderer.setDirections(result);
        }
        else{
            console.log(status)
        }
        });
}
window.initMap = initMap;

