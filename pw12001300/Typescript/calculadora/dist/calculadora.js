"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculadora = (a, b, operacion) => {
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
        }
        return a / b;
    }
    throw new Error("Operacion no válida");
};
console.log(calculadora(1, 3, "suma"));
console.log(calculadora(1, 3, "resta"));
console.log(calculadora(1, 3, "multiplicacion"));
console.log(calculadora(1, 3, "division"));
console.log(calculadora(1, 0, "division"));
//# sourceMappingURL=calculadora.js.map