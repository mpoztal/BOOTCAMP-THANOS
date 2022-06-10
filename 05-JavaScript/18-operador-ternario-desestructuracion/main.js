//* Operador Ternario --> Es muy parecido a un if...else pero más cortito


const esPrimo = true

if (esPrimo === true) {
  console.log('El número es primo')
}else {
  console.log('El número no es primo')
}

// podemos usar el ternario como un simple if...else
esPrimo === true ? console.log('El número es primo') : console.log('El número no es primo')

esPrimo
  ? console.log('El número es primo') 
  : console.log('El número no es primo')



//* SOBRETODO el ternario se usa en el sitio donde podrías poner una EXPRESIÓN, es decir, allá donde lo pongas, y según una condición, TODO EL TERNARIO VALDRÁ UN VALOR O OTRO

let texto
if (esPrimo) {
  texto = 'El número es primo'
}else {
  texto = 'El número NO es primo'
}

//? Como valor de una variable
const frase = esPrimo ? 'El número es primo' : 'El número NO es primo'
console.log(frase)

//? Como parte de un texto que tomará un valor o otro
console.log(`El número ${esPrimo ? 'es' : 'no es'} primo`)


//? En el return de una función
function minusMayus (frase, opcion) {
  // if (opcion === true) {
  //   frase = frase.toUpperCase()
  // }else {
  //   frase = frase.toLowerCase()
  // }

  // return frase

  return (opcion === true) ? frase.toUpperCase() : frase.toLowerCase()
}

console.log(minusMayus('Moláis un montón'))


//*****************************************/

//* DESESTRUCTURACIÓN DE ARRAYS

const frutas = ['🍎', '🍐', '🍌']

const manzana = frutas[0]
const pera = frutas[1]
const platano = frutas[2]

console.log(manzana, pera, platano)

const [fruta1, fruta2] = frutas
console.log(fruta1, fruta2)

//! NORMAS DE LA DESESTRUCTURACIÓN DE ARRAYS
//* DA IGUAL EL NOMBRE QUE LE PONGAS a las variables, LO MÁS IMPORTANTE es EL ORDEN en que las creas
//* Si no queremos guardar algún elemento, TENEMOS QUE DEJAR EL HUECO SEPARADO POR COMAS


const [, , frutas3] = frutas  // los espacios son solo para hacer bonito
console.log(frutas3)




//? Caso práctico
const opMatematicas = (num1, num2) => {
  const suma = num1 + num2
  const resta = num1 - num2
  const multiplicacion = num1 * num2
  const division = num1 / num2

  return [suma, resta, multiplicacion, division]
}

const suma = opMatematicas(2,3)[0]
const multi = opMatematicas(2,3)[2]
console.log(suma, multi)

const [sum, , mul] = opMatematicas(4,5)

console.log(sum,  mul)
