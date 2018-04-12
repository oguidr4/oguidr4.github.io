let mywebmap = L.map('webmap').setView([38, -98], 4)
let myLightmap1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mywebmap)

let myfirstmap = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}')
let myWatercolormap2 = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'png'
});

let myBasemaps = {
  'Light Basemap': myLightmap1,
  'Green Basemap': myfirstmap,
  'Water Color Basemap': myWatercolormap2
}

L.control.layers(myBasemaps).addTo(mywebmap)

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
