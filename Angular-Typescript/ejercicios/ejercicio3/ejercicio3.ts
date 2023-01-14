import Calculadora from "./Calculadora";

let casio = new Calculadora('CASIO');

let suma = casio.sumar(1, 2, 3, 4, 5);
console.log(suma) // 15

let resta = casio.restar(3, 4, 2);
console.log(resta) // -3

let division = casio.dividir(12, 6, 0, 2);
console.log(division) // 1