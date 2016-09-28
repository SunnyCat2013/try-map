import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';

class LeafletMap extends Component {
  // componentDidMount () {
  //   let mymap = L.map('mapid').setView([51.505, -0.09], 13);
  // }
  componentDidMount () {
    const map = L.map('minimap').setView([51.505, -0.09], 1);
    const baseTileLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png', {
      maxZoom: 15,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(map);
    const polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(map);
    const circle = L.circle([51.508, -0.11], 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).addTo(map);
    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");

    map.on('click', this.onMapClick);
    map.fitWorld();
  }
  componentWillUnmount () {
      this.map.off('click', this.onMapClick);
      this.map = null;
  }
  onMapClick () {
      // Do some wonderful map things...
  }
  render () {
    return (
      <div id="minimap">
        leaflet.
      </div>
    );
  }
}


console.log('test succeed~');
ReactDOM.render(
  <LeafletMap />,
  document.getElementById('mapid')
);
