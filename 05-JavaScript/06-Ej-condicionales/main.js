const prompt = require('prompt-sync')()


//* Ejercicio 1
/**
 * Pedir al usuario una nota de examen del 0 al 10.
Si es mayor de 5 mostrar el texto  Aprobado
Si es igual que 5, mostrar  Aprobado por los pelos
Si es menor, mostrar  Suspendido
 */
/*
const notaExamen = Number(prompt('Dime una nota del 0 al 10'))

if (notaExamen > 5) {
  console.log("APROBAD@")
}else if (notaExamen === 5) {
  console.log('APROBAD@ POR LOS PELOS')
}else if (notaExamen < 5){
  console.log('SUSPENDID@')
}else {
  console.error('No has puesto un valor correcto')
}
*/


//* Ejercicio 2
/**
 * Pedir al usuario un número entero. Al recibirlo, escribir en consola lo siguiente:
Si el valor es positivo o negativo.
Si es impar o par.
Si es múltiplo de 5 (que solo aparezca el mensaje si lo es).
Si el valor es mayor que 100, si es menor que 100 o si es igual a 100.
Consideraremos el 0 como positivo
 */
/*
const numUsuario = Number(prompt('Dime un número entero'))

if (numUsuario >= 0) {
  console.log(`${numUsuario} es POSITIVO.`)
}else {
  console.log(`${numUsuario} es NEGATIVO.`)
}

if (numUsuario % 2 === 0) {
  console.log(`${numUsuario} es PAR.`)
}else {
  console.log(`${numUsuario} es IMPAR.`)
}

if (numUsuario % 5 === 0) {
  console.log(`${numUsuario} es MÚLTIPLO DE 5.`)
}

if (numUsuario > 100) {
  console.log(`${numUsuario} es MAYOR QUE 100.`)
}else if (numUsuario < 100) {
  console.log(`${numUsuario} es MENOR QUE 100.`)
}else {
  console.log(`${numUsuario} es 100'.`)
}

*/

//* Ejercicio 3
/**
 * Crea un programa que te pregunta la edad y te da el precio de la entrada que tienes que pagar:
    Menores de 6 entran gratis.
    De 6 a 13 años pagan 4€.
    De 14 a 65 años pagan 7€.
    Mayores de 65 entran gratis.
*/

// let edad = prompt('Dime tu edad entre 2 y 100 y te digo el precio de la entrada.')


// Podemos trabajar comprobando primero los errores (la menra de hacerlo mal)
/*
if ( isNaN(edad) || edad === null || edad === '' ) {
  console.error('No has escrito un número')
}else {
  // aquí hemos asegurado que ha escrito un número y no has dado a cancelar
  edad = Number(edad)
  if (edad < 6 || edad > 65) {
    console.log('¡Tú entras gratis!')
  } else if (edad >= 6 && edad <= 13) {
    console.log('Tú pagas 4€')
  }else {
    console.log('Tú pagas 7€')
  }
}
*/

// También podemos hacerlo a la inversa. Comprobar la forma correcta de hacerlo
/*
if (edad !== null && !isNaN(edad) && edad.trim() !== '' ) {
  edad = Number(edad)
  if (edad < 6 || edad > 65) {
    console.log('¡Tú entras gratis!')
  } else if (edad >= 6 && edad <= 13) {
    console.log('Tú pagas 4€')
  }else {
    console.log('Tú pagas 7€')
  }
} else {
  console.error('No has escrito un número')
}
*/


//* EXTRA!! Hay función que tienen TODOS LOS STRINGS  trim(), que sirve para ELIMINAR ESPACIOS DELANTE Y DETRÁS DE UN TEXTO. En el caso de un string con espacios solo, acabará siendo un string vacío  "" 
/*

let edad = prompt('¿Edad? ')
console.log(edad)
if(edad !== null) {
  // aquí NO LE HAN DADO A cancelar

  if(!isNaN(edad) && edad.trim() !== '' && edad > 1 && edad <= 100) {   
    // aquí sabemos que No es un string ni un string vacío y que la edad está entre 2 y 100
    edad = Number(edad)

    if (edad < 6 || edad > 65) {
      console.log('¡Tú entras gratis!')
    } else if (edad >= 6 && edad <= 13) {
      console.log('Tú pagas 4€')
    }else {
      console.log('Tú pagas 7€')
    }

  }else {
    console.error('No has puesto un número válido.')
  }

}else {
  console.log('No has querido seguir, ¡Chao!')
}
*/

//* EXTRA!! Todos los strings tienen una función llamada .toLowerCase() y .toUpperCase() que convierten el string en minúsculas o mayúsculas.



//* Ejercicio 4

/**
 * Crea un programa que te pregunta el día de la semana y te devuelve el menú de ese día.
    Ej.:  Hoy hay pescado   
 */

/*
const diaSemana = prompt('¿De qué día de la semana quieres saber el menú?')

if (diaSemana !== null) {

  if (diaSemana.trim() !== '' && isNaN(diaSemana)) {

    switch (diaSemana.toLowerCase()) {
      case 'lunes': {
        console.log('Hoy hay pescado 🐟')
        break
      }
      case 'martes': {
        console.log('Hoy hay carne 🍖')
        break
      }
      // Podemos agrupar cases iguales sin utilizar el break
      case 'miercoles':
      case 'miércoles': {
        console.log('Hoy hay ensalada 🥗')
        break
      }
      case 'jueves': {
        console.log('Hoy hay verdura 🌿')
        break
      }
      case 'viernes': {
        console.log('Hoy hay Gazpacho 😀')
        break
      }
      case 'sabado':
      case 'sábado': {
        console.log('Hoy hay Cabrito 🐐')
        break
      }
      case 'domingo': {
        console.log('Hoy hay tofu 🥔')
        break
      }
      default: {
        console.error('No es un día de la semana correcto.')
      }
    }
  
  
  } else {
    console.error('No es un valor correcto')
  }
  
} else {  
  console.log('Adiós')
}
*/

//* Ejercicio 5
/**
 * Escribe un programa que pida al usuario el número del mes (un número entre 1 y 12 y que muestre el número de días que tiene ese mes. 
    No tendremos en cuenta los años bisiestos.
    Si se introduce un número mayor que 12 o menor que 1, se mostrará un mensaje indicando al usuario que el mes elegido es incorrecto.
 */

/*
const mes = prompt('Dime un mes del año:  (1-12)')

if (mes !== null) {
  if(mes.trim() !== '' && !isNaN(mes)) {


    if ( mes === '1'  ||
         mes === '3'  || 
         mes === '5'  || 
         mes === '7'  || 
         mes === '8'  || 
         mes === '10' || 
         mes === '12' ) {
      console.log('Tiene 31 días.')
    } else if (mes === '2') {
      console.log('Febrero tiene 28 días.')          
    }else {
      console.log('Tiene 30 días.')
    }







    switch (mes) {
      case "1": 
      case "3": 
      case "5": 
      case "7": 
      case "8": 
      case "10": 
      case "12": {
        console.log('Tiene 31 días.')
        break
      }
            
      case "2": {
        console.log('Febrero tiene 28 días.')
        break
      }

      case "4":       
      case "6":     
      case "9":   
      case "11": {
        console.log('Tiene 30 días.')
        break
      }
      
    }

  } else {
    console.error('No es un valor correcto');
  }



}else {
  console.log('¡Adiós!')
}

*/

//* Ejercicio 6

/**
 * Escribe un programa que pida la hora al usuario, preguntando las horas, minutos y segundos.
    Se mostrará en pantalla la hora elegida por el usuario un segundo más tarde.
    Si no se pasa una hora correcta se mostrará un mensaje al usuario.
 */

let horas = Number(prompt('Dime las horas:'))
let minutos = Number(prompt('Dime los minutos:'))
let segundos = Number(prompt('Dime los segundos:'))

if (horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59 && segundos >= 0 && segundos <= 59) {

  // Sumar un segundo a los segundos
  segundos++

  // Si los segundos son 60
  if (segundos === 60) {
    // pasar los segundos a 0
    segundos = 0
    // sumar un minuto
    minutos++
  }

  // Si los minutos ahora son 60
  if(minutos === 60) {
    // pasar los minutos a 0
    minutos = 0
    // sumar una hora
    horas++    
  }
  
  // si las horas ahora son 24
  if (horas === 24) {
    // pasar las horas a 0 
    horas = 0
  }

  console.log(`La NUEVA HORA es: ${horas}:${minutos}:${segundos}`)





}else {
  console.error('No es una hora correcta.');
}
