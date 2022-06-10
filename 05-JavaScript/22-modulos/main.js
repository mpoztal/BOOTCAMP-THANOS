//* el import por defecto, te permite ponerle el nombre que quieras a la importación
//* Si quisieras cambiarle el nombre a una propiedad "nombrada" utilizamos un alias con la palbra --> as

import supersuma from './operations/operations.js'
import {restar as superresta, multiplicar, dividir} from './operations/operations.js'
// import supersuma, { restar as superresta, multiplicar, dividir } from './operations/operations.js'

//* Podemos importar todo de golpe con el asterisco y añadiendo un alias. Dentro de esa variable estaran todas las exportaciones como propiedades del objeto
// import * as operaciones from './operations/operations.js'

let num1 = prompt('Primer número')
let num2 = prompt('Segundo número')
let operacion = prompt(`
¿Qué quieres hacer?
+ sumar
- restar
* multiplicar
/ dividir
`)

//* If con las operaciones normales
if (operacion === '+') {
  console.log(supersuma(num1, num2))
}else if (operacion === '-') {
  console.log(superresta(num1, num2))
}else if (operacion === '*') {
  console.log(multiplicar(num1, num2))
}else if (operacion === '/') {
  console.log(dividir(num1, num2))
}

// //* If con las operaciones importadas con asterisco
// if (operacion === '+') {
//   console.log(operaciones.default(num1, num2))
// }else if (operacion === '-') {
//   console.log(operaciones.restar(num1, num2))
// }else if (operacion === '*') {
//   console.log(operaciones.multiplicar(num1, num2))
// }else if (operacion === '/') {
//   console.log(operaciones.dividir(num1, num2))
// }
