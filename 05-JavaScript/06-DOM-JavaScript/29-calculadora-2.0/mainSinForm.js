//* cazamos los botones
const btnAdd = document.querySelector('.add')
const btnSubtract = document.querySelector('.subtract')
const btnMultiply = document.querySelector('.multiply')
const btnDivide = document.querySelector('.divide')

//* cazamos los inputs
const inputFirst = document.querySelector('[name="firstNumber"]')
const inputSecond = document.querySelector('[name="secondNumber"]')

//* cazamos el output
const output = document.querySelector('.output')

//**********************************/


//* Crear las funciones necesarias

const validateInputNumber = (input) => {
  const value = input.value

  if (isNaN(value) || value.trim() === '') {
    input.style.outline = '3px solid tomato'   

    if (!input.nextElementSibling) {
      const error = document.createElement('small')
      error.className = 'error text-danger'
      error.innerHTML = 'Tienes que poner un número'
      input.after(error)  
    }

    return

  }else {
    input.style.outline = 'none'
    if (input.nextElementSibling) {
      input.nextElementSibling.remove()
    }
  }

  return +value
}

const operate = (operation) => {
  const firstValue = validateInputNumber(inputFirst)
  const secondValue = validateInputNumber(inputSecond)

  //filtro
  if (!firstValue || !secondValue) return

  let result
  if (operation === 'add') {
    result = firstValue + secondValue

  } else if (operation === 'subtract') {
    result = firstValue - secondValue

  }else if (operation === 'multiply') {
    result = firstValue * secondValue

  }else if (operation === 'divide') {
    result = firstValue / secondValue
  }

  output.innerHTML = result

  // reset ficticio
  inputFirst.value = ''
  inputSecond.value = ''
  inputFirst.focus()
}


//* Añadimos los "listeners" a cada botón
btnAdd.addEventListener('click', () => operate('add'))
btnSubtract.addEventListener('click', () => operate('subtract'))
btnMultiply.addEventListener('click', () => operate('multiply'))
btnDivide.addEventListener('click', () => operate('divide'))

/* //? Como hemos escrito casi lo mismo 4 veces en cada función, hemos creado una sola llamada operate()
btnDivide.addEventListener('click', () => {
  const firstValue = validateInputNumber(inputFirst)
  const secondValue = validateInputNumber(inputSecond)

  //filtro
  if (!firstValue || !secondValue) return

  const result = firstValue / secondValue

  output.innerHTML = result

  // reset ficticio
  inputFirst.value = ''
  inputSecond.value = ''
  inputFirst.focus()
})
*/