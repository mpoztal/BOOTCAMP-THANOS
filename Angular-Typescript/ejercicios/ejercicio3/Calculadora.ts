//Vamos a crear una aplicación  que permita generar calculadoras de diferentes marcas. 
//Cada calculadora que yo cree tiene que implementar obligatoriamente tres metodos:
//sumar, resta, multiplicar  (a parte de una marca de calculadora CASIO.)

import { ICalculadora } from "./ICalculadora";

// 2º Generar ésta clase Calculadora

export default class Calculadora implements ICalculadora {
    marca: string = ""
    constructor(pMarca: string) {
        this.marca = pMarca;
    }
  
    //rest-parameter;  Me permite pasarle a una funcion un numero indefinido de parametros.
    sumar(...pNumeros: number[]): number{  // Ésta es la implementación de la funcion SUMA
        let resultado: number = 0;
        for(let numero of pNumeros){
            resultado += numero;
        }

        console.log(resultado)
        return resultado;
    }

    restar(...pNumeros: number[]): number{  // Ésta es la implementación de la funcion RESTA
        let resultado: number = pNumeros[0];
        for(let index:number = 1; index <pNumeros.length; index++) {
            resultado-= pNumeros[index]
        }
       

        console.log(resultado)
        return resultado;
    }

    multiplicar(...pNumeros: number[]): number{  // Ésta es la implementación de la funcion MULTIPLICAR
        let resultado: number = 1;
        for(let numero of pNumeros){
            resultado *= numero;
        }

        console.log(resultado)
        return resultado;
    }

    dividir(...pNumeros: number[]): number{  // Ésta es la implementación de la funcion DIVIDIR (No podemos dividir entre 0)
        let resultado: number = pNumeros[0];

        pNumeros.forEach((numero, index) => {
            if(numero !== 0 && index !== 0){
                resultado /= numero; 
            }
            
        });
        
        console.log(resultado)
        return resultado;
        }

}




 

