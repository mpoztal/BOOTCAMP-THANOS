//? Bucles
//* ¿Para qué se usan?
    //* Para repetir código un determinado número de veces
    //* Para recorrer elementos "iterables"

//* EXTRA!!! Para "debuggear" en JavaScript usaos la palabra reservada "debugger"


//* Bucle for....

// Tiene 3 partes:
  // inicializar una variable con el valor inicial que queramos
  // añadimos una condición para determinar el número de vueltas
  // incrementaremos o decrementaremos la variable

  // debugger
  for (let variable = 1; variable <= 5; variable += 1) {
    console.log('Soy un for...')
  }

  for (let variable = 5; variable >= 1; variable -= 1) {
    console.log('Soy un for que va hacia abajo...')
  }
   
  //* La manera en la que todo el mundo escribe un for es la siguiente:

  for (let i = 1; i <= 5; i++ ) {
    console.log('For con variable "i"')
  }

//***************************** */
// Recorrer un elemento "iterable"

const array = ['🍐', '🍎', '🍌', '🍇', '🍑']

for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}

const texto = 'Hola, amig@'
for (let i = 0; i < texto.length; i++) {
  console.log(texto[i])
}

//**********************************/

//* BREAK, CONTINUE  --> Podemos utilizarlas para salirnos del bucle o para saltarnos una vuelta
console.log('******BREAK********')

for (let i = 1; i <= 10; i++) {
  console.log(i)

  if(i === 3) {
    // se sale completamente del bucle y lo corta
    break
  }

}

console.log('Fuera del bucle')

console.log('*******CONTINUE********')

for (let i = 1; i <= 10; i++) {  
  if(i % 2 === 0) {
    // saltarse una vuelta del ciclo
    continue
  }

  console.log(i)
}
console.log('Fuera del bucle')


//***********************************/

//* For...of --> No requiere tantos valores iniciales
// Siempre empieza desde la primera posición
// Siempre va de uno en uno
// Siempre llegará hasta el último elemento del array/texto/objeto, etc

console.log('**********FOR...OF***********')

const frutas = ['🍐', '🍎', '🍌', '🍇', '🍑']
const numeros = [1, 15, 24, -7, 5.45]

for (let fruta of frutas) {
  console.log(fruta)
}


for (let num of numeros) {
  console.log(num * 2)
}
