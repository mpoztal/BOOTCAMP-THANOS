"use strict";
exports.__esModule = true;
var Calculadora_1 = require("./Calculadora");
var casio = new Calculadora_1["default"]('CASIO');
var suma = casio.sumar(1, 2, 3, 4, 5);
console.log(suma); // 15
var resta = casio.restar(3, 4, 2);
console.log(resta); // -3
var division = casio.dividir(12, 6, 0, 2);
console.log(division); // 1
