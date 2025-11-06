let numeros: number = 101;
numeros = 102;
let arreglosnumeros: number[] = [1, 2, 3, 5];
arreglosnumeros = [1, 2, 3, 5];
let arreglosstring: string[];
arreglosstring = ["sssss", "aaaa", "algo"];
let decisiones: boolean;
decisiones = false;
let arreglosbooleanos: boolean[];
arreglosbooleanos = [true, false, true]; 
function info(a:number, b:string, c:boolean, d?:number):void {
    console.log(a+" "+b+" "+c + " " + (d== undefined ? '-' : d));
}
info(1,'cadena',false,200);

enum TipoUsuario {
    administrador,
    moderador,
    invitado
}
//export type 
type Usuario = {
    nombre:string, tipo:TipoUsuario, autoriza: boolean
}
type UsuarioRedes = Usuario & {
    ip? : string;
}
function usuarios(usuario: UsuarioRedes):void {
    console.log(usuario.nombre + " " + usuario.tipo + " " + usuario.autoriza + " " + (usuario.ip == undefined ? '-' : usuario.ip));
}
usuarios({nombre: "alonso", tipo: TipoUsuario.administrador, autoriza: true});
usuarios({nombre: "jose", 
            tipo: TipoUsuario.moderador, 
            autoriza: true, 
            ip: "192.168.10.1"});



//tiempo que solo existen en TS
let tiempo:number = 76_000_000; //76 mil millones
let animal:string = "dinosaurio";
let extinto: boolean = true;
//tipo Any
let mivariable;
mivariable = "cadena";
mivariable = 10;
//arreglos 
let animales:string[] = ['perrro', 'gato', 'tigre'];
let numeros1:number[] = [1,2,3,4,5];
let atributos:boolean[] = [];
let numeros2: Array<number> = [];
//atributos.map(x => x.); dependiendo el arreglo las funciones cambian

//Tuplas
let tupla:[number,string] = [1,"cadena",];
tupla.push(123); //no marca error
let tupla2:[number,string[]] = [2, ["cadena1","cadena2", "cadena3"]];

//enums
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';
enum Talla1 {chica = 1, mediana, grande, extragrande};
enum Talla {chica = 's', mediana = 'm', grande = 'l', extragrande = 'xl'};
const tallaGrande = Talla.grande;
console.log("Talla: " + tallaGrande);

//ponemos const para la enumeracion
const enum EstadoCargaPagina {Siniciar, Cargando, Exito, Error}
const estado = EstadoCargaPagina.Exito;

