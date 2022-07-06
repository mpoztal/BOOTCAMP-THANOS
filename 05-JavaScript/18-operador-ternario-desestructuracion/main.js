//* Operador Ternario --> Es muy parecido a un if...else pero más cortito


const esPrimo = true

if (esPrimo === true) {
  console.log('El número es primo')
}else {
  console.log('El número no es primo')
}

// podemos usar el ternario como un simple if...else (va todo en la misma línea)
esPrimo === true ? console.log('El número es primo') : console.log('El número no es primo')
// para hacerlo más vistoso, lo podemos poner de ésta otra forma
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

//? Como valor de una variable(simplificando lo de arriba) aquí adquiere valor de una expresión
const frase = esPrimo ? 'El número es primo' : 'El número NO es primo'
console.log(frase)

//? Como parte de un texto que tomará un valor o otro (dentro del console.log tomará un valor u otro)
console.log(`El número ${esPrimo ? 'es' : 'no es'} primo`)


//? En el return de una función(si opcion = true, convertirá la frase en mayusculas y si no, en minusculas)
function minusMayus (frase, opcion) {
  // if (opcion === true) {
  //   frase = frase.toUpperCase()
  // }else {
  //   frase = frase.toLowerCase()
  // }

  // return frase ( aquí nos da la posibilid. de plantear las dos cuestiones, como el return nos devuelve..podemos usarlo ahí)

  return (opcion === true) ? frase.toUpperCase() : frase.toLowerCase()
}

console.log(minusMayus('Moláis un montón'))


//*****************************************/

//* DESESTRUCTURACIÓN DE ARRAYS

const frutas = ['🍎', '🍐', '🍌']

const manzana = frutas[0] //Modo de sacar la manzana del array y convertirla en variable
const pera = frutas[1]
const platano = frutas[2]
// Ya se puede disponer de estos 3 valores x separado pero, es un poco pesado asi q...
// la desestructuración entra en juego
console.log(manzana, pera, platano)

const [fruta1, fruta2] = frutas // Esta es la sintáxis de la desestructuracion---> const[]=array
console.log(fruta1, fruta2)

//! NORMAS DE LA DESESTRUCTURACIÓN DE ARRAYS (SOLO EN LOS CASOS DONDE HAY UNO O DOS ELEMENTOS EN EL ARRAY)
//* DA IGUAL EL NOMBRE QUE LE PONGAS a las variables, LO MÁS IMPORTANTE es EL ORDEN en que las creas
//* Si no queremos guardar algún elemento, TENEMOS QUE DEJAR EL HUECO SEPARADO POR COMAS


const [, , frutas3] = frutas  // los espacios son solo para hacer bonito
console.log(frutas3)




//? Caso práctico (QUEREMOS Q HAGA LA FUNCIÓN suma, resta,multipl y división )
const opMatematicas = (num1, num2) => {
  const suma = num1 + num2
  const resta = num1 - num2
  const multiplicacion = num1 * num2
  const division = num1 / num2

  return [suma, resta, multiplicacion, division] // esto me devuelve todos los valores de suma,resta...
}

const suma = opMatematicas(2,3)[0]
const multi = opMatematicas(2,3)[2] //para evitar q sea tan pesado ir escribiendo tantas lineas de código
console.log(suma, multi)

const [sum, , mul] = opMatematicas(4,5) //pasariamos const como []array--->[suma,resta,multi...]
                                        // esta seria la desetructuracion

console.log(sum,  mul)
// que solo se quiere ver suma y multiplicacion, pues la resta la ponemos con ,, comas




