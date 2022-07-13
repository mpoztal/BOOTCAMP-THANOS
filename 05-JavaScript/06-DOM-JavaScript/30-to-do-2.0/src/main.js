
// Cazamos todos los elementos necesarios (Formulario, Caja de tareas)
const form = document.querySelector('.main-form')
const tasksBox = document.querySelector('.tasks-section')

// Añadir eventos necesarios (submit del formulario) que llamen a una función handleSubmit() que creamos a parte
const createAlert = (message) => {
  const alert = document.createElement('div')
  alert.className = 'error-alert alert alert-danger'
  alert.setAttribute('role', 'alert')
  alert.innerHTML = message
  document.body.append(alert)
  alert.addEventListener('animationend', () => alert.remove())
}

const createNewTask = (taskText, isCompleted) => {
  /***********************************/
  // Crearemos el elemento nuevo que contendrá  la nueva tarea, en nuestro caso un nuevo "h3"
  const newTaskH3 = document.createElement('h3')
  // le ponemos las clases que hagan falta
  newTaskH3.className = 'task d-flex fs-5 mt-3'   
  // le ponemos su contenido/texto que vendrá del input
  // versión larga
  // let completedIcon 
  // if(isCompleted === true) {
  //   completedIcon = '👌'
  // }else {
  //   completedIcon = '👎'
  // }

  //versión intermedia
  // const completedIcon = isCompleted ? '👌' : '👎'

  //versión más rápida
  newTaskH3.innerHTML = taskText + ` - ${isCompleted ? '👌' : '👎'}`

  // creamos un nuevo elemento span para el botón de borrar
  const deleteBtnSpan = document.createElement('span')
  // le ponemos sus clases y su X
  deleteBtnSpan.className = 'delete-btn ms-auto'
  deleteBtnSpan.innerHTML = '❌'

  //* Poder elminiar el elemento
  // En el momento en el que hemos creado nuestro botón "span" de borrar, podríamos darle un "addEventListener" y decirle que borre a su padre
  deleteBtnSpan.addEventListener('click', () => {
    // deleteBtnSpan.parentElement.remove() 
    newTaskH3.remove() 
  })

  // metemos el span dentro del h3 (append)  
  newTaskH3.append(deleteBtnSpan)  
    
  return newTaskH3

}

const checkTextInput = (input) => {

  //* Revisar que el usuario no haya dejado el campo vacío
  // si deja el "value" vacío cambiar los estilos del formulario para que se vea que hay un error y podemos mostrar una ventanita con el error, un texto en rojo o lo que quieras
  if (input.value.trim() === '') {
    input.classList.add('input-error')
    createAlert('No puedes dejar el campo vacío.')
    return false
  } else {
    input.classList.remove('input-error')
    return true
  }

}

const handleSubmit = (evt) => {
  // prevenimos el comportamiento por defecto del formulario
  evt.preventDefault()

  // Conseguir el valor que nos ponga el usuario en los 2 inputs
  // guardaremos el valor en una variable dentro de handleSubmit()
  const taskText = form.taskInput.value
  const isCompleted = form.completedInput.checked

  const checked = checkTextInput(form.taskInput)
  if(!checked) return
  
  const newTaskH3 = createNewTask(taskText, isCompleted)
    
  // metemos todo el h3 dentro de la caja de tareas
  tasksBox.appendChild(newTaskH3)
  
  
  //* Resetear el formulario y hacer foco en el input
  form.reset()
  form.taskInput.focus()
}

form.addEventListener('submit', (evt) => handleSubmit(evt) )
