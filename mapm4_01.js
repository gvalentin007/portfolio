function initialize() {
	var prcenter = new google.maps.LatLng(18.226122, -66.374580)
	var playuela = new google.maps.LatLng(17.935974, -67.188475)
	var flamenco = new google.maps.LatLng(18.328375, -65.316861)
	var sunbay = new google.maps.LatLng(18.097135, -65.461280)
	var crashboat = new google.maps.LatLng(18.458587, -67.164352)
	
	var myOptions = {
		zoom: 9,
		center: prcenter,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		styles: [
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#d6d8d7"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b0e6ce"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#329292"
      },
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#54c5c5"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#0d2626"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#0d2626"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#89c5d8"
      }
    ]
  }
]
};

	var map = new google.maps.Map(
		document.getElementById("map_canvas"), 
		myOptions);

	var playuelaMarker = new google.maps.Marker({
		position: playuela,
		title:"La Playuela Beach, Cabo Rojo, Puerto Rico"
		});
	playuelaMarker.setMap(map);
	
	var flamencoMarker = new google.maps.Marker({
		position: flamenco,
		title:"Flamenco Beach, Culebra, Puerto Rico"
		});
	flamencoMarker.setMap(map);
	
	var sunbayMarker = new google.maps.Marker({
		position: sunbay,
		title:"Sun Bay Beach, Vieques, Puerto Rico"
		});
	sunbayMarker.setMap(map);
	
	var crashboatMarker = new google.maps.Marker({
		position: crashboat,
		title:"Crash Boat Beach, Aguadilla, Puerto Rico"
		});
	crashboatMarker.setMap(map);

}
