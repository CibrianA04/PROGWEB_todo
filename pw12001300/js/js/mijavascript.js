/* /* document.write(" <h1> Programacion web </h1>");
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

alert("Hola mundo");
let edad=prompt("Ingrese su edad", 0);
console.log(edad);

let variable = "valor";
const CONSTANTE = "VALOR";
function miFuncion(a = 2){
  return a+2;
}
console.log(miFuncion());
const functionFlecha = (a = 10) =>  {
    return a+2;
}
console.log(functionFlecha(7)); 

//destructuring - destructurar
//objetos
const usuarios = {
    nombre: "Martin",
    apellido: "Nevares"
}
//let nombre = usuarios.nombre;
//let apellido = usuarios.apellido;
let {nombre, apellido} = usuarios;
console.log(nombre + " " + apellido);
//otro objeto
const usuarios2 = {
    nombre2: "Alonso",
    apellido2: "Cibrian",
    redes: {
        sociales: {
            twitter: "@alcibrian",
            facebook: "alonsoface"
        }
    }
}
//const face = usuarios2.redes.sociales.facebook;
//const { twitter, facebook} = usuarios2.redes.sociales;
//console.log(twitter + " " + facebook);
const { redes: { sociales: { twitter, facebook } } } = usuarios2;
console.log(twitter + " " + facebook);
//arreglos
const arregloNombres = ["Martin", "Alonso", "Vix"];
//let nombre1 = arregloNombres[0];
//let nombre3 = arregloNombres[2];
const [nombre1, , nombre3] = arregloNombres;
console.log(nombre1 + " " + nombre3);
const usuarios3 = {
    direccion: "Calle Falsa 123",
    numerocasa: 456
}
//propagacion de campos
const nuevoObjeto ={...usuarios2, ...usuarios3};
console.log(nuevoObjeto);

//arreglos
const arregloApellidos = ["Perez", "Cibrian", "Ramos"];
const nuevoArreglo = [...arregloNombres, ...arregloApellidos];
console.log(nuevoArreglo);
const otroNuevoArreglo = arregloNombres.concat(arregloApellidos);
console.log(otroNuevoArreglo);

//Foreach, for, map, reduce <--- iterar arreglos
for (let i = 0; i < nuevoArreglo.length; i++){
    console.log(nuevoArreglo[i]);
}
nuevoArreglo.forEach(function(nombre){
    console.log(nombre);
});

let numeros = [1,2,3,4,5];
let suma = 0; // Declarar la variable suma
numeros.forEach(function(numero){
    suma += numero;
}); 
console.log(suma);

//map
let precios = [100,200,300,400,500];
const Conversion = 0.85; 
let preciosNuevos = precios.map(function(precio){ 
    return precio * Conversion;
});
console.log(preciosNuevos); 

//reduce
let sumaNumeros = precios.reduce(function(suma,precio){
    return suma + precio;
}, 0);
console.log(sumaNumeros);

//clases
class Animal {
    constructor(nombre){
        this.nombre = nombre;

    } 
    hablar(){
        console.log(`este ${this.nombre} hace un ruido`);
    }  
} 
class Perro extends Animal {
    hablas(){
        console.log(`el perro ${this.nombre} ladra`);
    }
}
const perro = new Perro("Candy");
perro.hablar();
 */

//Closures
const variablefunction = function(){
    return "hola";
}
console.log(variablefunction());

const saludo = "Hola";
function externa(){
    const persona = "Martin";
    function interna(){
        const fin = "!!!";
        return saludo + " " + persona + fin;
    }
    return interna;
}
console.log(externa()()); 
const closure = externa(); 
console.log(closure());
//otro ejemplo
const micontador = (function(){ //clase pero no es clase 
    let contador = 0;
 function incrementar(){
        return ++contador;
    }

function decrementar(){
    return --contador;
}   
function valor(){
    return contador;
}
return {
    incrementar,
     decrementar,
    valor
}
})(); // ejecuta rla funcion principal
console.log(micontador);
micontador.incrementar();
micontador.incrementar();
console.log(micontador.valor());
micontador.decrementar();
console.log(micontador.valor());


//Promesas
//paginas dinamicas: acceso a datos internos y externos
// kb <---- externas, internas -----> mb o gb
let datos = [
    {
        id: 1,
        materia: "Programacion web",
        semestre: 6
    },
    {
        id: 2,
        materia: "Base de datos",
        semestre: 6
    },
    {
        id: 3,
        materia: "Redes",
        semestre: 5
    }
];
//datos = [];
//console.log(datos);
//funcion que simula obtener datos de un servidor remoto
const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error("No hay datos disponibles"));
        }
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    });
}
//funcion async debe esperar a que termine de obtener los datos
async function procesarDatos(){
try{
    const midatos = await obtenerDatos();
    console.log(midatos);
}
catch(err)
{
    console.log(err.message); 
}
}
//console.log(obtenerDatos());
procesarDatos();