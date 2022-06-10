const texto = 'Hola. Qué pasa, ¿tronco?'

//* Todos los String tienen una propiedad llamada "length" que me da la información de la longitud que tiene el string

console.log(texto.length) // 18

//! Casi todos los métodos NUNCA CAMBIAN EL VALOR ORIGINAL, simplemente devuelven un nuevo valor que podemos utilizar directamente o guardarlo en una variable


//* trim() --> para eliminar espacios delante y detrás
const textoTrimeado = '    hola   '.trim()
console.log({textoTrimeado}) // "hola"



//* .toLowerCase() y .toUpperCase() --> pasan el string a minúsculas o mayúsculas
const textoMayusculas = texto.toUpperCase()
const textoMinúsculas = texto.toLowerCase()
console.log({textoMayusculas})
console.log({textoMinúsculas})


//* .indexOf('') --> Devuelve la posición QUE SE ENCUENTRA donde está el texto que hemos puesto en el paréntesis
//! Siempre empezamos con el índice 0!!!

console.log( 'Índice de "?"', texto.indexOf('¿') ) // 16
console.log( 'Índice de "pasa" ', texto.indexOf('pasa') )

console.log( 'Índice de "a" ', texto.indexOf('a') )
console.log( 'Índice de "a" despues de la posición 5 ', texto.indexOf('a', 5) )

// Si no lo encuentra devolverá -1
console.log( 'Índice de "zapato" ', texto.indexOf('zapato') )



//* .lastIndexOf('') --> Exactamente lo mismo, pero te devuelve la posición del último que se encuentra

console.log( 'Último Índice de "a" ', texto.lastIndexOf('a') )


//* .includes('') --> Devuelve "true" o "false" dependiendo de si el texto que le pides está dentro del String

console.log('Incluye "pasa" ->', texto.includes('pasa'))
console.log('Incluye "zapato" ->', texto.includes('zapato'))
console.log('Incluye "?" ->', texto.includes('?'))



//* slice(donde empieza [,donde acaba]) --> Corta un trozo de texto desde una posición inicial hasta una final
console.log(texto)
console.log(texto.slice(7, 14))
console.log(texto.slice(7)) // si no le pasas un segundo valor cortará hasta el final


//* .split('') --> Convierte un texto en un array. Va a separar el texto utilizando lo que le pases en los paréntesis

console.log(texto.split('')) // crea un array con cada una de las letras por separado
console.log(texto.split(' ')) // crea un array separando el texto según sus espacios