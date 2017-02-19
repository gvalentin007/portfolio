function initialize() {
	var prcenter = new google.maps.LatLng(18.226122, -66.374580)
	var playuela = new google.maps.LatLng(17.935974, -67.188475)
	var flamenco = new google.maps.LatLng(18.328375, -65.316861)
	var sunbay = new google.maps.LatLng(18.097135, -65.461280)
	var crashboat = new google.maps.LatLng(18.458587, -67.164352)
	var escanbron = new google.maps.LatLng(18.466825, -66.090601)
	var marchiquita = new google.maps.LatLng(18.492285, -66.625923)
	var gilligan = new google.maps.LatLng(17.942551, -66.873859)
	
	var myOptions = {
		zoom: 9,
		center: prcenter,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		
		// Googel style done at https://mapstyle.withgoogle.com/
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
	
	// Playuela infoWindow content, infoWindow, marker, click function
				
	var playuelaString = 
		'<div id="bodyContent">'+
		'<p><b>La Playuela Beach</b>, '+
        'also known as Playa Sucia, is located ' +
        'in the municipality of Cabo Rojo, Puerto Rico, near the '+
        'Cabo Rojo Lighthouse and Las Salinas. '+
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
	
	// Flamenco infoWindow content, infoWindow, marker, click function
	
	var flamencoString = 
		'<div id="bodyContent">'+
		'<p><b>Flamenco Beach</b> '+
        'is known for its beautiful white sands ' +
        'and clear waters. It is located in the island-municipality '+
        'of Culebra, Puerto Rico. '+
        '</div>';
		
	var flamencoMarker = new google.maps.Marker({
		position: flamenco,
		title:"Flamenco Beach, Culebra"
		});
	flamencoMarker.setMap(map);
	
	var flamencoInfoWindow = new google.maps.InfoWindow({
		content: flamencoString
	});
	google.maps.event.addListener(flamencoMarker, 'click', function() {
		flamencoInfoWindow.open(map,flamencoMarker);
	});
	
	// Sun Bay infoWindow content, infoWindow, marker, click function
	
	var sunbayString = 
		'<div id="bodyContent">'+
		'<p><b>Sun Bay Beach</b> '+
        'is located on the south coast of the island-municipality of Vieques, ' +
        'walking distance from the Puerto Mosquito Bioluminicent Bay.'+
        '</div>';
		
	var sunbayMarker = new google.maps.Marker({
		position: sunbay,
		title:"Sun Bay Beach, Vieques"
		});
	sunbayMarker.setMap(map);
	
	var sunbayInfoWindow = new google.maps.InfoWindow({
		content: sunbayString
	});
	google.maps.event.addListener(sunbayMarker, 'click', function() {
		sunbayInfoWindow.open(map,sunbayMarker);
	});
	
	// Crash Boat infoWindow content, infoWindow, marker, click function
	
	var crashboatString = 
		'<div id="bodyContent"> '+
		'<p><b>Crash Boat Beach</b> '+
        'gets its name from the remnants of a ship wreck near by. '+
		'It is located in the Aguadilla municipality, west coast of Puerto Rico. '+
        '</div>';
		
	var crashboatMarker = new google.maps.Marker({
		position: crashboat,
		title:"Crash Boat Beach, Aguadilla"
		});
	crashboatMarker.setMap(map);
	
	var crashboatInfoWindow = new google.maps.InfoWindow({
		content: crashboatString
	});
	google.maps.event.addListener(crashboatMarker, 'click', function() {
		crashboatInfoWindow.open(map,crashboatMarker);
	});
	
	// Escanbron infoWindow content, infoWindow, marker, click function
	
	var escanbronString = 
		'<div id="bodyContent"> '+
		'<p><b>Escanbron Beach</b> '+
        'is located in the historic Isleta de San Juan, Puerto Rico. '+
        '</div>';
		
	var escanbronMarker = new google.maps.Marker({
		position: escanbron,
		title:"Escanbrón Beach, San Juan"
		});
	escanbronMarker.setMap(map);
	
	var escanbronInfoWindow = new google.maps.InfoWindow({
		content: escanbronString
	});
	google.maps.event.addListener(escanbronMarker, 'click', function() {
		escanbronInfoWindow.open(map,escanbronMarker);
	});
	
	// Mar Chiquita infoWindow content, infoWindow, marker, click function
	
	var marchiquitaString = 
		'<div id="bodyContent"> '+
		'<p><b>Mar Chiquita Beach</b> '+
        ' is an oval-shaped cove in the municipality if Manati, '+
		'on the north coast of Puerto Rico. '+
        '</div>';
		
	var marchiquitaMarker = new google.maps.Marker({
		position: marchiquita,
		title:"Mar Chiquita Beach, Manati"
		});
	marchiquitaMarker.setMap(map);
	
	var marchiquitaInfoWindow = new google.maps.InfoWindow({
		content: marchiquitaString
	});
	google.maps.event.addListener(marchiquitaMarker, 'click', function() {
		marchiquitaInfoWindow.open(map,marchiquitaMarker);
	});

	// Gilligan infoWindow content, infoWindow, marker, click function
	
	var gilliganString =
		'<div id="bodyContent"> '+
		'<p><b>Gilligan Island</b> '+
        'is a paradisiac cay reached by boat off the coast of Guanica, '+
		'southern Puerto Rico. </p>'+
        '</div>';
		
	var gilliganMarker = new google.maps.Marker({
		position: guilligan,
		title:"Gilligan Island, Guanica"
		});
	gilliganMarker.setMap(map);
	
	var gilliganInfoWindow = new google.maps.InfoWindow({
		content: gilliganString
	});
	google.maps.event.addListener(gilliganMarker, 'click', function() {
		gilliganInfoWindow.open(map,gilliganMarker);
	});
	
	 var layer = new google.maps.FusionTablesLayer({
	query: {
      map: map,
      heatmap: { enabled: false },
      query: {
        select: '\'geometry\'',
        from: "1D8PWC3fm95dzacweHanm72heyaDo6GyNRhZZpVad",
      },
	},
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  layer.setMap(map);
};
