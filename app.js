const map = L.map('map').setView([36.215, -81.678], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:'© OSM'
}).addTo(map);
// Test layer: shows one marker with a popup
fetch('/Users/colebossert/Documents/GitHub/high-country-map/data/point.geojson')
  .then(r => r.json())
  .then(geo => {
    L.geoJSON(geo, {
      onEachFeature: (f, l) =>
        l.bindPopup(f.properties.title || 'No title')
    }).addTo(map);
  });
  fetch('data/skiing.geojson')
  .then(r => r.json())
  .then(geo => {
    L.geoJSON(geo, {
      pointToLayer: (_, latlng) =>
        L.circleMarker(latlng, { radius:6, color:'#FF7000' }),
      onEachFeature: (f,l) => l.bindPopup(f.properties.name || 'Brewery')
    }).addTo(map);
  });