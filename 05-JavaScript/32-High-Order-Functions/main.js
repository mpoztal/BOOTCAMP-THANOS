//? High Order Function --> HOF
// Como definición una HOF es una función que recibe como parámetro otra función (también puede retornar una función)


//* La siguiente función SOLO IMPRIME HOLA (está en global)
const saludar = () => {
  console.log('hola')
}


//* La siguiente función SOLO REPITE CÓDIGO 10 VECES. Lo que sea que vaya a repetir esas 10 veces se lo pasamos como parámetro
//* Ésta primera parte es la parte de creacion (de la funcion de hastadiez)

const hastaDiez = (fn) => {

  for (let i = 1; i <= 10; i++) {
    // algo
    fn()
  }

}

const suma = (a, b) => {
  const result = a + b
}

suma(5, 3)

//* Gracias a la HOF podemos repetir 10 veces LO QUE ME DE LA GANA

const despedir = (nombre) => {
  console.log('Adios ' + nombre )
}

// Si no tiene parámetros la función que le pases, podemos poner solo la palabra (es decir, la referencia a la función)
hastaDiez(saludar)

// si necesitara parámetros la función que le pasas tendrías que pasarle al HOF una función anónima
hastaDiez(() => {despedir('Ivan')})

// Podemos, si queremos NO PASARLE UNA FUNCIÓN QUE YA EXISTA. Podemos directamente escribir una función en línea

hastaDiez(() => {console.log('eiiii')})

let star = '*';
hastaDiez(() => { 
  console.log(star); 
  star += '*'  
})

//*********************************************/

//* Vamos a crear una HOF que, además de repetir código, ENVÍE un valor por parámetro

const hastaCinco = (fn) => {

  for (let i = 1; i <= 5; i++) {
    fn(i)
  }

}



const resta = (num1, num2) => {
  console.log(num1 - num2)
}




// podemos utilizar la función SIN UTILIZAR ese "regalo" que me ofrecen
hastaCinco(() => { console.log('veinte') })



// Ahora voy a usar ese parámetro que me "regalan"
hastaCinco((index) => { console.log(index) })

hastaCinco((index) => { console.log(index * 2) })



const hastaQueQuieras = (desde, hasta, fn) => {

  for (let i = desde; i <= hasta; i++) {
    fn(i)
  }

}

hastaQueQuieras(-15, 50, (index) => {

  if (index % 3 === 0 && index % 5 === 0) console.log('FizzBuzz')
  else if (index % 3 === 0) console.log('Fizz')
  else if (index % 5 === 0) console.log('Buzz')
  else console.log(index)

})


//*********************************************/

//* Vamos a crear una HOF que lo único que haga sea recorrer un array de principio a fin

const recorredorDeArrays = (array, fn) => {

  for (let i = 0; i < array.length; i++) {
    fn(array[i], i)
  }

}


const frutas = ['🍐', '🍎', '🍌', '🍇', '🍊']
const numeros = [3, 7, 15, -5, 14]

recorredorDeArrays(frutas, (fruta, index) => { 
  console.log(`Fruta Nº${index + 1} --> ${fruta} `) 
})

recorredorDeArrays(numeros, (num) => { console.log(num) })

recorredorDeArrays(frutas, function(fruta) { 
  if (fruta === '🍎') console.log(fruta + ' Soy Robin Hood 🏹')
  else console.log(fruta) 
})

const arrayDuplicados = []

recorredorDeArrays(numeros, function(num) {

  arrayDuplicados.push(num * 2)
  
})

console.log(arrayDuplicados)