import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';

const DEFAULT_LATITUDE = 40.40;
const DEFAULT_LONGITUDE = 116.45;

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.onMapClick = this.onMapClick.bind(this);
  }
  componentDidMount () {
    const map = this.map = L.map('minimap').setView([DEFAULT_LATITUDE-0.505, DEFAULT_LONGITUDE-0.09], 12);
    // this.map = map;
    this.setState({ map: map });
    const baseTileLayer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png', {
      maxZoom: 15,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    }).addTo(map);
    const polygon = L.polygon([
        [DEFAULT_LATITUDE-0.509, DEFAULT_LONGITUDE-0.08],
        [DEFAULT_LATITUDE-0.503, DEFAULT_LONGITUDE-0.06],
        [DEFAULT_LATITUDE-0.51, DEFAULT_LONGITUDE-0.047]
    ]).addTo(map);
    const circle = L.circle([DEFAULT_LATITUDE-0.508, DEFAULT_LONGITUDE-0.11], 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).addTo(map);
    const marker = L.marker([DEFAULT_LATITUDE-0.5, DEFAULT_LONGITUDE]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");

    map.on('click', this.onMapClick);
  }
  componentWillUnmount () {
      this.map.off('click', this.onMapClick);
      this.map = null;
  }
  onMapClick (e) {
      L.popup()
        .setLatLng(e.latlng)
        .setContent("You clicked the map at: " + e.latlng.toString())
        .openOn(this.map);

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
