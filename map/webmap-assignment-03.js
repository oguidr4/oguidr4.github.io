let mywebmap = L.map('webmap').setView([30.414379, -91.180100], 14)

L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(mywebmap)

let ParadeGrounds = L.marker([30.414508, -91.177783]).addTo(mywebmap)
ParadeGrounds.bindPopup('Parade Grounds')

let TigerStadium = L.icon({
  iconUrl: 'eyeofthetiger.png',
  iconSize: [51.2, 35.55], // size of the icon
  iconAnchor: [25, 20], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
})

let StadiumMarker = L.marker([30.411982, -91.183697], {icon: TigerStadium}).addTo(mywebmap)
StadiumMarker.bindPopup('Death Valley')

let polygonstyle = {
  color: 'purple',
  weight: 1
}

let polygoncoordinates = [
  [30.416822, -91.187096],
  [30.416822, -91.166983],
  [30.406727, -91.166983],
  [30.406727, -91.187096]
]

let polygon = L.polygon(polygoncoordinates, polygonstyle).addTo(mywebmap);
polygon.bindPopup('Louisiana State University')
