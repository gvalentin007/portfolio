//PROJECTIONva

var projection = ol.proj.get('EPSG:3857');

//STYLES
var stroke = new ol.style.Stroke({color: 'black', width: 2});
var fill = new ol.style.Fill({color: 'red'});

var volcanostyle = new ol.style.Style({
          image: new ol.style.RegularShape({
            fill: fill,
            stroke: stroke,
            points: 3,
            radius: 10,
            rotation: Math.PI / 4,
            angle: 0
          })
        })
		

//GEOMETRIES
//COORDS
var vallescalderaCoord = [-106.529373, 35.905258]
var capulinCoord = [-103.970263,36.782375]
var sunsetCoord = [-111.503089, 35.363819]
var spCoord = [-111.632005,35.582432]
var dotseroCoord = [-107.035134,39.660442]
var blackrockCoord = [-112.485088,38.806087]

//POINTS
var vallescalderaPoint = new ol.geom.Point(ol.proj.fromLonLat(vallescalderaCoord, projection));
var capulinPoint = new ol.geom.Point(ol.proj.fromLonLat(capulinCoord, projection));
var sunsetPoint = new ol.geom.Point(ol.proj.fromLonLat(sunsetCoord, projection));
var spPoint = new ol.geom.Point(ol.proj.fromLonLat(spCoord, projection));
var dotseroPoint = new ol.geom.Point(ol.proj.fromLonLat(dotseroCoord, projection));
var blackrockPoint = new ol.geom.Point(ol.proj.fromLonLat(blackrockCoord, projection));

//FEATURES
var vallescalderaFeature = new ol.Feature({
	geometry: vallescalderaPoint
})

var capulinFeature = new ol.Feature({
	geometry: capulinPoint
})

var sunsetFeature = new ol.Feature({
	geometry: sunsetPoint
})

var spFeature = new ol.Feature({
	geometry: spPoint
})

var dotseroFeature = new ol.Feature({
	geometry: dotseroPoint
})

var blackrockFeature = new ol.Feature({
	geometry: blackrockPoint
})

//LAYER OBJECTS

var volcanoes_geoms = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: [vallescalderaFeature,capulinFeature,sunsetFeature,spFeature,dotseroFeature,blackrockFeature]
	}),
	style: volcanostyle
})

var blocks_kml = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://s3.amazonaws.com/kkb-web/data/tl_2010_35001_tabblock10.kml',
		projection: projection,
		format: new ol.format.KML()
	})
})

//BASEMAP
var Layer_Stamen_terrain = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'terrain'})
        })
    ]
});

//MAP
var myMap = new ol.Map({
	target: 'map_canvas',
	layers: [
		Layer_Stamen_terrain,
		volcanoes_geoms,
		blocks_kml
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-109.045187,36.998980]),
		zoom: 6
	}),
	controls: ol.control.defaults().extend([
		new ol.control.ScaleLine()
	]),
	
});

//PROCESS TO CREATE INDIVIDUAL POINTS AND MAKE THEM INTO A LAYER:
//coord
//features
//geomlayers
//set layers on map
//See example code here: https://github.com/karlbenedict/GEOG485-585/blob/master/sample-files/OpenLayers/js/OpenLayers_04_vector.js