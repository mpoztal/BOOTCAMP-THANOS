//? Condicionales
const num1 = 15
const num2 = 15
const nombre = 'Ivan'

//* IF...      SI se cumple ESTO... HAZ ESTO

  //? Operadores condicionales

  //* Mayor que...   -->  >
  if (num1 > 15) {  
    console.log(num1 + ' es mayor que 15')
  }

  //* Menor que...  -->   <
  if (num2 < 7) {
    console.log(num2 + ' es menor que 7')
  }

  //* Mayor o igual que...  -->   >=
  if (num1 >= 15) {  
    console.log(num1 + ' es mayor o igual que 15')  
  }

  //* Menor o igual que...  -->   >=
  if (num2 <= 5) {  
    console.log(num2 + ' es menor o igual que 5')  
  }


  //* Igual que...   -->   ==
  //! UN SOLO IGUAL siempre es ASIGNACIÓN. 2 o 3 iguales son PREGUNTA

  if (nombre == 'Ivan') {
    console.log('Nombre es igual a Ivan')
  }

  //* Igual que...(PERO DE VERDAD DE LA BUENA) --> ===

  if (num1 == '15') {
    console.log('num1 es igual a 15')
  }

  if (num1 === '15') {
    console.log('num1 es igual a 15')
  }


  //* Distinto a...   -->   !=
  if (num1 != 'hola') {
    console.log('num1 no es igual que "hola"')
  }


  //* Distinto a, pero de verdad, también de tipo  -->  !==
  if (15 !== '15') {
    console.log('num1 es distinto de "15"')
  }

  //************************************ */

  //* Podemos añadir más preguntas con los operadores:

    //* AND...   -->   &&
    //! Necesita que TODAS LAS PREGUNTAS SEAN TRUE para devolver TRUE 

      //        false
    //    true   &&    false    
    if (5 > 3  &&  nombre === 'Ivan') {
      console.log(true)
    }

    if ((5 > 3) && (nombre !== 'Ivan')) {
      console.log(true)
    }

    //* OR...   --> ||
    //! Si hay, por lo menos uno de los dos lados en true, todo devuelve true

      //        true
    //   true   ||      false
    if (5 > 3 ||  nombre === 'Ivan') {
      console.log(true)
    }

    // Podemos combinarlos como queramos

          //                    true
      //       false       ||   true   ||      false
    //   true  &&  false   ||   true   ||  false  && true
    if (7 > 2 && nombre !== 'Carlos' || 14 % 2 === 0 || nombre === 'Ivan' && 14 / 2 === 7) {
      console.log(true)
    }


    //? ÁMBITO DE LAS VARIABLES -> 👁 Cuidado con el "scope" de las variables. let y const crean variables locales,  var  no
    //* Esto es una variable global 
    const miNombre = 'Ivan'
    let contador = 1

    if ( 2 === 2) {
      console.log(miNombre)
      const otroNombre = 'Jessica'
      var miEdad = 40


      if (1 == 1) {
        console.log(otroNombre)
      }
      
    }

    if ('Ivan' === 'Ivan') {
      // Si creas una variable dentro de un bloque que se llama igual que una de fuera, no pasa nada, pero simplemente tienes que saber que ahora desde dentro solo podrás acceder a la nueva que has creado dentro y la de fuera no la vas a poder modificar.
      let contador = 1
      contador += 1
      console.log(contador)
    }

    console.log({contador})
    console.log(miEdad)

    //! Aquí no existe otroNombre
    // console.log(otroNombre)

    //********************************* */

    //*EXTRA! Javascript interpreta algunos valores como verdaderos ("truthy") y otros como falsos ("falsy")
      /**
       * true --> true
       * false --> false
       * 33546.4325 --> true
       * 0 --> false
       * "dksljgg" --> true
       * "8545" --> true
       * "" --> false
       * null --> false
       * undefined --> false
       * [] --> true
       * {} --> true   
       * 
       * 
       */


    const ciudad = null

    if (ciudad) {
      console.log(ciudad)
    }

    //* EXTRA 2!!! Si utilizamos una admiración delante de un valor, lo estamos invirtiendo (Se llama operador de negación) ¡NO!

    const valor = "Hola"

    if (!valor) {
      console.log('NO hay valor')
    }else {
      console.log('SÍ hay valor')
    }

//**************************** */



//* ELSE IF... -->  EN CAMBIO, SI SE CUMPLE ESTO....HAZ ESTO 
//! Cuando ENTRA en un if o en un else if (cuando se cumple uno), el resto se los salta.


if (nombre === 'Ivan') {
  console.log('Hola, Ivan')
}else if (nombre === 'Carlos') {
  console.log('Hola, Carlos')
}else if (nombre === 'Javier') {
  console.log('Hola, Javier')
}



//* ELSE...  --> Si NO SE CUMPLE NADA DE LO ANTERIOR...entonces HAZ ESTO


if (13 % 2 === 0) {
  console.log("Es par")
}else {
  console.log("Es impar")
}

if (num1 > num2) {
  console.log('num1 es mayor que num2')
}else if (num1 < num2) {
  console.log('num1 es menor que num2')
}else {
  console.log('num1 y num2 son iguales')
}

//* EXTRA!!!!! SI LO QUE SE VA A EJECUTAR ES UNA SOLA LÍNEA, PODEMOS ELIMINAR LAS LLAVES

if (num1 > num2) console.log('num1 es mayor que num2')

else if (num1 < num2) console.log('num1 es menor que num2')

else console.log('num1 y num2 son iguales')



//*************************************/

//? SWITCH
//* Este lo usamos, sobretodo, cuando tenemos opciones concretas

console.log('*****************')

const color = 'ñsdfljhg'


console.time('IF')
if (color === 'rojo') {
  console.log('Has escogido el color de la pasión 💘')

} else if (color === 'verde') {
  console.log('Has escogido el color esperanza 🌿')

} else if (color === 'amarillo') {
  console.log('Has escogido el color del Sol 😎')

} else {
  console.log('No has escogido un color molón 🤘')
}
console.timeEnd('IF')


console.time('SWITCH')
switch (color) {
  case 'rojo': {
    console.log('Has escogido el color de la pasión 💘')
    break
  }
  case 'verde': {
    console.log('Has escogido el color esperanza 🌿')
    break
  }
  case 'amarillo': {
    console.log('Has escogido el color del Sol 😎')
    break
  }
  default: {
    console.log('No has escogido un color molón 🤘')
  }
}
console.timeEnd('SWITCH')

 


const nota = prompt('Dime una nota del 0 al 10')