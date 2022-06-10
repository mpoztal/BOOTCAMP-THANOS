//? Tipos de datos
//? DATOS PRIMITIVOS

//* String -> Cadena de texto

const nombreSimple = 'Ivan es supermajo'
const nombreDobles = "Ivan con comillas dobles"
const variasComillas = "Ivan le dijo 'guapa' a su mujer"


// Si utilizamos backticks podemos "interpolar" código dentro del string
const miEdad = 35
const nombreEdad = 'Ivan tiene ' + miEdad + ' años.'
const nombreEdadBackticks = `Ivan tiene ${miEdad} años.`

// podemos imprimir en consola una variable directamente, pero si lo hacemos entre llaves también veremos el nombre de la variable en consola
console.log(nombreSimple) //    Ivan es supermajo
console.log({nombreSimple})// { nombreSimple: 'Ivan es supermajo' }
console.log({nombreDobles})
console.log({variasComillas})
console.log({nombreBackticks})

console.log('typeof nombreSimple ->' , typeof nombreSimple)

//* Number -> Números

let num1 = 23
const num2 = -41
const num3 = 5.47
const numString = '47'

console.log({num1})
console.log({numString})
console.log('typeof num2 ->' , typeof num2)

//* Boolean -> valores booleanos, si/no  verdadero/falso

const estoyCasado = true
const estoyDivorciado = false

console.log({estoyCasado})
console.log('typeof estoyDivorciado ->' , typeof estoyDivorciado)


//* Undefined -> valor no definido

let tuNombre
console.log({tuNombre})

const suNombre = undefined
console.log({suNombre})

console.log('typeof tuNombre ->' , typeof tuNombre)


//* null
const hijos = null
console.log({hijos})
console.log('typeof hijos ->' , typeof hijos ) //! esto da object como tipo de dato. Lo podríamos considerar un error de EcmaScript. Debería ser de tipo null



//* Symbol -> No lo vamos a ver
const simbolo = Symbol()
console.log({simbolo})
console.log('typeof simbolo ->' , typeof simbolo)


//* REPASO

/*
    strings
    numbers
    booleans
    undefined
    null
    
    symbol



*/

//? DATOS NO PRIMITIVOS

//* Arrays -> grupos de datos dentro de una misma variable

const frutas = ['pera', 'manzana', 'plátano']
console.log(frutas)
console.log('typeof frutas ->' , typeof frutas)

//* Objetos -> Varios datos dentro de un mismo elemento

const persona = {
  nombre: 'Ivan',
  edad: 35
}

console.log(persona)
console.log('typeof persona ->' , typeof persona)

//* Funciones -> código que será ejecutado más tarde

function suma(a, b) {
  return a + b
}

console.log(typeof suma)


//* REPASO

/*
    Arrays
    Objetos
    Funciones
*/
