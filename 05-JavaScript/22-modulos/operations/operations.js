//* Podemos exportar directamente en la línea de lo que queremos exportar
// export const sumar = (num1, num2) => +num1 + +num2
// export const restar = (num1, num2) => num1 - num2
// export const multiplicar = (num1, num2) => num1 * num2
// export const dividir = (num1, num2) => num1 / num2

const sumar = (num1, num2) => +num1 + +num2
const restar = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2  // FUNCIONES YA SIMPLIFICADAS
const dividir = (num1, num2) => num1 / num2

// export default 'Ivan'
const nombre = 'Ivan'
const array = [1, 2, 3]

// ! Ojo! porque este archivo se ejecuta siempre cuando lo importamos así que se verá este console.log
console.log('hola desde operaciones.js')

//* Cualquier archivo permite exportar UN SOLO ELEMENTO por defecto con ésto q se nombra abajo.
export default sumar


//* También permite exportar todos los elementos que quieras de forma "nombrada", dentro de un objeto
export { restar, multiplicar, dividir, nombre, array }

                       //ESTRUCTURA
   // 1º SE NOMBRAN LAS VARIABLES
   // 2º SE CREAN LAS FUNCIONES
   // 3º SE EXPORTAN 
