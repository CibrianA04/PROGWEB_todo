document.write(" <h1> Programacion web </h1>");
console.log("hacia la consola");
//console.error("Lanza un error");
let x = 1; //debilmente tipado 
console.log(x);
console.log(typeof(x));
/* tipos de datos:
    Undefined
    Boolean
    Number
    String
    BigInt
    Symbol
    Null
    Object
    Function 
*/ 
let esPw = true;

if (esPw){
    console.log("Estamos en clase");
}else{
    console.log("no estamos en clase");
}
let numero = 1421421.421;
console.log(numero);
//cadenas strings
let cadena = "una 'cadena' ";
let cadena2 = 'una "cadena"' + numero ;
let cadena3 = `una cadena
con mas de una linea y puedo agregar
interpolacion de variables, ejemplo: numero ${numero}`;
console.log(cadena3);
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1)
let usuario={nombre:"Martin", [id1]: 48}
console.log(`${usuario.nombre} ${usuario[id1]}`);

let variablesnulas = null;
console.log(variablesnulas);

const PI = 3.141592;
console.log(PI);

//ARREGLOS
let arreglo = [];
console.log(arreglo);
arreglo=[1,2,3];
console.log(arreglo);
arreglo.push(4);
console.log(arreglo);
arreglo.pop();
console.log(arreglo);
//sacar el primer elemento del arreglo
arreglo.shift();
console.log(arreglo);
//agregar un elemento a la primera posicion
arreglo.unshift(10);
console.log(arreglo);

let objeto = {nombre:"Martin", edad:48}
console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));

