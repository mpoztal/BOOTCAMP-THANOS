const isTheInputEmpty = (input) => {
  // revisar que no haya dejado ningún campo vacío

  if (input.value.trim() === '') {
    input.classList.add('is-invalid')
    return true
  }

  input.classList.remove('is-invalid')
  return false
}

export default isTheInputEmpty
