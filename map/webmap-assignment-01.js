let mywebmap = L.map('webmap').setView([30.414379, -91.180100], 14)

L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(mywebmap)

let ParadeGrounds = L.marker([30.414508, -91.177783]).addTo(mywebmap)
ParadeGrounds.bindPopup('Parade Grounds')

let polygon = L.polygon([
  [30.416822, -91.187096],
  [30.416822, -91.166983],
  [30.406727, -91.166983],
  [30.406727, -91.187096]
], {color: 'purple'}).addTo(mywebmap);
polygon.bindPopup('Louisiana State University')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
mywebmap.on('click', logCurrentCoordinates)

let polyline1 = L.polyline([
  [30.411577, -91.174366],
  [30.411970, -91.183758]
], {color: 'yellow'}).addTo(mywebmap)
