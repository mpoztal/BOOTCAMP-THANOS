const hola = () => {
    console.log('Holaaaa')
}
hola()

const holaPersona = (nombre = 'amig@') => {
    console.log(`Hola, ${nombre} que tal estas?`)
}

holaPersona('Diego')

const suma = (num1, num2) => {
    const resultado = num1 + num2
    console.log(resultado)
    return resultado
}
const sumaDe13y1 = suma(13,1)

// Ejercicio: Dame el total de la suma de los siguientes números. 
const numeros = [1,2,3,4] // Me dan éste array
let total = 0            // Después creo el acumulador.

for (let num of numeros){
    total = total + num
}

console.log(total)


// Funcion, true si el nº que le pasamos es primo.

const esPrimo = (numero) => {
    let esPrimo = true
    
    for (let i = 2; i < numero && esPrimo; i++){
        if (numero % i === 0) {
            esPrimo = false
        }
    }

    if (esPrimo) 
    console.log (`El número ${numero} es primo`)
    else console.log(`El número ${numero} no es primo`)
    return esPrimo
}
console.log(esPrimo(13))
console.log (esPrimo(27))
esPrimo(351)


// Ejemplo de función que elimina las vocales de una frase
const quitarVocales = (texto) => {

    const vocales = ['a', 'á', 'à', 'ä', 'â', 'é', 'è', 'ë', 'ê', 'e', 'i', 'í', 'ì', 'ï', 'î', 'i', 'o', 'ó', 'ò', 'ö', 'ô', 'u', 'ú', 'ù', 'ü', 'û']
  
    let result = ''
  
    for (const letra of texto) {
        const letraNoEsVocal = !vocales.includes(letra)
        if (letraNoEsVocal) result = result + letra
    }
    return result
}

const asw = prompt('Escribe un texto')
console.log(quitarVocales(asw))


// INICIO -  DECLARACIÓN DE FUNCIÓN
const frutas = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras','Uvas', 'Pomelos']
const objetos = ['pelota','trompeta','canicas']

const positionElement = (nombreElement,array) => {
    
    
    let result = array.indexOf(nombreElement)
    
    return result  
}
// FIN - DECLARACIÓN DE FUNCIÓN

// LLAMADA DE FUNCIÓN
const valor = positionElement('pomelo',frutas)
console.log(valor)
// LAMADA DE FUNCIÓN 
console.log(positionElement('Manzanas', frutas))
console.log(positionElement('trompeta', objetos))


