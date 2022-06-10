//* Ejercicio 6

/**
 * Complicando el ejercicio de  Bucles 02.  Haz un programa que muestre las tablas del 1 al 10 todas seguidas.
 * 
  Pensad bien cómo resolverlo, recomendacion: Escribe el resultado que queremos como comentario para descifrar el algoritmo que tienes que usar.
 */  
/*
  for (let i = 1; i <= 10; i++) {
    // primer bucle
    console.log('*****Tabla del ' + i + '*****')

    for (let j = 1; j <= 10; j++) {
      // segundo bucle

      console.log(`${i} x ${j} = ${i * j}`)

    }    
  }
*/
//* Ejercicio 7
/**
 * Escribe un programa que pida al usuario introducir un número entero entre 50 y 100, el cuadro de texto volverá a aparecer si el número es menor o mayor.
 */
/*
let numUsuario
while (isNaN(numUsuario) === true || numUsuario < 50 || numUsuario > 100) {
  numUsuario = prompt('Dime un número del 50 al 100. No te equivoques.')
}

let numerito
do {
  numerito = prompt('Dime un número del 50 al 100. No te equivoques.')
}while (isNaN(numerito) === true || numerito < 50 || numerito > 100)
*/


/*

let esCorrecto = false
let numero
do {
  numero = prompt('Dime un número del 50 al 100')

  if (numero >= 50 && numero <= 100) {
    esCorrecto = true
  }
  
}while (!esCorrecto)

*/

//* Ejercicio 8
/**
 * En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10. Si el número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca el valor correcto. Una vez haya introducido un valor entre 2 y 10, se mostrará por consola la tabla de multiplicar del número elegido.
 */

/*
let numUsuario = 1
while (numUsuario < 2 || numUsuario > 10) {
  numUsuario = prompt('Dime qué tabla del 2 al 10 quieres que te muestre.')
}

for (let i = 1; i <= 10; i++) {
  console.log(`${numUsuario} x ${i} = ${numUsuario * i}`)
}
*/

//* Ejercicio 9
/**
 * Con un  while  construye y muestra por consola un "triángulo" de 7 líneas como el siguiente:
 
  *
  **
  ***
  ****
  *****
  ******
  *******
 */

  // console.log('*')
  // console.log('*' + '*')
  // console.log('***')

/*
let asterisco = '*'
let numEstrellas = 3


let contador = 1
while ( contador <= numEstrellas) {
  console.log(asterisco)
  asterisco += '*'

  contador++
}
*/

//* Ejercicio 10
/**
  * Recorrer la siguiente lista con un bucle, imprimiendo el doble de cada número: 
*/
/*
const myList = [1,9,3,8,5,7];

// For
console.log('**** for ****')
for (let i = 0; i < myList.length; i++){
  console.log(`El doble de ${myList[i]} es ${myList[i] * 2}`)
}

// For...of
console.log('**** for...of ****')
for (let num of myList) {
  console.log(`El doble de ${num} es ${num * 2}`)
}

// For...in
console.log('**** for...in ****')
for (let i in myList) {
  console.log(`El doble de ${myList[i]} es ${myList[i] * 2}`)
}

// while
console.log('**** while ****')
let i = 0
while (i < myList.length) {
  console.log(`El doble de ${myList[i]} es ${myList[i] * 2}`)
  i++
}

// do...while
console.log('**** do...while ****')
let j = 0
do {
  console.log(`El doble de ${myList[j]} es ${myList[j] * 2}`)  
  j++
} while (j < myList.length);

*/

//* Ejercicio 11
/**
 * En un array cualquiera con 10 números, contar cuantos números positivos hay, cuantos negativos y cuantos ceros.
*/
/*
const numeros = [0, 25,13,-6, 0, -27.4, 42, 234, -7, 0]

//* Variables auxiliares al empezar
let positivos = 0
let negativos = 0
let ceros = 0

//* Bucle que cambiará mis variables auxiliares
for (let numero of numeros) {
  if (numero > 0) positivos++
  else if (numero < 0) negativos++
  else ceros++
}

//* Resultados finales
console.log(`Tu array tiene:
  ${positivos} números positivos
  ${negativos} números negativos
  ${ceros} ceros`)

*/

//* Ejercicio 12 - ¡La guinda!
/**
 * Hay que crear un programa de JS que permita adivinar un número secreto entre 1 y 100. 
  Se considera que cuando el usuario introduce un valor, éste es siempre válido. 
  Con cada intento del jugador, el programa le dice si el número secreto es mayor o menor. 
  El jugador tiene 6 intentos para adivinar el número.
  Para crear un número aleatorio real utilizamos este código:
      Math.floor((Math.random() * 100) + 1)
*/

const secreto = Math.floor((Math.random() * 100) + 1)
let intentos = 6
let hasGanado = false


// Preguntar al usuario por el número secreto
let numUsuario = Number(prompt('Dime un número del 1 al 100 a ver si lo adivinas.'))

// Mientras no escribamos el número secreto me seguirá lanzando prompts hasta acabar intentos


while (!hasGanado && intentos !== 1 ) {
  // si el número es mayor que el secreto
  if (numUsuario > secreto) {
    // restamos un intento
    intentos--
    // pedimos que lo intente de nuevo
    numUsuario = prompt(`INCORRECTO, el número secreto es MENOR.
    Prueba otra vez, te quedan ${intentos} intentos`)

  // si el número es menor que el secreto
  } else if (numUsuario < secreto) {
    // restamos un intento
    intentos--
    // pedimos que lo intente de nuevo
    numUsuario = prompt(`INCORRECTO, el número secreto es MAYOR.
    Prueba otra vez, te quedan ${intentos} intentos`)

  // si el número es el mismo
  } else{
    // has ganado
    console.log('¡Has ganado! 🥳')
    hasGanado = true
  }
}

if (!hasGanado) {
  console.log('Ohhhhh, has perdido...loser 😭')
}
