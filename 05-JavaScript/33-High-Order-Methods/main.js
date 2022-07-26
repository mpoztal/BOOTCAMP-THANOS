//? High Order Methods --> HOM

//* Voy a repetir la última HOF que teníamos en la carpeta  31
/*
const recorredorDeArrays = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i)
  }
}

const frutas = ['🍐', '🍎', '🍌', '🍇', '🍊']
const numeros = [4, 7, -5, 4, 23]

const imprimirFrutas = (fruta) => {
  console.log(fruta)
}

recorredorDeArrays(frutas, (fruta) => imprimirFrutas(fruta))

//* PRIMER MÉTODO DE PRIMERA CLASE --> .forEach()
//? HACE LO MISMO QUE UN FOR...OF PERO QUE ADEMÁS TE DA TAMBIÉN EL ÍNDICE


frutas.forEach( (fruta, index) => console.log(`${fruta} está en el índice ${index} del array`) )

numeros.forEach( (num) => console.log(num * 2) )
*/



//******************************************/
/*

//* HOF que:
 // 1.- recorre un array
 // 2.- me da cada elemento del array y el índice
 // 3.- me deja hacer LO QUE QUIERA con ese elemento
 // 4.- me lo añade un un NUEVO ARRAY
 // 5.- me retorna el array nuevo entero

  const modificadorDeArrays = (array, callback) => {
    const nuevoArray = []

    for (let i = 0; i < array.length; i++) {
      
      // const elementoModificado = callback(array[i])
      nuevoArray.push('hola') // [8, 14]

    }

    return nuevoArray
  }

  const numerosDuplicados = modificadorDeArrays(numeros,  (num) => {
   return num * 2 
  })

  console.log(numeros)
  console.log(numerosDuplicados)

  //* El método que MODIFICA LOS ELEMENTOS DE UN ARRAY y los DEVUELVE EN UN NUEVO ARRAY se llama --> .map()

  const nuevoArray = numeros.map((num) => {
    // puedo hacer lo que quiera con cada elemento       
    //! lo importante es recordar que al final SIEMPRE SIEMPRE SIEMPRE tendrás que RETORNAR un valor
    //! EN EL MAP, EL RETURN DE TU FUNCIÓN (CALLBACK) ES EL PUSH DEL NUEVO ARRAY

    return num * 2
  
  })

  console.log(nuevoArray)

  // en casos sencillos podemos utilizar las cosas "guays" de las arrow functions
  console.log(numeros.map( (num) => num / 2 ))

*/
  //**********************************/

  //* Creamos un HOF que recorra un array y permita filtrarlo con una condición if  -->  devuelve un nuevo array con los elementos filtrados que cumplan la condición
/*
  const numeritos = [2, 7, 15, 4, 23, 26, 42]

  const filtrarArray = (array, callback) => {
    const nuevoArray = []

    for (let i = 0; i < array.length; i++) {

      if ( callback(array[i], i)) { // lo que me de la gana en el condicional
        nuevoArray.push(array[i])
      }

    }

    return nuevoArray
  }

  const nombres = ['Ivan', 'Adrián', 'Darío', 'Ismael']

  // versión larga
  const filtrarPorI = filtrarArray(nombres,  (nombre) => {
    if (nombre[0] === 'I'){
      return true
    }
  })

  //* El método que FILTRA CON UNA CONDICIÓN EN EL RETURN se llama --> .filter() 
      te devuelve un nevo array según una condición.  

  //! si ningún elemento cumple la condición devolverá un aray vacío
    // versión corta
  const filtrarPorA = nombres.filter( (nombre) => {
    return nombre[0] === 'A'
  })

  //versión cortísima
  const filtrarPorD = nombres.filter( (nombre) => nombre[0] === 'D')


  console.log(filtrarPorD)

  */ // (si ponemos las {} se necesita el return, xq si no, no funciona.)

  
  //*************************************************/

  //* Voy a hacer UN HOF que me devuelva UN SOLO ELEMENTO que cumpla una condición 
/*
  const nombres = ['Ivan', 'Adrián', 'Darío', 'Ismael']

  const encontrarElemento = (array, callback, fromIndex) => {

    for (let i = fromIndex; i < array.length; i++) {

      if (   callback(array[i], i)   ) {
        return array[i]
      }

    }

  }


  
  const nombreConI = encontrarElemento(nombres,  (nombre) => {
    return nombre[0] === 'I'
  })

  
  //* El método que te devuelve UN ÚNICO ELEMENTO del array que cumpla la condición se llama --> .find()
  
  //! solo devuelve el primero que encuentre
  //! si no lo encuentra devolverá undefined
  
  const nombreConA = nombres.find((nombre) => {
    return nombre[0] === 'A'
  })

  const nombreConD = nombres.find((nombre) => nombre[0] === 'D')

  console.log(nombreConD)

  */
  //**************************/

  //* .some() --> Método que devuelve "true" o "false" si ALGUNO de los elementos del array CUMPLE CON LA CONDICIÓN

  const frutas = ['🍎', '🍐', '🍌', '🍇']
  
  // el includes solo pregunta por el valor entero
  console.log(frutas.includes('🍐'))


  console.log(frutas.some( (fruta) => { 
    return fruta === '🍐'
  } ))

  console.log(frutas.some((fruta) => fruta === '🍊'))

  //* .every() --> Método que devuelve "true" o "false" si TODOS los elementos del array CUMPLEN CON LA CONDICIÓN

  console.log(frutas.every((fruta) => fruta === '🍐')) // false

  console.log(frutas.every((fruta) => typeof fruta === 'string')) // true

 