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