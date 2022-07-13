//? Formularios

//* Primero caxamos los elementos
const form = document.querySelector('.main-form')

//* En cualquier momento, si tengo un formulario cazado, puedo llamar a alguno de sus métodos
// .reset() vacía todos los datos del formulario
// form.reset()
// .submit() envía el formulario
// form.submit() //! lo dejo comentado porque entraríamos en bucle


const inputName = document.getElementById('name')
const inputSurname = document.querySelector('#surname')

//* En cualquier momento, podemos usar el método .focus() para poner un input en foco
inputSurname.focus()


const checkRead = document.querySelector('#read')
const checkWrite = document.querySelector('#write')
const checkWalk = document.querySelector('#walk')

const radioMale = document.querySelector('#male')
const radioFemale = document.querySelector('#female')
const radioNonBinary = document.querySelector('#non-binary')
const radioNSNC = document.querySelector('#ns-nc')

const allRadios = document.querySelectorAll('[name="gender"]')

const languageSelect = document.querySelector('#language')


//* EVENTOS TÍPICOS EN UN FORMULARIO

//! Para un input de tipo texto, yo escogería el keypress si queremos jugar con QUÉ TECLA HA APRETADO


inputName.addEventListener('keypress', (e) => {
  console.log('EVENTO KEYPRESS', e)
})

inputSurname.addEventListener('input', (e) => {
  console.log('EVENTO INPUT', e)
})

// Para un checkbox --> change
checkWrite.addEventListener('change', (e) => {
  console.log('CHANGE', e)
})

// Para un radio --> change
radioMale.addEventListener('change', (e) => {
  console.log('CHANGE', e)
})

// Para un select --> change
languageSelect.addEventListener('change', (e) => {
  console.log('CHANGE', e)
})

























//* Creamos la función que se ejecutará cada vez que hagamos "submit", importante al tratarse de un formulario que usemos el objeto "evento" para prevenir el comportamiento por defecto


const handleSubmit = (e) => {
  e.preventDefault()  
  console.log(e.submitter)
  //! Si no hay nada escrito guardaran un string vacío
  const name = inputName.value
  const surname = inputSurname.value

  //* Checkboxes
  const readValue = checkRead.checked
  const writeValue = checkWrite.checked
  const walkValue = checkWalk.checked

  // opción para coger todos los checkboxes que estén marcados
  const selectedHobbies = document.querySelectorAll('[type="checkbox"]:checked')

  

  //* Radios
  const male = radioMale.checked
  const female = radioFemale.checked
  const nonBinary = radioNonBinary.checked
  const NSNC = radioNSNC.checked

  const selectedGender = document.querySelector('[name="gender"]:checked')


  // otra manera de sacar cual es el radio button seleccionado
  let gender = null
  for (let radio of allRadios) {
    if (radio.checked) {
      gender = radio.value
    }
  }
  


  

  //* SELECT --> Aquí solo tenemos que cazar el select y preguntar por su value
  const languageValue = languageSelect.value

/*
  console.log(`
  ====Datos====
  Nombre: ${name}
  Apellidos: ${surname}
  Aficiones:
    Leer -->  ${readValue}
    Escribir -->  ${writeValue}
    Pasear -->  ${walkValue}
  Sexo:
    Hombre --> ${male}
    Mujer --> ${female}
    No Binario --> ${nonBinary}
    No sabe / No Contesta --> ${NSNC}
  Sexo en una línea:
    ${selectedGender ? selectedGender.value : 'No ha escogido sexo'}

  Me encanta:  ${languageValue ? languageValue : 'Nada'}
  Me encanta:  ${languageValue || 'Nada'}
  `)
  */
}

//* Escuchamos su evento "submit"
form.addEventListener('submit', (e) => handleSubmit(e))
