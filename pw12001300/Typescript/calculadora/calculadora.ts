//const operaciones = ["suma", "resta", "multiplicacion", "division"];
type operaciones = "suma" | "resta" | "multiplicacion" | "division";
type resultados = number | string;

const calculadora = (a:number,b:number,operacion: operaciones) : number => { 
//    if(!operaciones.includes(operacion)){
//        return "operacion no válida";
//    }
    if (operacion == "suma") {
        return a + b;
    }
    if (operacion == "resta") {
        return a - b;   
    }
    if (operacion == "multiplicacion") {
        return a * b;   
    }
    if (operacion == "division") {
        if (b == 0) {
            throw new Error("No se puede dividir entre cero");
            //return "no se puede dividir entre cero";
        }
        return a / b;   
    }
    throw new Error("Operacion no válida");
    //return "operacion no válida";
}

console.log(calculadora(1, 3, "suma"));
console.log(calculadora(1, 3, "resta"));
console.log(calculadora(1, 3, "multiplicacion"));
console.log(calculadora(1, 3, "division"));
//console.log(calculadora(1, 3, "sumaste"));
console.log(calculadora(1, 0, "division"));
