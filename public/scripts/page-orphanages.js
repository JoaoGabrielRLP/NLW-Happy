//Tipos de dados
//String "" 
//Number 01 
//Object()
//Boolean true or false
//Array []

const map = L.map('mapid').setView([-27.2058303,-49.623216], 15);

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

function addMarker({id, name, lat, lng}){
    //Create pop up overlay
    const popup = L.popup({
        closeButton: false,
        className:'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg" </a> `)

    //Create and add marker
    L
    .marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id, 
        name: span.dataset.name, 
        lat: span.dataset.lat, 
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})

