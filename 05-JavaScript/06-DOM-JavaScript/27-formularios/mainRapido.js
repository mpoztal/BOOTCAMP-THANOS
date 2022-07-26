//? Formularios

//* Primero cazamos los elementos
const form = document.querySelector('.main-form')

const allRadios = document.querySelectorAll('[name="gender"]')



//* Creamos la función que se ejecutará cada vez que hagamos "submit", importante al tratarse de un formulario que usemos el objeto "evento" para prevenir el comportamiento por defecto


const handleSubmit = (e) => {
  e.preventDefault()

  //! Si no hay nada escrito guardaran un string vacío
  const name = form.name.value
  const surname = form.surname.value

  //* Checkboxes
  const readValue = form.checkRead.checked
  const writeValue = form.checkWrite.checked
  const walkValue = form.checkWalk.checked

  // opción para coger todos los checkboxes que estén marcados
  const selectedHobbies = document.querySelectorAll('[type="checkbox"]:checked')  

  //* Radios
  const genderValue = form.gender.value
  

  //* SELECT (ej. lenguaje) --> Aquí solo tenemos que cazar el select y preguntar por su value
  const languageValue = form.language.value


  console.log(`
  ====Datos====
  Nombre: ${name}
  Apellidos: ${surname}
  Aficiones:
    Leer -->  ${readValue}
    Escribir -->  ${writeValue}
    Pasear -->  ${walkValue}
  
  Sexo en una línea:
    ${genderValue ? genderValue : 'No ha escogido sexo'}
    ${genderValue || 'No ha escogido sexo'}

  Me encanta:  ${languageValue ? languageValue : 'Nada'}
  Me encanta:  ${languageValue || 'Nada'}
  `)
  
}

//* Escuchamos su evento "submit"
form.addEventListener('submit', (e) => handleSubmit(e))
