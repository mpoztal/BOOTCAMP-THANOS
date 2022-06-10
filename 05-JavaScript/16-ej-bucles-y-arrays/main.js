//* Ejercicio 1
/**
 * Escribe un programa que pida un número mayor que 1 y que devuelva si el número es primo o no. 
    Un número es primo si SOLO ES DIVISIBLE POR SÍ MISMO Y POR 1
*/

//* 6 no es primo
// 6 / 5 = 1.2   6 % 5 != 0
// 6 / 4 = 1.5   6 % 4 != 0
// 6 / 3 = 2     6 % 3 == 0  //! no es primo!
// 6 / 2 = 3     6 % 2 == 0

//* 5 es primo
// 5 / 4 = 1,25
// 5 / 3 = 1,66
// 5 / 2 = 2.5
/*
let numero = prompt('Dime un número mayor que 1')

if (numero <= 1) {
  console.error('Te he dicho que mayor que 1, ¡merluzo@!');
} else {

  // variables auxiliares, acumuladoras, contadores, etc
  let esPrimo = true


  // bucles, ifs, funciones, etc que modifican, revisan y cambian las variables auxiliares
  console.time()

  for (let i = 2; i < numero && esPrimo; i++) {
    if (numero % i === 0) {
      esPrimo = false
      // podemos usar un break para salir del bucle o podemos añadir otra condicion a las sentencias del bucle
      // break
    }
  }

  console.timeEnd()



  // resultados obtenidos después de las funcionalidades
  if (esPrimo === true) console.log(`${numero} ES primo.`)
  else console.log(`${numero} NO es primo.`)

}
*/


//* Ejercicio 2
/**
 * Crea 3 arrays:
    El primero tendrá 5 números. 
    El segundo se llamará  pares  y el tercero  impares .  Ambos estarán vacíos.
    Multiplica cada uno de los números del primer array por un número aleatorio entre 1y 10
    Si el resultado es par, guarda ese número en el array de pares y si es impar en el otro.
    Mostrar por consola:
    La multiplicación que se ha hecho en el siguiente formato → 2 x 3 = 6
    El array de pares e impares.
*/

/*
const numeros = [2, 7, 24 ,13, 75]
const pares = []
const impares = []

// dar vueltas al primer array
for (let num of numeros) {
  
  // multiplica cada número por un número aleatorio del 1 al 10
  const random = Math.ceil(Math.random() * 10)  
  const resultado = num * random

  // mostrar en consola la multiplicacion "2 x 3 = 6"
  console.log(`${num} x ${random} = ${num * random}`)

  // si el resultado es par
  if (resultado % 2 === 0) {
    // guarda ese numero en pares
    pares.push(resultado)
  }
  // si es impar
  else {
    // guardalo en impares
    impares.push(resultado)
  }


}

// imprimir array de pares y el de impares
console.log(pares)
console.log(impares)

*/


//* Ejercicio 3
/**
 * Pide al usuario 5 números distintos y los guardas en un array a medida que los vaya escribiendo.
    Imprime el array por consola. 
    Cuando acabe, suma el total de todos los números.
    Imprime en consola la suma total, la raíz cuadrada del total y también éste último pero redondeado al alta.
 */

/*
// pedir 5 números
const numeros = []   
for (let i = 1; i <= 5; i++) {
  const numero = Number(prompt('Dime un número entero.'))
  numeros.push(numero)
}

// imprime el array
console.log('numeros -->', numeros)

// suma todos los números
let total = 0
for (let numero of numeros) {
  total += numero
}


// resultados finales
console.log('Suma total -->', total)
console.log('Raíz cuadradad del total -->', Math.sqrt(total))
console.log('Redondeo al alta de la raíz cuadradad del total -->', Math.ceil(Math.sqrt(total)))
*/

//* Ejercicio 4

/**
 * Crea un array vacío y rellénalo con 10 números aleatorio entre 23 y 33 (ambos incluidos).
    Luego elimina del array todos los números pares y en lugar de ellos ponemos el string "los impares molan"
 */
/*
// crea un array vacío
const numeros = []

// crea 10 números aleatorios y mételos en el array
for (let i = 1; i <= 10; i++) {  
  const numRandom = Math.floor(Math.random() * (34 - 23)) + 23
  numeros.push(numRandom)
  // if (numRandom % 2 === 0) numeros.push('los impares molan')
  // else numeros.push(numRandom)
}

console.log('numeros -->', numeros)


// elimina todos los pares
for (let i in numeros) {
  if (numeros[i] % 2 === 0) {
    numeros.splice(i, 1, 'los impares molan')
  }
}

for (let num of numeros) {
  if (num % 2 === 0) {
    numeros.splice(numeros.indexOf(num), 1, 'los impares molan' )
  }
}

console.log('numeros -->', numeros)
*/

//* Ejercicio 5
/**
 * Pide al usuario por teclado una frase y pasa sus caracteres a un array de caracteres.
    Elimina todas las vocales de la frase y imprime la nueva frase por consola como un string.
 */

const fraseUsuario = prompt('Dime una frase.')

const fraseArray = fraseUsuario.split('')

console.log('fraseArray -->', fraseArray)


/*
for (let i = 0; i < fraseArray.length; i++) {

  const letra = fraseArray[i].toLowerCase() 
  
  if ( 
         letra === 'a' 
      || letra === 'á'
      || letra === 'à'
      || letra === 'ä'
      || letra === 'â'
      || letra === 'é'
      || letra === 'è'
      || letra === 'ë'
      || letra === 'ê'
      || letra === 'e'
      || letra === 'i'
      || letra === 'í'
      || letra === 'ì'
      || letra === 'ï'
      || letra === 'î'
      || letra === 'i'
      || letra === 'o'
      || letra === 'ó'
      || letra === 'ò'
      || letra === 'ö'
      || letra === 'ô'
      || letra === 'u'      
      || letra === 'ú'      
      || letra === 'ù'      
      || letra === 'ü'      
      || letra === 'û'      
    ) {
      fraseArray.splice(i, 1, "")      
  }
}
*/

const vocales = ['a', 'á', 'à', 'ä', 'â', 'é', 'è', 'ë', 'ê', 'e', 'i', 'í', 'ì', 'ï', 'î', 'i', 'o', 'ó', 'ò', 'ö', 'ô', 'u', 'ú', 'ù', 'ü', 'û']

for (let i = 0; i < fraseArray.length; i++) {
  const letra = fraseArray[i].toLowerCase()

  if (vocales.includes(letra)) {
    fraseArray.splice(i, 1, '')    
  }
  
}

console.log(fraseArray.join(''))