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

//MAP

//PROJECTION

var projection = ol.proj.get('EPSG:4326');


//LAYER OBJECTS - WMSs from http://mapper.internetmapping.net (Class GeoServer)

var tif_A5 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'Karl Benedict, UNM'
		}),
		params: {'LAYERS':'	gvalentin_workspace:gv_35106-A5','TRANSPARENT':'true'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/gvalentin_workspace/wms?version=1.1.1&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var tif_A6 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'Karl Benedict, UNM'
		}),
		params: {'LAYERS':'gvalentin_workspace:gv_35106-A6','TRANSPARENT':'true'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/gvalentin_workspace/wms?version=1.1.1&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})


var contours_A5 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'Karl Benedict, UNM'
		}),
		params: {'LAYERS':'gvalentin_workspace:gv_35106-A5_CONT','TRANSPARENT':'true'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/gvalentin_workspace/wms?version=1.1.1&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var contours_A6 = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'Karl Benedict, UNM'
		}),
		params: {'LAYERS':'gvalentin_workspace:gv_35106-A6_CONT','TRANSPARENT':'true'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/gvalentin_workspace/wms?version=1.1.1&',
		serverType: 'geoserver',
		projection: projection,
		format: new ol.format.KML({
			extractStyles:false
		})
	})
})

var roads = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'Karl Benedict, UNM'
		}),
		params: {'LAYERS':'	gvalentin_workspace:gv_tgr2006se_bern_lka','TRANSPARENT':'true'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/gvalentin_workspace/wms?version=1.1.1&',
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

var map = new ol.Map({
	target: 'map_canvas',
	layers: [
		OSM_basemap,
		tif_A5,
		tif_A6,
		contours_A5,
		contours_A6,
		roads		
		
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.634846, 35.073015]),
		zoom: 12
	}),
	controls: ol.control.defaults().extend([
		new ol.control.ScaleLine()
	]),
	
});

