//Tipos de dados
//String "" 
//Number 01 
//Object()
//Boolean true or false
//Array []
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl:false
}

//get values from html 
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map('mapid', options).setView([lat,lng], 15);

//Create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

//Create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


//Create and add marker
L.marker([lat,lng], {icon}).addTo(map)

 /* Image gallery */

 function selectImage(event){
    const button = event.currentTarget;

    //Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    // Essa seta ((button) => {}) significa arrow function, é uma forma mais curta de escrever o function

    function removeActiveClass(button){
        button.classList.remove("active");
    }

    //Selecionar a imagem clicada 

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //Atualizar o container de imagem (a imagem grande)

    imageContainer.src = image.src

    //Adicionar a classe .active para este botao
    button.classList.add("active");
 }
