// Create map
const map = L.map('mapid').setView([-27.2233265,-49.6479735], 15);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "./public/imgs/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

// Create popup overlay  
const popup = L.popup({
  closeButton: false, 
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage" > <img src="./public/imgs/arrow-white.svg" ></a>')

// Create and add marker 
L
.marker([-27.2233265,-49.6479735], { icon })
.addTo(map)
.bindPopup(popup);