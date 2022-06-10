/* Esto es un comentario
de bloque
*/

// Comentario de línea

//? Cosas a saber de JavaScript
//* 1: Lenguaje "case sensitive" -> mayúsculas y minúsculas importan

//* 2: Es un lenguaje de TIPADO DÉBIL -> no necesita que le digamos el tipo de datos que van a contener las variables, y además nos deja cambiar el tipo de dato cuando queramos

//* 3: JavaScript va a intentar mostrarte el MÍNIMO NÚMERO DE ERRORES POSIBLE

//* 4: Cada SENTENCIA se puede terminar con punto y coma o no.

console.log('Hola desde el archivo main.js')
console.log('adios')


//? VARIABLES
//! Las variables no deberían empezar con mayúsculas
//! No pueden empezar con número
//! Nada de símbolos raros, ñ, acentos, etc
//! forma tradicional de declarar una variable---- var edad = 35

let MiNombre   //! ¡Mal!
//let 2coches //! ¡Mal!
let cañón = 3 //! Funciona pero no es recomendable

//* Recomendación de escritura --> CamelCase
let nombredeusuario   //! ¡Mal!
let nombre_de_usuario //? Regulero
let nombreDeUsuario  //* ¡Bien!





//* Forma tradicional de declarar una variable -> no se recomienda su uso
var edad = 35  // 0x654651


//* let -> Crea una variable y permite que se le cambie el valor más tarde.

// podemos crear una variable sin asignarle un valor
// Declarar una variable
let nombre

// Inicializar la variable
nombre = 'Ivan'

// Modificación de la variable
nombre = 'Jessica'

console.log(nombre)

// Declarar e inicializar una variable
let miNombre = 'Ivan'

console.log('eiiiiii');

//* const -> crea una variable que va a permanecer constante, no me va a dejar cambiarla más tarde
//! No permite SOLO DECLARARLA

const miEdad = 23
// miEdad = 34 //! Esto da error


//*********************************/

//? Cómo mostrar datos para "debuggear"


//* alert -> Lanza EN EL NAVEGADOR una ventana de alerta
//alert(miNombre) // el código se para aquí hasta que aceptes

//* confirm -> Como un alert pero que da opción de aceptar y cancelar
// confirm('¡Estás segur@?')

//* document.write -> Esto se escribe directamente en el documento html 
//! Nos hemos encontrado que actualmente no se puede utilizar desde un archivo js
// document.write('Texto que se escribe')


//* console.log -> Imprime en consola
console.log('**********************');
console.log('Hola');

// Podemos escribir varios datos usando el console.log -> separados con coma

console.log('Hola',  23,  'adios')

// el objeto console también puede imprimir diferentes cosas
console.error('Esto es un error')

console.warn('Esto es un warning')

// Calculador de tiempo
console.time('Cronómetro1')
console.log('...........tiempo que pasa.......')
console.timeEnd('Cronómetro1')


//* Podemos pedir datos al usuario usando prompt

const tuEdad = prompt('Dime tu edad')

console.log(tuEdad)
