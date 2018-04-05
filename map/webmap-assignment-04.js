let mywebmap = L.map('webmap').setView([38, -98], 4)
L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(mywebmap)

mygeojsonStyle = function (feature1) {
  let popmales = feature1.properties.MALES
  let popfemales = feature1.properties.FEMALES
  let featurecolor = 'pink'
  if (popmales > popfemales) {featurecolor = 'blue'}
  let mygeojsonStyle = {
      color: featurecolor,
      weight: 1,
      fillOpacity: 0.2
    }
    return mygeojsonStyle
  }

  function mygeojsonPopup (feature1, layer) {
    let name = feature1.properties.STATE_NAME
    let popmales = feature1.properties.MALES
    let popfemales = feature1.properties.FEMALES
    layer.bindPopup('Population of males in ' + name + ' is ' + popmales +'.<br>Population of females in ' + name + ' is ' + popfemales + '.')
  }

mygeojsonOptions = {
  style: mygeojsonStyle,
  onEachFeature: mygeojsonPopup
}

L.geoJSON(statedata, mygeojsonOptions).addTo(mywebmap)
