let map = L.map("map").setView([45.1905961,5.7245531], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

//le "pointeur" sur la carte
L.marker([45.1905961,5.7245531]).addTo(map)
    .bindPopup('Téléphérique Grenoble.<br>')
    .openPopup();

//carte 2
let map2 = L.map("map2").setView([45.1929551,5.6560602], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

//le "pointeur" sur la carte
L.marker([45.1929551,5.6560602]).addTo(map)
    .bindPopup('Le Fort de la Bastille.<br>')
    .openPopup();

//carte 3
let map3 = L.map("map3").setView([45.1853531,5.6665872], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

//le "pointeur" sur la carte
L.marker([45.1853531,5.6665872]).addTo(map)
    .bindPopup('Le parc Mistral<br> et la tour Perret !')
    .openPopup();