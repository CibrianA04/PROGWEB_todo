const url = 'https://randomuser.me/api/';

const nombre = document.querySelector('#nombre');
const foto = document.querySelector('#foto');
const direccion = document.querySelector('#direccion');
const telefono = document.querySelector('#telefono');
const boton = document.querySelector('#button');

const obtenerPersona = () => {
    fetch(url) 
    .then( respuesta => respuesta.json() )
    .then(respuesta => {
        //console.log(respuesta);
        respuesta.results.forEach(persona => {
            nombre.textContent = persona.name.first+' '+persona.name.last;
            foto.setAttribute('src', persona.picture.large);
            direccion.textContent = persona.location.street.name;
            telefono.textContent = persona.phone;
        });
    });
}
obtenerPersona();
