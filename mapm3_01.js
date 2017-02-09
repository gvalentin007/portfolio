function initialize() {
	var playuela = new google.maps.LatLng(17.935974,-67.188475)
	var myOptions = {
		zoom: 18,
		center: playuela,
		mapTypeId: google.maps.MapTypeId.HYBRID
		};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"), 
		myOptions);

	var playuelaMarker = new google.maps.Marker({
		position: playuela,
		title:"Geography 485L/585L Classroom, Bandelier East, Room 106"
		});
	playuelaMarker.setMap(map);

}
