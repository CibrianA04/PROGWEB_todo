let elemento = document.querySelector('#elemento');
let agregar=document.querySelector('#agregar');
let listar=document.querySelector('#listadinamica');
elemento.focus();

agregar.addEventListener("click", () => {
    if(elemento.value.trim()!="") {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.innerText = elemento.value;
    listar.appendChild(nuevoElemento);
    elemento.value = "";
    elemento.focus();
    }
});

elemento.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        agregar.click();
    }
});


//arrastrar y soltar
let arrastra = document.querySelector('#arrastra');
let zonasoltar = document.getElementById('zonasoltar');
let texto = document.querySelector('.texto');

arrastra.addEventListener("dragstart",function(e){
    this.style.border="5px solid red";
});

zonasoltar.addEventListener("dragover",function(e){
    //zonasoltar olvida que no se pueden
    //arrastrar elementos sobre el
    event.preventDefault();
});
zonasoltar.addEventListener("drop",function(e){
    arrastra.style.border="none";
    texto.style.display="none";
    this.append(arrastra);

});
zonainicial.addEventListener("dragover",function(e){
    //zonasoltar olvida que no se pueden
    //arrastrar elementos sobre el
    event.preventDefault();
});
zonainicial.addEventListener("drop",function(e){
    arrastra.style.border="none";
    texto.style.display="none";
    this.append(arrastra);

});
