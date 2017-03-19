function initialize() {
	var pcenter = new google.maps.LatLng(36.060574, -107.961692)
	
	var myOptions = {
		zoom: 18,
		center: pcenter,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		};	
	var map = new google.maps.Map(
		document.getElementById("map_canvas"), 
		myOptions);
		
	var aqui = {
		url: 'http://maps.google.com/mapfiles/kml/paddle/ltblu-square.png',
		scaleSize: new google.maps.Size(50, 50)
		};
	
	var pointString = 
		'<div id="bodyContent">'+
		'<p><b>Pueblo Bonito</b> <br> '+
		'<p><b>Address:</b> <br> Chaco Culture National Historical Park, <br>Penasco Blanco Trail, Nageezi, NM 87037 </p> '+
		'<p><b><a href="https://www.nps.gov/chcu/planyourvisit/pueblo-bonito.htm">Website</a></b>' +
        '<p><iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1489879214322!6m8!1m7!1sF%3A-6JU-1BvQ24E%2FVzHu4iQ37hI%2FAAAAAAAANVs%2F-u6cS-Ed7KgtUyYMRfFq10ClvajUYnL5QCLIB!2m2!1d36.0608068!2d-107.9615429!3f97.71535859567646!4f4.8798213537012884!5f0.7820865974627469" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe></p> '+
        '</div>';						
		
	var pointInfoWindow = new google.maps.InfoWindow({
		content: pointString
	});
	
	var pointMarker = new google.maps.Marker({
		position: pcenter,
		title:"Pueblo Bonito, Chaco Culture National Historical Park, NM",
		icon: aqui
		});
	pointMarker.setMap(map);
	
	pointMarker.addListener('click', function() {
		pointInfoWindow.open(map,pointMarker);
	});
}
