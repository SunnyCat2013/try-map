import React from 'react';
import ReactDOM from 'react-dom';
// import cityCoords from '../../../data/city_coords';
// import { pm, cityCoords }from '../../../data/city';
import cityGeoJSON from '../../dataTranslator';

import L from 'leaflet';
// import L from '../../leaf-baidu/BaiduLayer.js';

const DEFAULT_LATITUDE = 40.40;
const DEFAULT_LONGITUDE = 116.45;

// const CITY_COORDS = '../../../data/city_coords.json';
// const CITY_PM = '../../../data/pm.json';

const myLines = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];

const myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};


class MadaMap extends React.Component {
  constructor () {
    super();
  }

  componentDidMount () {
    // const map = new L.map(
    //   'map',
    //   {
    //     'crs': L.CRS.BEPSG3857,
    //   }
    // );
    const map = L.map('map');
    map.setView([DEFAULT_LATITUDE, DEFAULT_LONGITUDE], 6);
    // L.control.scale().addTo(map);
    // const baiduLayer = new L.TileLayer.BaiduLayer();
    // map.addLayer(baiduLayer);
    const baseTileLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png', {
      maxZoom: 15,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(map);
    // const pm = readTextFile(CITY_PM);
    // console.log(JSON.stringify(cityGeoJSON()));
    const geoJSON = cityGeoJSON();
    L.geoJson(geoJSON).bindPopup((layer) => {
      return layer.feature.properties.name;
    })
    .addTo(map);
    L.geoJson(myLines, {
      style: myStyle
    }).addTo(map);

  }


  render () {
    return (
      <div id="mada-map">
        I am MadaMap!
      </div>
    );
  }
}

export { MadaMap };
