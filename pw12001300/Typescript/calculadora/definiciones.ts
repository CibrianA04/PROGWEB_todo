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

