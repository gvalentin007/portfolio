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
