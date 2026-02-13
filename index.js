(function () {
    const api = window.SubwayBuilderAPI;
    const LOG = '[TLV Mod]';

    if (!api) {
        console.error(LOG, 'SubwayBuilderAPI not found!');
        return;
    }


    // 1. Register city and tab
    api.registerCity({
        name: 'Tel Aviv',
        code: 'TLV',
        description: 'Tel Aviv',
        population: 6500000,
        initialViewState: {
            zoom: 11.5,
            latitude: 32.07585,
            longitude: 34.79237,
            bearing: 0
        },
    });

    // 2. Set tile URLs
    api.map.setTileURLOverride({
        cityCode: 'TLV',
        tilesUrl: 'http://127.0.0.1:8080/TLV/{z}/{x}/{y}.mvt',
        foundationTilesUrl: 'http://127.0.0.1:8080/TLV/{z}/{x}/{y}.mvt',
        maxZoom: 15
    });

    // 3. Configure layers
    api.map.setLayerOverride({
        layerId: 'parks-large',
        sourceLayer: 'landuse',
        filter: ['==', ['get', 'kind'], 'park']
    });

    window.SubwayBuilderAPI.map.setLayerOverride({
    layerId: 'airports',
    sourceLayer: 'landuse',
    filter: ['==', ['get', 'kind'], 'aerodrome'],
    });

    // 4. Set data files
    api.cities.setCityDataFiles('TLV', {
        buildingsIndex: '/data/TLV/buildings_index.json.gz',
        demandData: '/data/TLV/demand_data.json.gz',
        roads: '/data/TLV/roads.geojson.gz',
        runwaysTaxiways: '/data/TLV/runways_taxiways.geojson.gz'
    });

    // 5. Disable missing layers
    api.map.setDefaultLayerVisibility('TLV', {
        buildingFoundations: false,
        oceanFoundations: false
    });

    // in-game notification 
    api.hooks.onCityLoad((cityCode) => {
        if (cityCode === 'TLV') {
            api.ui.showNotification('loaded modded TLV');
        }
    });

    console.log(LOG, 'TLV mod loaded successfully!');
})();
