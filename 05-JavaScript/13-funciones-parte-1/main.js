//! Antes que nada vamos a ver la diferencia entre guardar en una variable "por valor" o "por referencia"

// guardar por valor

let nombre = 'Ivan'
nombre += ' Luengo'

const nombre2 = nombre
nombre = 'Jessica'

console.log(nombre)
console.log(nombre2)


// guardar por referencia
const frutas = ['🍎', '🍌']  // 0x789

const otrasFrutas = frutas // 0x789 //!mal!!

otrasFrutas[2] = '🍇' // 0x789

console.log(frutas)
console.log(otrasFrutas) 

//* La manera más moderna de duplicar un array es utilizando el spread operator

const misFrutas = [...frutas] // 0x378

misFrutas[3] = '🍋'
// Con el spread operator
console.log('Con el spread operator')
console.log(frutas)
console.log(misFrutas)


//*******************************/
//* Funciones
//* Son bloques de código reutilizables

// Crear la función
function saludo () {  // 0x21654
  console.log('¡Hola!')
}

// invocar o llamar a la funcion
saludo()
saludo()
saludo()


//* particularmente si usamos la palabra function, podemos invocar a la función antes incluso de crearla

despedida() 

function despedida () {
  console.log('¡Adiós!')
}








//* Para ñadirle dinamismo podemos pasarle parámetros
// Primero pensemos en que somos los creadores de la función y que "obligamos" al que la use a añadirnos un nombre
function saludoPersonalizado (nombre) {
  console.log(`¡Hola, ${nombre}!`)
}

// a la hora de ejecutar la función vemos que necesitamos pasarle un nombre por parámetro
saludoPersonalizado('Carlos')
saludoPersonalizado('Jessica')
saludoPersonalizado(23)


//* si no me envían nada podemos resolverlo:

// dando un valor por dececto
function buenosDias (nombre = 'amig@') {
  console.log(`Buenos días, ${nombre}`)
}

buenosDias('Ivan')
buenosDias()

// resolviendo el problema dentro de la función
function buenasTardes (nombre) {
  if (nombre === undefined) {
    console.log(`Buenas tardes, amig@`)
  } else {
    console.log(`Buenas tardes, ${nombre}`)
  }
}

buenasTardes('Jessica')
buenasTardes()
buenasTardes(null)
buenasTardes(0)
buenasTardes('')

//* Para resolver que me pasen un string lo podemos hacer con "typeof"
function buenasNoches (nombre) {
  if (typeof nombre !== 'string') {
    console.error('pásame un string')
  }else {
    console.log('Buenas noches, ' + nombre)
  }
}

buenasNoches(923847)
buenasNoches()
buenasNoches(null)
buenasNoches('Ivan')


//* Podemos pasar varios parámetros a una función

function sumar (num1, num2) {
  console.log(num1 + num2)
}

sumar(5, 7)