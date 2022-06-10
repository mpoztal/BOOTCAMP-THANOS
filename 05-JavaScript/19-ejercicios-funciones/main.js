//* Ejercicio 1
/**
 * Crea una función a la que le pasamos 2 números y imprime por consola cual es el mayor de los dos o si son iguales
 */
/*
 const mayorIgual = (num1, num2) => {

  if (num1 > num2) {
    return `${num1} es mayor que ${num2}`
  }else if (num1 < num2) {
     return `${num1} es menor que ${num2}`
  }else {
    return `${num1} y ${num2} son iguales`
  }

}
const mayorOIgual = (num1, num2) => {
  if (num1 > num2) return 1
  else if (num1 < num2) return -1
  else return 0
}

const algo = mayorIgual(5, 3)
console.log(algo)

console.log(mayorOIgual(6546131, 316516))
*/
//* Ejercicio 2

/**
 * Crea una función que reciba dos números y devuelva  true   si los números son iguales y  false  si no lo son
 */
/*
const sonIguales = (num1 ,num2) => {
  //versión larga
  // if (num1 === num2) {
  //   return true
  // }else {
  //   return false
  // }

  // versión corta
  return num1 === num2 ? true : false
}

// versión extra corta
const igualesONo = (num1, num2) => num1 === num2 ? true : false

// versión SUPERMEGA CORTA
const iguales = (num1, num2) => num1 === num2

console.log(igualesONo(5,6))
console.log(iguales(5,5))

*/




//* Ejercicio 3

/**
 * Crea una función que recibe como parámetro una fruta como string y devuelve la posicion del array donde esté esa fruta.
Si no encuentra el elemento que devuelva  -1 ;
Guarda el valor que retorna la función y imprimela en la consola.
 */
/*
const frutas = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras', 
'Uvas', 'Pomelos'];



const myIndexOf = (string, array) => {
  // variables auxiliares
  let posicion = -1

  // recorrer el array
  for (let i = 0; i < array.length; i++) {

    if (array[i] === string) {
      posicion = i     
    }

  }

  // devuelve la posición
  return posicion
}

// versión corta
const indexDelArray = (string, array) => {  

  // recorrer el array
  for (let i in array) {
    if (array[i] === string) return i
  } 

  return -1
}

console.log(myIndexOf('Piñas', frutas))
console.log(myIndexOf('Zapato', frutas))
console.log(indexDelArray('Piñas', frutas))
console.log(indexDelArray('Zapato', frutas))
*/
//* Ejercicio 4
/**
 * Crea una función que reciba el array de frutas y devuelva un string con todas las frutas separadas por comas.
    ¡No utilizar el método  join()
    ¡¡¡No tiene que haber una coma al final del string!!
 */




/*
const myJoin = (array) => {
  let stringFinal = ''


  // for (let index in array) {

  //   if (index < array.length -1) {
  //     stringFinal += array[index] + ', '
  //   }else {
  //     stringFinal += array[index]
  //   }

  // }
 
  
  // for (let element of array) {
    //   stringFinal += element + ', '
    // }
    // stringFinal = stringFinal.slice(0, -2)
    
  for (let i in array) {
    stringFinal += (i < array.length -1) ? array[i] + ', ' : array[i]
  }

  return stringFinal
}

console.log(myJoin(frutas))
*/

//* Ejercicio 5
/**
 * Crea una función que reciba el array de frutas y que te devuelva un nuevo array al revés.
      No utilizar el método  reverse()
 */
/*
const myReverse = (array) => {
  const arrayAlReves = []

  // for (let value of array) {
  //   arrayAlReves.unshift(value)
  // }

  for (let i = array.length - 1; i >= 0; i--) {
    arrayAlReves.push(array[i])
  }

  return arrayAlReves
}

console.log(myReverse(frutas))
*/

//* Ejercicio 6
/**
 * Crea una función que le pasemos un array de números y nos devuelva cuál es el número  mayor.
    No utilizar el método  max()
 */
/*
const numeros = [-5, 7, -24, -2, -2, -20]

const numMayor = (array) => {
  let numMasGrande = 0
  
  for (let num of array) {
    if (num > numMasGrande) {
      numMasGrande = num
    }

  }

  return numMasGrande
}

console.log(numMayor(numeros))
*/

//* Ejercicio 7
/**
 * Haz una función que haga coja un string que le pasemos por parámetro y le convierta la primera letra en mayúscula.
 */
/*
const primeraMayuscula = (text) => {
  let finalText = ''

  const primeraLetra = text.slice(0,1).toUpperCase()
  const restoFrase = text.slice(1)
  finalText = primeraLetra + restoFrase


  finalText = text.slice(0,1).toUpperCase() + text.slice(1)


  return finalText
}


console.log(primeraMayuscula('pajarito'))
console.log(primeraMayuscula('hola, qué tal'))
*/

//* Ejercicio 8 -> 🍒
/**
 * Crear una calculadora:
  Crea un bucle en el que el programa pregunta diferentes opciones (como si fuera un menú). 
  Las opciones serán (s) sumar, (r) restar, (m) multiplicar, (d) dividir, (e) exponencial, (p) porcentaje y (x) salir.
  La calculadora seguirá ejecutándose hasta que el usuario aprete la letra x  que será salir.
  Para cada letra entre las opciones, crear la función que se encargará de hacer cada operación.
  Dentro de cada función, pediremos al usuario los datos necesarios para relizar esa operación.
  Que se imprima por consola el resultado de cada operación. 
  No hace falta que las funciones devuelvan nada, solo que impriman por consola.
  Refactoriza para que haya el menor número de cosas repetidas.
*/

const sumar = (num1P, num2P) => {
  console.log(`${num1P} + ${num2P} = ${num1P + num2P}`)
}

const restar = (num1P, num2P) => {
  console.log(`${num1P} - ${num2P} = ${num1P - num2P}`)
}

const multiplicar = (num1P, num2P) => {
  console.log(`${num1P} * ${num2P} = ${num1P * num2P}`)
}

const dividir = (num1P, num2P) => {
  console.log(`${num1P} ÷ ${num2P} = ${num1P / num2P}`)
}

const porcentaje = (porcentaje, numero) => {

  const resultado = (numero * porcentaje) / 100

  console.log(`El ${porcentaje}% de ${numero} es ${resultado.toFixed(2)}`)
}

const exponencial = (base, exp) => {
  console.log(`${base} elevado a ${exp} = ${Math.pow(base, exp)}`)
}


const pedirDosNumeros = (mensaje1 = 'Dime el primer número', mensaje2 = 'Dime el segundo número') => {
  // pedir el primer número
  let num1
  do {
    num1 = prompt(mensaje1)
  }while (num1 === null || isNaN(num1.trim()) || num1.trim() === '')
  //* OTRA MANERA DE TRANSFORMAR A NÚMERO ES CAÑADIENDO UN SIGNO + DELANTE
  num1 = +num1


  // pedir el segundo número
  let num2
  do {
    num2 = prompt(mensaje2)
  }while (num2 === null || isNaN(num2.trim()) || num2.trim() === '')
  num2 = +num2


  return [num1, num2]
}



let calculator
let exit = false
do {
  calculator = prompt(`
  ¡Bienvenid@ a la supercalculadora!
  (s) Sumar
  (r) Restar
  (m) Multiplicar
  (d) Dividir
  (p) Porcentaje
  (e) Exponencial
  (x) EXIT
  `)
  
  // if (calculator === 'x') break
  
  switch (calculator) {
    case 's': {
      const [num1, num2] = pedirDosNumeros()
      // sumar
      sumar(num1, num2)
      break
    }

    case 'r': {
      // restar
      const [num1, num2] = pedirDosNumeros()
      restar(num1, num2)      
      break
    }

    case 'm': {
      // multiplicar
      const [num1, num2] = pedirDosNumeros()
      multiplicar(num1, num2)
      break
    }

    case 'd': {
      // dividir
      const [num1, num2] = pedirDosNumeros()
      dividir(num1, num2)
      break
    }

    case 'p': {
      // porcentaje
      const [porcentaje, numero] = pedirDosNumeros('Dime el porcentaje', 'Dime de qué número quieres saber el porcentaje')
      porcentaje(porcentaje, numero)
      break
    }

    case 'e': {
      // exponencial
      const [base, expo] = pedirDosNumeros('Dime la base', 'Dime el exponente')
      exponencial(base, expo)
      break
    }

    case 'x': {
      console.log('¡ADIOS!')
      exit = true
      break    
    }  

    default: {
      console.error('Esa opción no está contemplada.')
    }
  }

  if (calculator === 's') {
    const [num1, num2] = pedirDosNumeros()
    sumar(num1, num2)

  }else if (calculator === 'r') {
    const [num1, num2] = pedirDosNumeros()
    restar(num1, num2)

  }else if (calculator === 'm') {
    const [num1, num2] = pedirDosNumeros()
    multiplicar(num1, num2)

  }else if (calculator === 'd') {
    const [num1, num2] = pedirDosNumeros()
    dividir(num1, num2)

  }else if (calculator === 'p') {
    const [porcentaje, numero] = pedirDosNumeros('Dime el porcentaje', 'Dime de qué número quieres saber el porcentaje')
    porcentaje(porcentaje, numero)

  }else if (calculator === 'e') {
    const [base, expo] = pedirDosNumeros('Dime la base', 'Dime el exponente')
    exponencial(base, expo)

  }else if (calculator === 'x') {
    console.log('¡ADIOS!')
    exit = true
  }else {
    console.error('Esa opción no está contemplada.');
  }

}while(exit !== true)