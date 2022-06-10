//* Ejercicio 1

/**
 * Escribir un programa que calcule el número de segundos que existen en un día: 
    Crea 3 variables, horas minutos y segundos.
    Multiplica los segundos de un minuto por los minutos y por las horas.
    Guarda el resultado en una nueva variable.
    Imprime en consola el resultado con una frase tipo:
        "Un día tiene 86400 segundos"
 */

const horas = 24
const minutos = 60
const segundos = 60

const resultado = horas * minutos * segundos

console.log('Un día tiene ' + resultado + ' segundos')
console.log(`Un día tiene ${resultado} segundos`)

//* Ejercicio 2

/**
 * 
 * Hacer un conversor de euros a dólares.
      Creamos una variable llamada "euros" con un valor inicial de 7. Tenemos que 
      calcular el valor en dólares.
      
      Suponemos que un euro son 2 dólares.
      
      Imprimir resultado en consola
 */

const euros = 7
const ratioEurDol = 1.3

const conversion = euros * ratioEurDol
console.log(`${euros}€ son ${conversion}$`)

//* Ejercicio 3
/**
 * 
 * El IVA de unos artículos es del 21%. Realiza un programa que a partir de una variable "precio" inicializada en 135, calcule el precio con IVA añadiendo el símbolo de € al final.
 */

const IVA = 1.21
const precio = 135

// 135 + 21%
// 135 + ((135 * 21) / 100)

// const precioConIVA = precio + ((precio * IVA) / 100)
const precioConIVA = precio * IVA

console.log(`${precio}€ más el ${IVA}% de IVA es ${precioConIVA}€`)