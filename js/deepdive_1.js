// Menu: Milestone Dropdown

function myFunctionmm() {
    document.getElementById("myDropdownmm").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtnmm')) {
    var myDropdownmm = document.getElementById("myDropdownmm");
      if (myDropdownmm.classList.contains('show')) {
        myDropdownmm.classList.remove('show');
      }
  }
}

// Menu: Deep Dive Dropdown

function myFunctiondd() {
    document.getElementById("myDropdowndd").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtndd')) {
    var myDropdowndd = document.getElementById("myDropdowndd");
      if (myDropdowndd.classList.contains('show')) {
        myDropdowndd.classList.remove('show');
      }
  }
}

// MAP

function initialize() {
	//Beaches
	var prcenter = new google.maps.LatLng(18.226122, -66.374580)
	var playuela = new google.maps.LatLng(17.935974, -67.188475)
	var flamenco = new google.maps.LatLng(18.328375, -65.316861)
	var sunbay = new google.maps.LatLng(18.097135, -65.461280)
	var crashboat = new google.maps.LatLng(18.458587, -67.164352)
	var escanbron = new google.maps.LatLng(18.466825, -66.090601)
	var marchiquita = new google.maps.LatLng(18.492285, -66.625923)
	var gilligan = new google.maps.LatLng(17.942551, -66.873859)
	var playasanta = new google.maps.LatLng(17.938505, -66.955582)
	var boqueron = new google.maps.LatLng(18.017733, -67.172261)
	var domes = new google.maps.LatLng(18.364625, -67.269828)
	
	//Additional markes - Trial 1 - In progress
	//Photos
	//var playuelapic new google.maps.LatLng(17.933848, -67.187338)
	//http://maps.google.com/mapfiles/kml/shapes/cross-hairs_highlight.png
	
		
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
		
	var arrow = {
		url: 'http://earth.google.com/images/kml-icons/track-directional/track-8.png',
		scaleSize: new google.maps.Size(50, 50)
	};
	
	// Playuela infoWindow content, infoWindow, marker, click function
				
	var playuelaString = 
		'<div id="bodyContent">'+
		'<p><b>La Playuela Beach</b>, '+
        'also known as Playa Sucia, is located ' +
        'in the municipality of Cabo Rojo, Puerto Rico, near the '+
        'Cabo Rojo Lighthouse and Las Salinas. '+
		'<p><img src="img/gjvg_1769.JPG" alt="Cabo Rojo, PR" style="width:600px;height:400px;"></p> '+
		'<p> ^ Photo by GValentin </p>' +
		'<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1489197026014!6m8!1m7!1sF%3A-ij8GnJegoXA%2FU1awi9Q_InI%2FAAAAAAAAPME%2FbN4wOhPZQb8j2LOQ8p-GoWLOBhRzgpBjgCJkC!2m2!1d17.93381311335361!2d-67.19082730886248!3f47.11638411099733!4f3.6976009951606983!5f0.7820865974627469" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe></p> '+
		
		//InfoWindow image trials:
		//'<p><img height="200" width="300" src="{https://drive.google.com/file/d/0B90BW-oT_w3KV2xJMmpYWG4xM1E/view?usp=sharing}"></p> '+
		//'<img height="200" width="100" src="{img/gjvg_pr}"> '+
		//'<img src="http://maps.googleapis.com/maps/api/streetview?size=400x400&location={17.935974},%20{-67.18847}&sensor=false&key=AIzaSyC_NzyS26gMjp7Ei3uy5vdL1ulEQKri9Vo" /> '+	
		'</div>' 
		
		
	var playuelaInfoWindow = new google.maps.InfoWindow({
		content: playuelaString
	});
	
	var playuelaMarker = new google.maps.Marker({
		position: playuela,
		title:"La Playuela Beach, Cabo Rojo",
		icon: arrow
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
		'<p><img src="img/gjvg_flamenco.jpg" alt="Vieques, PR" style="width:600px;height:400px;"></p> '+
		'<p> ^ Photo by GValentin </p>' +
		'<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1489197129464!6m8!1m7!1sF%3A-X3UGCqPVAF4%2FVZs4K7Fa0LI%2FAAAAAAAAYVU%2Fz0Jz6dCh7VEjLCgJhPylI07_ZP2AqkiHwCJkC!2m2!1d18.3287121!2d-65.3179261!3f332.3261668854815!4f6.854291173702492!5f0.7820865974627469" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe></p> '+
        '</div>';
		
	var flamencoMarker = new google.maps.Marker({
		position: flamenco,
		title:"Flamenco Beach, Culebra",
		icon: arrow
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
		'<p><img src="img/gjvg_sunbay.JPG" alt="Vieques, PR" style="width:600px;height:400px;"></p> '+
		'<p> ^ Photo by GValentin </p>' +
		'<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1489197359467!6m8!1m7!1sF%3A-6wE9VRCXSbg%2FU80K54NSQJI%2FAAAAAAAAd8U%2Ff065LC6soSYZcgccIxd8WHf53A--nXUVQCJkC!2m2!1d18.092161!2d-65.468116!3f25.4270207941735!4f4.727712386877869!5f0.7820865974627469" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe></p> '+
        '</div>';
		
	var sunbayMarker = new google.maps.Marker({
		position: sunbay,
		title:"Sun Bay Beach, Vieques",
		icon: arrow
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
		'<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1489196776024!6m8!1m7!1sF%3A-fbyzKIMflek%2FVCcjhZt2wrI%2FAAAAAAAAAEQ%2FfZQ4MNJC0Tw1goKGWQTJScsVzciCaSJoACJkC!2m2!1d18.4589996!2d-67.1644592!3f270.41832115807534!4f11.045463271591146!5f0.7820865974627469" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe></p> '+
        '</div>';
		
	var crashboatMarker = new google.maps.Marker({
		position: crashboat,
		title:"Crash Boat Beach, Aguadilla",
		icon: arrow
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
		'<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1489197469693!6m8!1m7!1sF%3A-1946WPYZvHM%2FWIZ8kO3ISCI%2FAAAAAAAA1dM%2F_FIbvWv6z5YvQ0QwN1zFl8p_MqiuEXwrQCLIB!2m2!1d18.4668835!2d-66.0900351!3f264.9458395523834!4f17.565428909627812!5f0.7820865974627469" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe></p> '+
        '</div>';
		
	var escanbronMarker = new google.maps.Marker({
		position: escanbron,
		title:"Escanbron Beach, San Juan",
		icon: arrow
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
		'<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1489197611075!6m8!1m7!1sF%3A-Ei5glFahPw8%2FVsEsjoTqi4I%2FAAAAAAABeAQ%2FpucKGSWY4TMl2Rllv2EFlk8IUsM-ZJBywCJkC!2m2!1d18.4735686!2d-66.48399049999999!3f132.7133585803195!4f-5.21705939713938!5f0.7820865974627469" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe></p> '+
        '</div>';
		
	var marchiquitaMarker = new google.maps.Marker({
		position: marchiquita,
		title:"Mar Chiquita Beach, Manati",
		icon: arrow
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
		'<p><img src="img/gjvg_gilligan.jpg" alt="Guanica, PR" style="width:600px;height:400px;"></p> '+
		'<p> ^ Photo by GValentin </p>' +
		'<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1489197673739!6m8!1m7!1sF%3A-8ycCP4u6C3g%2FV_qZNCowPaI%2FAAAAAAAAAkU%2F35kdq1tQDjg29peUGrrI8DCzYnvcY1B5gCJkC!2m2!1d17.9422047!2d-66.874408!3f27.48756790729102!4f2.304682543589479!5f0.7820865974627469" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe></p> '+
        '</div>';
		
	var gilliganMarker = new google.maps.Marker({
		position: gilligan,
		title:"Gilligan Island, Guanica",
		icon: arrow
		});
	gilliganMarker.setMap(map);
	
	var gilliganInfoWindow = new google.maps.InfoWindow({
		content: gilliganString
	});
	google.maps.event.addListener(gilliganMarker, 'click', function() {
		gilliganInfoWindow.open(map,gilliganMarker);
	});
	
	// Playa Santa infowindow, infowindow, marker, click function
	
	var playasantaString =
		'<div id="bodyContent"> '+
		'<p><b>Playa Santa</b> '+
        'is located in the municipality of Guanica. Being in the south coast of Puerto Rico, '+
		'it has clear tranquil waters. </p>'+
		'<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1489197885335!6m8!1m7!1sF%3A-gVme_7srlSo%2FVoqFXvrooNI%2FAAAAAAAAMto%2FJ-S2O5NPZaYprprIZkp5kpo3MwwGygppgCLIB!2m2!1d17.9383009!2d-66.955473!3f158.02857953149638!4f11.997390390736385!5f0.7820865974627469" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe></p> '+
        '</div>';
		
	var playasantaMarker = new google.maps.Marker({
		position: playasanta,
		title:"Playa Santa, Guanica",
		icon: arrow
		});
	playasantaMarker.setMap(map);
	
	var playasantaInfoWindow = new google.maps.InfoWindow({
		content: playasantaString
	});
	google.maps.event.addListener(playasantaMarker, 'click', function() {
		playasantaInfoWindow.open(map,playasantaMarker);
	});
	
		
	// Boqueron infowindow, infowindow, marker, click function
	
	var boqueronString =
		'<div id="bodyContent"> '+
		'<p><b>Boqueron Beach</b> '+
        'is part of Boqueron Bay, on the west side of Cabo Rojo municipality. Enjoy beautiful sunsets from '+
		'the sea-side villas available for rental. </p>'+
		'<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1489198084184!6m8!1m7!1sLCKjN5gVphzUNWrqI-ludQ!2m2!1d18.01771116579263!2d-67.17222502317327!3f248.1516257595933!4f-6.204121333661064!5f0.7820865974627469" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe></p> '+
        '</div>';
		
	var boqueronMarker = new google.maps.Marker({
		position: boqueron,
		title:"Boqueron Beach, Cabo Rojo",
		icon: arrow
		});
	boqueronMarker.setMap(map);
	
	var boqueronInfoWindow = new google.maps.InfoWindow({
		content: boqueronString
	});
	google.maps.event.addListener(boqueronMarker, 'click', function() {
		boqueronInfoWindow.open(map,boqueronMarker);
	});
	
		
	// Domes infoWindow, infowindow, marker, click function

	
	var domesString =
		'<div id="bodyContent"> '+
		'<p><b>Domes Beach</b> '+
        'gets its name from the nearby dome-shaped Old Nuclear Plant, now a museum, on the west side of Puerto Rico. '+
		'The area is a hot spot for surfing enthusiasts. </p>'+
		'<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1489196597540!6m8!1m7!1sF%3A-VtmC-8R66FM%2FU1M3C7sqiZI%2FAAAAAAAAJV4%2FfMNZ-OVkkgA-LMg9R5FX9ECDQ6-1kSrhQCLIB!2m2!1d18.3642389!2d-67.2700478!3f180.07300270211883!4f-0.15603333815478493!5f0.7820865974627469" width="600" height="400" frameborder="0" style="border:0" allowfullscreen></iframe><p/> ' +
        '</div>';
		
	var domesMarker = new google.maps.Marker({
		position: domes,
		title:"Domes Beach, Rincon",
		icon: arrow
		});
	domesMarker.setMap(map);
	
	var domesInfoWindow = new google.maps.InfoWindow({
		content: domesString
	});
	google.maps.event.addListener(domesMarker, 'click', function() {
		domesInfoWindow.open(map,domesMarker);
	});
	
		
	
// Fusion Table Trial 1: Does not work

//	var layer = new google.maps.FusionTablesLayer({
//		map: map,
//		heatmap: { enabled: false },
//		query: {
 //       select: '\'geometry\'',
//        from: "1D8PWC3fm95dzacweHanm72heyaDo6GyNRhZZpVad",
//      },
//		options: {
//        styleId: 2,
//        templateId: 2
//      }
//    });
//  layer.setMap(map);
//google.maps.event.addDomListener(window, 'load', initialize);
//};



// Fusion Table Trial 2: Works

	var layer = new google.maps.FusionTablesLayer({
    query: {
      select: '\'geometry\'',
      from: '1D8PWC3fm95dzacweHanm72heyaDo6GyNRhZZpVad'
    },
	styles: [{
      polygonOptions: {
	  fillColor: "#B8860B",
	  fillOpacity: 0.40
	  }
      }]
  });
  layer.setMap(map);
google.maps.event.addDomListener(window, 'load', initialize);
};
