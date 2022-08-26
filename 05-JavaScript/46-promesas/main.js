//? PROMESAS
//* Podemos hacer 2 cosas con las promesas:
  // CREAR UNA PROMESA
  // CONSUMIR UNA PROMESA

//* Toda promesa tiene 3 estados principales:
  // Pendiente ("pending") --> Todavía no se ha finalizado la promesa, ni para bien ni para mal
  // Cumplida ("Fulfilled") --> Se ha cumplida
  // No Cumplida ("rejected") --> no se ha cumplido la promesa


// PARTE 1 --> CREANDO UNA PROMESA

function irAPortAventura () {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const random = Math.random()
      const hemosIdoAPortAventura = random < 0.4
      if (hemosIdoAPortAventura === true) {
        // resolve es un callback que le dice a la promesa que se ha cumplido
        resolve('Bieeen!😃')
      } else {
        // resolve es un callback que le dice a la promesa que NO se ha cumplido
        reject('Ohhh! 😢')
      }
    }, 2500)


  })
}


//* PARTE 2 --> CONSUMIMOS la promesa, decidiendo:
  // qué queremos hacer cuando se cumpla --> .then()
  // qué queremos hacer cuando no se cumpla --> .catch()
  // qué código ejecutar en cualquiera de los dos casos --> .finally()

console.log('Hola')

irAPortAventura()
  .then((valorDelResolve) => {
    console.log(valorDelResolve)
  })
  .catch((error) => {
    console.error(error)
  })
  .finally(() => {
    console.log('Esto se muestra siempre')
  })

console.log('Adios')
