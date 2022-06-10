//? Operadores matemáticos

const num1 = 10
const num2 = 5



//* Sumar --> +

const suma = 10 + 7

const suma2 = num1 + num2
console.log({suma})
console.log({suma2})

// El operador de suma también sirve para CONCATENAR textos

console.log('hola' + ' mundo')


//! Cosas raras/curiosas -> cuando sumamos, si hay un string va a intentar convertir el otro valor en un string

console.log('hola ' + 25)
console.log(false + ' mentiroso')
console.log(undefined + ' lo que sea')
console.log(null + ' valor nulo')
console.log(['peras', 'manzanas'] + ' array de frutas')


//* Restar --> -

const resta = num2 - num1
console.log({resta})

//! Cosas raras/curiosas -> el signo menos intenta convertir el otro elemento en Number

console.log("5 - '3' ->", 5 - '3')
console.log("'5' - 3 ->", '5' - 3)
console.log("5 - true ->", 5 - true)
console.log("5 - false ->", 5 - false)
console.log("5 - undefined ->", 5 - undefined) //! NaN Not a Number
console.log("5 - null ->",5 - null)



//* Multiplicación --> *

const multi1 = num1 * num2
console.log({multi1})

// Como extra, si utilizamos 2 asteriscos nos hace la potencia

const potencia = num1 ** num2 // 10 elevado a la 5
console.log({potencia})



//* División --> /

const division = num1 / num2
console.log({division})


//* Módulo -> Devuelve el resto que queda cuando un número se divide por otro, como cuando dividíamos con la caja en L en el cole -->  %

const modulo1 = 10 % 2
const modulo2 = 25 % 2

const modulo3 = 26546413516541 % 11
console.log('10 % 2 ->', modulo1)
console.log('25 % 2 ->', modulo2)
console.log('26546413516541 % 11 ->', modulo3) // no es múltiplo de 11


//* EXTRA 1: Siempre que queramos acortar el número de decimales utilizaremos la funcion "toFixed()"
//! PERO!!!! toFixed() convierte el número a string
const divisionInexacta = 10 / 3
const divisionDosDecimales = divisionInexacta.toFixed(2)

console.log(divisionInexacta)
console.log(divisionDosDecimales)

//* EXTRA 2: Para transformar cualquier valor a número (siempre que se pueda) utilizaremos:
  //* parseInt() -> transforma el string en un ENTERO
  console.log( 'parseInt("25") ->',  parseInt('25')  )
  console.log( 'parseInt("25.77") ->',  parseInt('25.77')  )

  //* parseFloat() -> transforma el string en un FLOAT (decimal)
  console.log( 'parseFloat("25") ->',  parseFloat('25')  )
  console.log( 'parseFloat("25.77") ->',  parseFloat('25.77')  )

  
  //* Number() -> Transforma el string en un número
  console.log('Number("13")  ->', Number('13') )
  console.log('Number("13.340687")  ->', Number('13.340687') )
  console.log('Number(true)  ->', Number(true) )
  console.log('Number(false)  ->', Number(false) )
  console.log('Number(undefined)  ->', Number(undefined) )
  console.log('Number(null)  ->', Number(null) )

 

//? Operadores de asignación
// Asignar es dar un valor a una variable

//*   =    -> Asignar y reasignar de forma normal

let nombre = 'Ivan'
nombre = 'Jessica'



//*  +=   -> Asigna un nuevo valor SUMANDO

let libro = 'Harry Potter'

libro = libro + ' y la piedra filosofal' // esto
libro += ' y la piedra filosofal'        // y esto es lo mismo



let numero = 1  // 1
numero = numero + 1  //1 + 1
numero = numero + 1 // 2 + 1
numero += 1 // 3 + 1
numero += 1 // 4 + 1

console.log(numero)

//* Ocurre exactamente lo mismo con todos los operadores matemáticos
  //*  numero += 2  -->  numero = numero + 2
  //*  numero -= 2  -->  numero = numero - 2
  //*  numero *= 2  -->  numero = numero * 2
  //*  numero /= 2  -->  numero = numero / 2
  //*  numero %= 2  -->  numero = numero % 2



  //? Operadores de incremento y decremento
  //* Básicamente es exactamente lo mismo que hemos hecho antes pero si queremos hacerlo de 1 en 1
  //! OJO porque también cambia el valor de la variable por uno nuevo

  let num = 50
  num = num + 1 // 51
  num += 1      // 52
  num -= 1      // 51
  num++         // 52
  num++         // 53
  num++         // 54
  num--         // 53
  num--         // 52

  console.log(num)

  




 


  

  