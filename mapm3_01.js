function initialize() {
	var prcenter = new google.maps.LatLng(18.226122, -66.374580)
	var playuela = new google.maps.LatLng(17.935974, -67.188475)
	var flamenco = new google.maps.LatLng(18.328375, -65.316861)
	var sunbay = new google.maps.LatLng(18.097135, -65.461280)
	var crashboat = new google.maps.LatLng(18.458587, -67.164352)
	
	var myOptions = {
		zoom: 9,
		center: prcenter,
		mapTypeId: google.maps.MapTypeId.HYBRID
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
