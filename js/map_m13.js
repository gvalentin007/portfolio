//MAP_M13.JStrial1

//PROJECTION

var projection = ol.proj.get('EPSG:3857');

//STYLES

var stroke_black = new ol.style.Stroke({color: 'black', width: 2});
var fill_red = new ol.style.Fill({color: 'red'});


var style_red = new ol.style.Style({
          image: new ol.style.RegularShape({
            fill: fill_red,
            stroke: stroke_black,
            points: 3,
            radius: 10,
            rotation: Math.PI / 4,
            angle: 0
          })
        })


//LAYER OBJECTS - WMSs from http://mapper.internetmapping.net (Class GeoServer)

var NativeAmericanArea = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'RGIS, New Mexico'
		}),
		params: {'LAYERS':'gvalentin_workspace:gv_tl_2015_nm_aiannh','TRANSPARENT':'true'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var FireHistoryNM = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'RGIS, New Mexico'
		}),
		params: {'LAYERS':'gvalentin_workspace:gv_wildfire_perim_1911_2014','TRANSPARENT':'true'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var NMcounties = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'Karl Benedict, University of New Mexico'
		}),
		params: {'LAYERS':'gvalentin_workspace:gv_2007fe_35_county00','TRANSPARENT':'true'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var NMroads = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'RGIS, New Mexico'
		}),
		params: {'LAYERS':'gvalentin_workspace:gv_nmroad_centerlines_march_2016','TRANSPARENT':'true'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var NMbridges = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'RGIS, New Mexico'
		}),
		params: {'LAYERS':'gvalentin_workspace:gv_nbi_nm','TRANSPARENT':'true'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var NMbridges_fire = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'RGIS, New Mexico'
		}),
		params: {'LAYERS':'gvalentin_workspace:gv_nbi_nm_fire','TRANSPARENT':'true'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var NMPopAreas = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'RGIS, New Mexico'
		}),
		params: {'LAYERS':'gvalentin_workspace:gv_GNIS_PopulatedPlaces_2016','TRANSPARENT':'true'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var NMPopAreas_Fire = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'RGIS, New Mexico'
		}),
		params: {'LAYERS':'gvalentin_workspace:gv_GNIS_PopulatedPlaces_2016_fire3km','TRANSPARENT':'true'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/ows?SERVICE=WMS&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})


//BASEMAP

var OSM_basemap = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ]
});


//MAP

var myMap = new ol.Map({
	target: 'map_canvas',
	layers: [
		OSM_basemap,
		//NMroads,
		NativeAmericanArea,
		FireHistoryNM,
		NMcounties,
		//NMbridges,
		NMbridges_fire,
		//NMPopAreas,
		NMPopAreas_Fire
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.014260, 36.034214]),
		zoom: 8
	}),
	controls: ol.control.defaults().extend([
		new ol.control.ScaleLine()
	]),
	
});

