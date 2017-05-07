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


// Map
var myMap = new ol.Map({
	target: 'map_canvas',
//	layers: [
//		new ol.layer.Title({
//			source: new ol.source.OSM()
//		})
//	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-109.045187,36.998980]),
		zoom: 6
	}),
	controls: ol.control.defaults().extend([
		new ol.control.ScaleLine()
	]),
	
});

var Layer_Stamen_terrain = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'terrain'})
        })
    ]
});

function setMapType(newType) {
    if(newType == 'STAMEN_terrain') {
        myMap.setLayerGroup(Layer_Stamen_terrain);
    }
}

setMapType('STAMEN_terrain')
