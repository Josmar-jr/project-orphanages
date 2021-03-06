const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create map
const map = L.map('mapid', options).setView([-27.2233265,-49.6479735], 15);

// Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "/imgs/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

// Create and add marker 
L
.marker([-27.2233265,-49.6479735], { icon })
.addTo(map)

// image gallery
function selectImage(event) {
  const button = event.currentTarget

  console.log(button.children)

  // remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
    button.classList.remove("active")
  }

  // selecionar a imagem clicada 
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  // atualizar o container de imagem
  imageContainer.src = image.src
  // adicionar a classe .active para este botão 
  button.classList.add('active')
}