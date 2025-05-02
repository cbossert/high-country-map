const map = L.map('map').setView([36.215, -81.678], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:'© OSM'
}).addTo(map);
