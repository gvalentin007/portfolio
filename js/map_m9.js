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

       // KML -> Converted shp to kml and saved on kml folder at GitHub, then created layer name and pasted link to kml as seen below. 
var azfaults_kml = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://gvalentin007.github.io/portfolio/kml/azfaults_dd.kml',
		projection: projection,
		format: new ol.format.KML()
	})
})

var utfaults_kml = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://gvalentin007.github.io/portfolio/kml/utfaults_dd.kml',
		projection: projection,
		format: new ol.format.KML()
	})
})


      //WMS -> Found WMS service at USGS website (https://mrdata.usgs.gov/geology/state/state.php?state=NM) and downloaded file (https://mrdata.usgs.gov/services/nm?service=WMS&version=1.1.1&request=GetCapabilities&) 
	  //Substituted var name, attributions html, params, and url below, using info on the GetCapabilities file.  
var New_Mexico_Faults = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'U.S. Geological Survey Mineral Resources Program'
		}),
		params: {'LAYERS':'New_Mexico_Faults','FORMAT':'image/png','TRANSPARENT':'true'},
		url: 'https://mrdata.usgs.gov/services/nm?',
		projection: projection
	})
})

var Colorado_Faults = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'U.S. Geological Survey Mineral Resources Program'
		}),
		params: {'LAYERS':'Colorado_Faults','FORMAT':'image/png','TRANSPARENT':'true'},
		url: 'https://mrdata.usgs.gov/services/co?',
		projection: projection
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
		New_Mexico_Faults,
		Colorado_Faults,
		azfaults_kml,
		utfaults_kml,
		volcanoes_geoms
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


//KML layers source: https://www.census.gov/geo/maps-data/data/kml/kml_blkgrp.html
//Geology layers sources: https://mrdata.usgs.gov/geology/state/