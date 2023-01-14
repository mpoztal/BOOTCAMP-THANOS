"use strict";
//Vamos a crear una aplicación  que permita generar calculadoras de diferentes marcas. 
//Cada calculadora que yo cree tiene que implementar obligatoriamente tres metodos:
//sumar, resta, multiplicar  (a parte de una marca de calculadora CASIO.)
exports.__esModule = true;
// 2º Generar ésta clase Calculadora
var Calculadora = /** @class */ (function () {
    function Calculadora(pMarca) {
        this.marca = "";
        this.marca = pMarca;
    }
    //rest-parameter;  Me permite pasarle a una funcion un numero indefinido de parametros.
    Calculadora.prototype.sumar = function () {
        var pNumeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pNumeros[_i] = arguments[_i];
        }
        var resultado = 0;
        for (var _a = 0, pNumeros_1 = pNumeros; _a < pNumeros_1.length; _a++) {
            var numero = pNumeros_1[_a];
            resultado += numero;
        }
        console.log(resultado);
        return resultado;
    };
    Calculadora.prototype.restar = function () {
        var pNumeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pNumeros[_i] = arguments[_i];
        }
        var resultado = pNumeros[0];
        for (var index = 1; index < pNumeros.length; index++) {
            resultado -= pNumeros[index];
        }
        console.log(resultado);
        return resultado;
    };
    Calculadora.prototype.multiplicar = function () {
        var pNumeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pNumeros[_i] = arguments[_i];
        }
        var resultado = 1;
        for (var _a = 0, pNumeros_2 = pNumeros; _a < pNumeros_2.length; _a++) {
            var numero = pNumeros_2[_a];
            resultado *= numero;
        }
        console.log(resultado);
        return resultado;
    };
    Calculadora.prototype.dividir = function () {
        var pNumeros = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            pNumeros[_i] = arguments[_i];
        }
        var resultado = pNumeros[0];
        pNumeros.forEach(function (numero, index) {
            if (numero !== 0 && index !== 0) {
                resultado /= numero;
            }
        });
        console.log(resultado);
        return resultado;
    };
    return Calculadora;
}());
exports["default"] = Calculadora;
