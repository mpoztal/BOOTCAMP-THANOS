//? Bucles - Parte 2 

//* while --> Miestras se cumpla esto....haz esto
//* Se suele usar cuando NO SABEMOS EXACTAMENTE cuántas veces vamos a tener que repetir un código

/*
// Ejemplo igual que un FOR
const texto = 'calabaza'
let numAes = 0

let i = 0
while (i < texto.length) {
  
  if (texto[i] === 'a') {
    numAes++
  }

  i++
}

console.log(`Has escrito ${numAes} aes.`)

// Ejemplo tonto de un while en el que no sabemos cuantas veces vamos a dar vueltas
let password
while (password !== '1234') {
  password = prompt('Dime la contraseña.')
}

console.log('Contraseña correcta')
*/

//* do...while  --> Haz esto primero....y luego si se cumple la condición, lo repites

/*
const passBD = '1234'
do {
  passBD = prompt('Contraseña, por favor.')

}while (passBD !== '1234')
*/

//* for...in --> es igual que el for...of
  // empieza desde el principio siempre
  // siempre termina al final del elemento
  // siempre va de uno en uno
//! La diferencia es que la variable que pongamos en el for...in SIEMPRE VA A CONVERTIRSE EN EL ÍNDICE DE LA VUELTA EN LA QUE ESTÉS

const frutas = ['🍐', '🍎', '🍌', '🍇', '🍑', '🍒']

// For...OF
for (let fruta of frutas) {
  console.log(fruta)  
}

//For...IN
for (let i in frutas) {
  console.log(i,  frutas[i])
}
