const frutas = ['🍎', '🍐', '🍌', '🍇']
const numeros = [2, 13, -5, 40]
const zapatos = '🩰'

//* Array.isArray() --> devuelve true si lo que hay en los parentesis es un array
console.log('Array.isArray(frutas) -->', Array.isArray(frutas))
console.log('Array.isArray(zapatos) -->', Array.isArray(zapatos))



//! Los 4 siguientes métodos MUTAN EL ARRAY ORIGINAL
//* push() --> AÑADE un elemento al FINAL DEL ARRAY

console.log('Frutas -->', frutas)
frutas.push('🍊')
console.log('Frutas -->', frutas)

// permite añadir VARIOS ELEMENTOS DE GOLPE

const newLength = frutas.push('🍑', '🍋')
console.log('Frutas -->', frutas)





//* pop() --> QUITA un lemento del FINAL DEL ARRAY
// no hace falta pasarle valores

frutas.pop()
frutas.pop()
console.log('Frutas -->', frutas)




//* unshift() --> AÑADE un elemento al PRINCIPIO DEL ARRAY
frutas.unshift('🍅', '🍆')
console.log('Frutas -->', frutas)



//* shift() --> QUITA un elemento del PRINCIPIO DEL ARRAY
frutas.shift()
console.log('Frutas -->', frutas)


//* indexOf --> devuelve el índice de la posición donde esté lo que le pasemos como parámetro. si no lo encuentra devolverá -1
console.log(numeros)
console.log('numeros.indexOf(13) -->', numeros.indexOf(13)) // 1
console.log('numeros.indexOf(14) -->', numeros.indexOf(14)) //-1


//* includes --> devuelve "true" o "false" si lo que has pasado como parámetro se encuentra en el array
console.log('frutas.includes("🍌") -->', frutas.includes('🍌'))
console.log('frutas.includes("👟") -->', frutas.includes('👟'))

if (frutas.includes('🍎')) {
  console.log('bienn')
}

if (frutas.indexOf('🍎') !== -1) {
  console.log('bieen')
}


//* reverse() --> INVIERTE el orden de los elementos del array
//! también MUTA el array original
numeros.reverse()
console.log(numeros)


//* join() --> lo inverso del split() de los strings. Retorna un string con el separador que le indiquemos

const frase = 'Me encanta estudiar JavaScript'
const fraseArray = frase.split('a')

// si al join no le decimos nada me crea el string separado por comas
console.log(fraseArray.join())
console.log(fraseArray.join(''))
console.log(fraseArray.join('-'))
console.log(fraseArray.join('|'))


console.log(frase.slice(frase.lastIndexOf(' ') + 1).split('a').join(''))
//          frase.slice(20).split('a')
//                ['J', 'v', 'Script'].join('')
//                        JvScript



//* PARA QUITAR O SUSTITUIR ELEMENTOS DE UN ARRAY

//* slice() --> ¡NO MUTA! retorna un pedado de array, no modifica el original

console.log(frutas)
const trozoDeFrutas = frutas.slice(2, 5)
console.log(trozoDeFrutas)



//* splice() --> elimina trozos del array original
//! MUTA EL ARRAY

console.log(frutas)
frutas.splice(2,2)
console.log(frutas)
// Como particularidad, el splice te permite AÑADIR EN EL LUGAR DE LOS ELIMINADOS los elementos que quieras


const cosasRandom = ['👞', '⚡', '🍭']

const trozoCortado = frutas.splice(1,2, '🐟', ...cosasRandom )
console.log(frutas)
console.log(trozoCortado)


// Ejemplo
// Borra del array el pescado y lo sustituyes por una gamba

console.log(frutas)

frutas.splice(frutas.indexOf('🐟'), 1, '🦐' )
console.log(frutas)

// Ejemplo
// Borra del array TODOS LOS PESCADOS y lo sustituyes por una gamba

const arrayDePescados = ['🍆', '🐟', '👞', '⚡', '🐟', '🍭', '🍊', '🐟'];
console.log(arrayDePescados)

for (let i in arrayDePescados) {
  if (arrayDePescados[i] === '🐟') {
    arrayDePescados.splice(i, 1, '🦐')
  }
}

console.log(arrayDePescados)
