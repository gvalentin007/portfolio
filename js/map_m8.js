var myMap = new ol.Map({
	target: 'map_canvas',
	layers: [
		new ol.layer.Title({
			source: new ol.source.OSM()
		})
	],
	view: new ol.View({
		center: ol.proj.fromLonLant([-109.045187,36.998980]),
		zoom: 20
	})
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
        map.setLayerGroup(Layer_Stamen_terrain);
    }
}

setMapType('STAMEN_terrain')