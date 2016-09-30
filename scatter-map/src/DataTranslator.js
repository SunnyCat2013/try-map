import { pm, cityCoords }from '../data/city';
import _ from 'lodash';
function cityGeoJSON () {
  const geoJSON = _.map(pm, p => {
    const cityName = p.name;
    const cityCoord = cityCoords[cityName];
    const pmValue = p.value;
    return {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": cityCoord
      },
      "properties": {
        "name": cityName,
        "value": pmValue
      }
    }
  });
  return geoJSON;
}

export default cityGeoJSON;
