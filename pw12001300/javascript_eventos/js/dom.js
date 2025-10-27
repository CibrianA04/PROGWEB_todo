let titulo = document.getElementById("titulo");
//let titulo=document.querySelector("#titulo");
console.log(titulo);
let principal=document.querySelector(".principal");
console.log(principal);
let lista=document.querySelectorAll("ul.lista > li");
console.log(lista);

titulo.innerText="Estructurando el DOM VB";
titulo.innerHTML="<em>Nuevo DOM VB</em>";

let foto=document.querySelector("img");
foto.setAttribute("src","img/logo_javascript2.png");
foto.classList.add("foto_cambio");

principal.style.backgroundColor="#FFF0D4";

let extra=document.querySelector(".extra");
document.body.removeChild(extra);

let nuevoarticle=document.createElement("article"); 
nuevoarticle.innerText="Nuevo artículo JS";
nuevoarticle.style.color="white";
nuevoarticle.style.backgroundColor="purple";
nuevoarticle.style.padding="20px";
document.body.appendChild(nuevoarticle);

let boton=document.querySelector("button");
//boton.addEventListener("click", () => {
//    alert("¡Hola! Has hecho clic en el botón.");
//});

muestraMensaeje = (mensaje) => {
    alert(mensaje);
} 
boton.addEventListener("click", muestraMensaeje.bind(null,"aqui"));