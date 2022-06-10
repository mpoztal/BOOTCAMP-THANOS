//? ARRAYS --> Sirven para guardar VARIOS VALORES dentro de una misma variable


const nombre = 'Ivan'

//  Para crear de forma literal un array usamos los corchetes []
const nombres = ['Ivan', 'Darío', 'Ismael', 'Viviana', 'Adrián', 'Jose'] // 0x455756

// Podemos tener arrays de cualquier tipo de dato
const numeros = [23, 34, -15, 5.78]

// Podemos tener un array con distintos tipos de valores en el mismo
const variado = [true, 47, '¿Qué tal?', null, [undefined, 13], 'Zapato']

console.log(nombres)
console.log(numeros)
console.log(variado)

//* Los arrays también tienen una propiedad "length" que nos da la longitud del array
console.log('nombres.length ->', nombres.length)



//************************* */
//* Escribir o leer datos de un array -> Uilizando la nomenclatura de los corchetes []

console.log(nombres[0]) // 'Ivan'
console.log(nombres[1]) // 'Darío'
console.log(nombres[2]) // 'Ismael'
console.log(nombres[7]) // undefined

//* Para ver arrays dentro de arrays, concatenamos corchetes
console.log(variado[4][1]) // 13
const posicion = 8

nombres[2] = 'Hector' // 0x455756
nombres[6] = 'Pepe' // 0x455756
nombres[nombres.length] = 'Ismael' // 0x455756
nombres[posicion] = 'Raul' // 0x455756
nombres[100] = 'Juan'
nombres[101] = ['🍐', '🍎'] // 0x455756    -->  0x123456

nombres[101][nombres[101].length] = '🍌'
nombres[101][nombres[101].length] = '🍇'

console.log(nombres)

//***************************/

//* Hay que decir que los String se comportan de manera parecida a un array
const texto = 'Hola'
console.log(texto.length) // 4
console.log(texto[1]) // 'o'
console.log(texto.indexOf('o')) // 1