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
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a4fdd7"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#aaaaaa"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#c1ecdb"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#79d0bd"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
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
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#d7d7d7"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
	};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"), 
		myOptions);
		
		
		
		
	var playuelaString = 
		'</div>'+
        '<div id="bodyContent">'+
		'<p><b>La Playuela Beach</b>, '+
        'also known as Playa Sucia, is located ' +
        'in the municipality of Cabo Rojo, Puerto Rico, near the '+
        'Cabo Rojo Lighthouse and Las Salinas. '+
        '</div>'+
        '</div>';						
		
	var playuelaInfoWindow = new google.maps.InfoWindow({
		content: playuelaString
		
	});
	
	var playuelaMarker = new google.maps.Marker({
		position: playuela,
		title:"La Playuela Beach, Cabo Rojo"
		});
	playuelaMarker.setMap(map);
	
	playuelaMarker.addListener('click', function() {
		playuelaInfoWindow.open(map,playuelaMarker);
	});
	
	

	
	var flamencoMarker = new google.maps.Marker({
		position: flamenco,
		title:"Flamenco Beach, Culebra"
		});
	flamencoMarker.setMap(map);
	
	var flamencoInfoWindow = new google.maps.InfoWindow({
		content: flamencoInfoWindow
	});
	google.maps.event.addListener(flamencoMarker, 'click', function() {
		flamencoInfoWindow.open(map,flamencoMarker);
	});
	
	
	
	var sunbayMarker = new google.maps.Marker({
		position: sunbay,
		title:"Sun Bay Beach, Vieques"
		});
	sunbayMarker.setMap(map);
	
	var sunbayInfoWindow = new google.maps.InfoWindow({
		content: sunbayInfoWindow
	});
	google.maps.event.addListener(sunbayMarker, 'click', function() {
		sunbayInfoWindow.open(map,sunbayMarker);
	});
	
	
	
	var crashboatMarker = new google.maps.Marker({
		position: crashboat,
		title:"Crash Boat Beach, Aguadilla"
		});
	crashboatMarker.setMap(map);
	
	var crashboatInfoWindow = new google.maps.InfoWindow({
		content: crashboatInfoWindow
	});
	google.maps.event.addListener(crashboatMarker, 'click', function() {
		crashboatInfoWindow.open(map,crashboatMarker);
	});
	
};
