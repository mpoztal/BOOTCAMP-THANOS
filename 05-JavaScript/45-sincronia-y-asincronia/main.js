//* JavaScript es un lenguaje de UN SOLO HILO DE EJECUCIÓN --> "single threaded"
/*
console.log('Uno')

for (let i = 0; i< 2000000000; i++) {
  let dato = i
}

console.log('Dos')
*/
//* cómo funciona la ejecución de funciones en JavaScript

// http://latentflip.com/loupe/    en esta web podemos hacer pruebas del event loop

/*
console.log('Uno');

cuadrado(5);

console.log('Dos');


function multiplicar (x, y) {
  return x * y
}

function cuadrado (a) {
  console.log(multiplicar(a, a));
}
*/

//* Cosa curiosa --> principios del Asincronismo
// setTimeout siempre se va a esperar a que la pila de llamadas tenga un hueco para poder ejecutar la función que ha dejado en espera
/*
console.log('uno')

setTimeout(function() { console.log('En medio') }, 0)

console.log('dos')

*/

const btnComprar = document.querySelector('button')



let miCompra = 'Carrito --> '

function comprar(callback) {

  // esto es una imatación del servidor tardando
  // pidiendo datos
  // obteniendo usuarios
  //... etc
  let nuevaCaja = ''

  setTimeout(function () {
    nuevaCaja = '📦'  
    callback(nuevaCaja)
  }, Math.random() * 2000)

  console.log(nuevaCaja) //! este va a llegar vacío porque javascript lo ejecuta ANTES DE RECIBIR EL DATO DEL SERVIDOR
}

function callback (miCompra) {
  console.log(miCompra)
}


btnComprar.onclick = () => comprar( callback ) 
btnComprar.onclick = () => comprar( function (miCompra) {  
  console.log(miCompra)
  document.body.append(miCompra)
} ) 
