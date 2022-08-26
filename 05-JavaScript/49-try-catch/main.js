
//* en javascript tenemos un Objeto de tipo Error que podemos crear en cualquier momento --> usualmente se "LANZA UN ERROR" con throw
//! Cuando javascript llega a un throw, para la ejecución

const suma = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    // console.error('Tiene que ser un número')
    // return
    throw { errorNumber: 45, errorMessage: 'Tiene que ser un número'}
  }
  return a + b
}

const resta = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
   
    throw new Error('Tiene que ser un número')
  }
  return a - b
}




try {
  console.log(suma(5, true))
  //! como la función suma lanza un error el try se para
  console.log(resta(5, 3))
  console.log('Estoy dentro del try')
} catch (err) {
  console.error(err.errorMessage)
} finally {
  console.log('Esto siempre se ejecuta')
}


console.log('Yo estoy al final de todo')