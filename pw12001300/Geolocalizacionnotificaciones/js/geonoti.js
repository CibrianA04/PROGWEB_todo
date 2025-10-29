let info=document.querySelector('#info');
const obtenerUbicacion = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.latitude;
        info.textContent="Latitud: "+lat+" - longitud: "+lon;
        notificar();
    }, function error(error) {
        console.log(`ERROR: ${error.message}`);
    });
}
let boton = document.querySelector("#ubicacion");
boton.addEventListener("click", () => {
    obtenerUbicacion();
});

//notificaciones
const notificar = () => {
    Notification.requestPermission()
    .then(permission => {
        if(permission=="granted"){
            new notification("Coordenadas obtenidas");
        }
    })
}