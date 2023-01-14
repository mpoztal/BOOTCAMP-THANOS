//dada un numero aleatorio entero (Math.random()*10) 
//hacer un aplicación que me devuelve el factorial de un numero.

// 5 -> 5 * 4 * 3 * 2 * 1 = 120
// 3 -> 3 * 2 * 1 = 6;

const numero: number = 5; // 1º Inicializo con un valor

const factorial = (pNumero: number): any => {  // 2º Declarar la función

    let resultado: number = 1;  // 4º Dos Variables para resulver la función
    const serie: number[] = []

    for(let i: number = pNumero; i >= 1; i--){  // 5º Operación de resolución
        serie.push(i);
        resultado = resultado * i
    }

    return {mFactorial: resultado, serie: serie}; // 3º Devolver resultado
}

let resultado: any = factorial(numero);

console.log(`El resultado es${resultado.serie}`)
console.log(resultado.mFactorial)


