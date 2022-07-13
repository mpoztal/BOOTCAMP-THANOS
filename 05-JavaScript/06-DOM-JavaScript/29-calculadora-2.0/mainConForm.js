//* cazamos el formulario
const form = document.querySelector('.main-form')

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

const operate = (evt) => {
  evt.preventDefault()

  const firstValue = validateInputNumber(form.firstNumber)
  const secondValue = validateInputNumber(form.secondNumber)

  //filtro
  if (!firstValue || !secondValue) return


  // let result
  // if (evt.submitter.classList.contains('add')) {
  //   result = firstValue + secondValue

  // } else if (evt.submitter.classList.contains('subtract')) {
  //   result = firstValue - secondValue

  // }else if (evt.submitter.classList.contains('multiply')) {
  //   result = firstValue * secondValue

  // }else if (evt.submitter.classList.contains('divide')) {
  //   result = firstValue / secondValue
  // }

  
  let result
  if (evt.submitter.dataset.operation === '+') {
    result = firstValue + secondValue

  } else if (evt.submitter.dataset.operation === '-') {
    result = firstValue - secondValue

  }else if (evt.submitter.dataset.operation === '*') {
    result = firstValue * secondValue

  }else if (evt.submitter.dataset.operation === '/') {
    result = firstValue / secondValue
  }

  

  output.innerHTML = result

  // reset ficticio
  form.reset()
  form.firstNumber.focus()

}



//* Añadimos el "listener" del submit del formulario
form.addEventListener('submit', (evt) => operate(evt))
