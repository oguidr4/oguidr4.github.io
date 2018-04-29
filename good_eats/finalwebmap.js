let mywebmap = L.map('webmap').setView([30.411476, -91.176141], 13)

let mybasemap1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mywebmap)
  let mybasemap2 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png')
  let mybasemap3 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')

  let myMapOptions = {
  'Basic': mybasemap1,
  'Grey': mybasemap2,
  'Satellite': mybasemap3
  }

  L.control.layers(myMapOptions).addTo(mywebmap)

var circle = L.circle([30.411476, -91.176141], {
    color: 'red',
    fillOpacity: 0,
    radius: 3450
}).addTo(mywebmap);
circle.bindPopup('This circle represents a 2 mile radius from the center of campus.')

function IconStyle(feature, latlng) {
  switch (feature.properties["Name"]) {
    case "BurgerSmith":
      var BurgerSmithIcon = new L.icon({
        iconUrl: 'logos/BurgerSmith.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: BurgerSmithIcon});
    case "Raising Cane's Chicken Fingers":
      var CanesIcon = new L.icon({
        iconUrl: 'logos/Canes.png',
        iconSize: [90, 43.2],
        iconAnchor: [45, 21.6]
      });
      return L.marker(latlng, {icon: CanesIcon});
    case "Chipotle":
      var ChipotleIcon = new L.icon({
        iconUrl: 'logos/Chipotle.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: ChipotleIcon});
    case "City Pork":
      var CityPorkIcon = new L.icon({
        iconUrl: 'logos/CityPork.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: CityPorkIcon});
    case "Fat Cow":
      var FatCowIcon = new L.icon({
        iconUrl: 'logos/FatCow.png',
        iconSize: [90, 64.2],
        iconAnchor: [45, 32.1]
      });
      return L.marker(latlng, {icon: FatCowIcon});
    case "Five Guys":
      var FiveGuysIcon = new L.icon({
        iconUrl: 'logos/Five-Guys.png',
        iconSize: [77.5, 43.6],
        iconAnchor: [38.75, 21.8]
      });
      return L.marker(latlng, {icon: FiveGuysIcon});
    case "Fuzzy's Taco Shop":
      var FuzzysIcon = new L.icon({
        iconUrl: 'logos/Fuzzys.jpg',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: FuzzysIcon});
    case "Izzo's Illegal Burrito":
      var IzzosIcon = new L.icon({
        iconUrl: 'logos/Izzos.png',
        iconSize: [90, 60],
        iconAnchor: [45, 30]
      });
      return L.marker(latlng, {icon: IzzosIcon});
    case "Jimmy John's":
      var JJIcon = new L.icon({
        iconUrl: 'logos/JimmyJohns.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: JJIcon});
    case "Lit Pizza":
      var LitIcon = new L.icon({
        iconUrl: 'logos/LitPizza.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: LitIcon});
    case "Louie's Cafe":
      var LouiesIcon = new L.icon({
        iconUrl: 'logos/Louies.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: LouiesIcon});
    case "Mellow Mushroom":
      var MellowIcon = new L.icon({
        iconUrl: 'logos/MellowMushroom.png',
        iconSize: [90, 54],
        iconAnchor: [45, 27]
      });
      return L.marker(latlng, {icon: MellowIcon});
    case "Pita Pit":
      var PPIcon = new L.icon({
        iconUrl: 'logos/PitaPit.png',
        iconSize: [90, 78],
        iconAnchor: [45, 39]
      });
      return L.marker(latlng, {icon: PPIcon});
    case "Plucker's Wing Bar":
      var PluckersIcon = new L.icon({
        iconUrl: 'logos/Pluckers.png',
        iconSize: [90, 50],
        iconAnchor: [45, 25]
      });
      return L.marker(latlng, {icon: PluckersIcon});
    case "Salad Shop":
      var SaladIcon = new L.icon({
        iconUrl: 'logos/SaladShop.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: SaladIcon});
  }
}

function mygeojsonPopup (feature, layer) {
  let name = feature.properties["Name"]
  let type = feature.properties["Type"]
  let offers = feature.properties["Special_Offers"]
  let popup = 'Name: ' + name + '<br>Type: ' + type + '<br>Special Offers: ' + offers
  if (offers === "None") {popup = 'Name: ' + name + '<br>Type: ' + type}
  layer.bindPopup(popup)
}

let myLayerOptions = {
  pointToLayer: IconStyle,
  onEachFeature: mygeojsonPopup
  }

L.geoJSON(restaurantdata, myLayerOptions).addTo(mywebmap)
