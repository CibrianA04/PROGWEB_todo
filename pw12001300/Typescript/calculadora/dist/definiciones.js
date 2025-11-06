"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numeros = 101;
numeros = 102;
let arreglosnumeros = [1, 2, 3, 5];
arreglosnumeros = [1, 2, 3, 5];
let arreglosstring;
arreglosstring = ["sssss", "aaaa", "algo"];
let decisiones;
decisiones = false;
let arreglosbooleanos;
arreglosbooleanos = [true, false, true];
function info(a, b, c, d) {
    console.log(a + " " + b + " " + c + " " + (d == undefined ? '-' : d));
}
info(1, 'cadena', false, 200);
var TipoUsuario;
(function (TipoUsuario) {
    TipoUsuario[TipoUsuario["administrador"] = 0] = "administrador";
    TipoUsuario[TipoUsuario["moderador"] = 1] = "moderador";
    TipoUsuario[TipoUsuario["invitado"] = 2] = "invitado";
})(TipoUsuario || (TipoUsuario = {}));
function usuarios(usuario) {
    console.log(usuario.nombre + " " + usuario.tipo + " " + usuario.autoriza + " " + (usuario.ip == undefined ? '-' : usuario.ip));
}
usuarios({ nombre: "alonso", tipo: TipoUsuario.administrador, autoriza: true });
usuarios({ nombre: "jose",
    tipo: TipoUsuario.moderador,
    autoriza: true,
    ip: "192.168.10.1" });
let tiempo = 76_000_000;
let animal = "dinosaurio";
let extinto = true;
let mivariable;
mivariable = "cadena";
mivariable = 10;
let animales = ['perrro', 'gato', 'tigre'];
let numeros1 = [1, 2, 3, 4, 5];
let atributos = [];
let numeros2 = [];
let tupla = [1, "cadena",];
tupla.push(123);
let tupla2 = [2, ["cadena1", "cadena2", "cadena3"]];
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';
var Talla1;
(function (Talla1) {
    Talla1[Talla1["chica"] = 1] = "chica";
    Talla1[Talla1["mediana"] = 2] = "mediana";
    Talla1[Talla1["grande"] = 3] = "grande";
    Talla1[Talla1["extragrande"] = 4] = "extragrande";
})(Talla1 || (Talla1 = {}));
;
var Talla;
(function (Talla) {
    Talla["chica"] = "s";
    Talla["mediana"] = "m";
    Talla["grande"] = "l";
    Talla["extragrande"] = "xl";
})(Talla || (Talla = {}));
;
const tallaGrande = Talla.grande;
console.log("Talla: " + tallaGrande);
var EstadoCargaPagina;
(function (EstadoCargaPagina) {
    EstadoCargaPagina[EstadoCargaPagina["Siniciar"] = 0] = "Siniciar";
    EstadoCargaPagina[EstadoCargaPagina["Cargando"] = 1] = "Cargando";
    EstadoCargaPagina[EstadoCargaPagina["Exito"] = 2] = "Exito";
    EstadoCargaPagina[EstadoCargaPagina["Error"] = 3] = "Error";
})(EstadoCargaPagina || (EstadoCargaPagina = {}));
const estado = EstadoCargaPagina.Exito;
//# sourceMappingURL=definiciones.js.map