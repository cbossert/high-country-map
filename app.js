const map = L.map('map').setView([36.215, -81.678], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:'© OSM'
}).addTo(map);
// Test layer: shows one marker with a popup
fetch('data/point.geojson')
  .then(r => r.json())
  .then(geo => {
    L.geoJSON(geo, {
      onEachFeature: (f, l) =>
        l.bindPopup(f.properties.title || 'No title')
    }).addTo(map);
  });