//* cazamos la caja de los botones
const operationButtons = document.querySelector('.operation-buttons')

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


//* Añadimos el "listener" a la caja de los botones
operationButtons.addEventListener('click', (evt) => {

  const operation = evt.target.dataset.operation

  if (operation === '+') operate('add')
  else if (operation === '-') operate('subtract')
  else if (operation === '*') operate('multiply')
  else if (operation === '/') operate('divide')  

})
