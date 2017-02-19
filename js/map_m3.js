function initialize() {
	var prcenter = new google.maps.LatLng(18.226122, -66.374580)
		
	var myOptions = {
		zoom: 9,
		center: prcenter,
		mapTypeId: google.maps.MapTypeId.HYBRID
		};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"), 
		myOptions);
}
