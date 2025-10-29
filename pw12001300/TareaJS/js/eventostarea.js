let imagenes = document.querySelectorAll('.draggable');
let zonas = document.querySelectorAll('.contenedor1, .contenedor2'); 
let arrastra = null;

imagenes.forEach(img => {
    img.addEventListener("dragstart", function(e){
        arrastra = this;
        this.style.border = "5px solid red";
    });
    img.addEventListener("dragend", function(e){
        this.style.border = "none";
    });
});

function allowDrop(e){
    e.preventDefault();
}

function handleDrop(e){
    e.preventDefault();
    if (arrastra) {
        this.appendChild(arrastra);
        arrastra.style.border = "none";
        arrastra = null;
    }
}

zonas.forEach(zone => {
    zone.addEventListener("dragover", allowDrop);
    zone.addEventListener("drop", handleDrop);
});