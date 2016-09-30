import React from 'react';
import ReactDOM from 'react-dom';

// import L from '../../leaf-baidu/BaiduLayer.js';

const DEFAULT_LATITUDE = 40.40;
const DEFAULT_LONGITUDE = 116.45;

class MadaMap extends React.Component {
  constructor () {
    super();
  }

  componentDidMount () {
    const map = new L.map(
      'map',
      {
        'crs': L.CRS.BEPSG3857,
      }
    );

    map.setView([DEFAULT_LATITUDE, DEFAULT_LONGITUDE], 13);
    L.control.scale().addTo(map);
    const baiduLayer = new L.TileLayer.BaiduLayer();
    map.addLayer(baiduLayer);
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
