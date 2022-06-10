//? Funciones - parte 2

function sumar (x, y) {
  console.log('Suma: ',x + y)
}
sumar(5, 4)


sumar = '🐣'
// le hemos cambiado el valor a la función!!!
console.log(sumar)


//* Para solucionar eso, se hicieron las funciones anónimas

const restar = function (x, y) {
  console.log('Resta: ',x - y)
}

restar(7, 3)
// restar = '🐤'
console.log(restar)


//*******************************/
//* A partir de ES6 (ES2015) se crearon las "ARROW FUNCTIONS" (Funciones flecha)

// function sumar () {}
// const sumar = function () {}

// const sumar =   () => {}


const multiplicar = (x, y) => {
  console.log('Multiplicación: ', x * y)
}
multiplicar(5, 3)

// particularmente, si solo hay un parámetro, podemos quitar los paréntesis
const saludo = nombre => {
  console.log('Hola ' + nombre)
}

// también, si solo hay una línea de ejecución, podemos quitar las llaves
const buenosDias = () => console.log('Buenos días')

// por último, si no hay parámetros, podemos poner un guión bajo en lugar de los paréntesis
const buenasTardes = _ => console.log('Buenas tardes')


//*************************/

// Resumen:
/**
 * Las funciones las llamaremos con una arrow function
 * 
 * Pueden recibir parámetros
 * 
 * podemos ponerle valores por defecto a los parámetros
 * 
 * Hay que llamarlas/invocarlas para que se ejecute el código
 */


//****RETURN */
//* Como segunda opción, las funciones pueden retornar un valor

// solo ejecuta código
const hola = () => {
  console.log('hola')
}
hola()

// con parámetros
const holaPersona = (nombre = 'amig@') => {
  console.log(`Hola, ${nombre}`)
}
holaPersona()
holaPersona('Ivan')


//* con return (que devuelva un valor)
//! MUY IMPORTANTE!! Después de un return NO SE EJECUTARÁ NINGUNA LÍNEA DE CÓDIGO
const suma = (num1, num2) => {
  const resultado = num1 + num2
  return resultado
  
  // esta línea no se ejecuta
  console.log('🍗')
}

const sumaDe5y3 = suma(5, 3)
console.log(suma(7,3))


console.log('El resultado es ' + sumaDe5y3)


//* EXTRA!!!! En las funciones flecha, si la única línea de ejecución es un return, nos dejan quitar la palabra return

function resta(a, b) {
  return a - b
}
const resta = (a, b) => a - b 





// ejemplo de función que devuelve true si el número que le pasamos es primo
const esPrimo = (numero) => {

  let esPrimo = true

  for (let i = 2; i < numero && esPrimo; i++) {
    if (numero % i === 0) {
      esPrimo = false
    }
  }


  if (esPrimo) console.log(`El número ${numero} es primo`)
  else console.log(`El número ${numero} no es primo`)

  return esPrimo
}

console.log(esPrimo(13))
esPrimo(23)
esPrimo(456)



// Ejemplo de función que elimina las vocales de una frase y te devuelve la frase nueva sin vocales
const quitarVocales = (texto) => {


  const vocales = ['a', 'á', 'à', 'ä', 'â', 'é', 'è', 'ë', 'ê', 'e', 'i', 'í', 'ì', 'ï', 'î', 'i', 'o', 'ó', 'ò', 'ö', 'ô', 'u', 'ú', 'ù', 'ü', 'û']

  const fraseArray = texto.split('')

  for (let i = 0; i < fraseArray.length; i++) {
    const letra = fraseArray[i].toLowerCase()
  
    if (vocales.includes(letra)) {
      fraseArray.splice(i, 1, '')    
    }
    
  }

  const fraseFinal = fraseArray.join('')
  
  console.log(fraseFinal)

  return fraseFinal
}

const fraseSinVocales = quitarVocales('zapato')

console.log('Frase sin vocales -->', fraseSinVocales)







// dame el total de la suma de los siguientes números

const numeros = [1, 2, 3, 4]
let total = 0

for (let num of numeros) {

  total = total + num

}

console.log(total)