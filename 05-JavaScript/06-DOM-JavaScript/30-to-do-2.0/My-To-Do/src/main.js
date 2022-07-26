// Cazamos los elementos necesarios (formulario y caja de mis tareas)
const form = document.querySelector('.main-form')
const tasksBox = document.querySelector('.tasks-section')

//createAlert es una función para crear alertas (ésta va con animación)
const createAlert = (message) => {
    const alert = document.createElement('div')
    alert.className = 'error-alert alert alert-danger'
    alert.setAttribute('role', 'alert')
    alert.innerHTML = message
    document.body.append(alert)
  alert.addEventListener('animationend', () => alert.remove())
}

const createNewTask = (taskText, isCompleted) => {
  const newTask = document.createElement('h3') // 4 crearemos el h3
  newTask.className = 'task d-flex gap-2 fs-5 mt-3'// 5 crearemos las clases

// 6 crear una variable(completedIcon) dependiendo si completed es true pondremos 👌 ó 👎
//let completedIcon

//if(completedIcon === true){
  //completedIcon = '👌' 
//}else{
  //completedIcon = '👎'  
//}

//newTask.innerHTML = taskText + ` - ` + completedIcon // 7 añadimos al h3 texto + guión + Icono(👌 ó 👎)


//versión más rápida (utilizando un ternario)
//const completedIcon = isCompleted ? '👌' : '👎'
newTask.innerHTML = taskText + ` - ${isCompleted ? '👌' : '👎'}`
const deleteBtnSpan = document.createElement('span')
deleteBtnSpan.className = 'delete-btn ms-auto'
deleteBtnSpan.innerHTML = '❌'
newTask.append(deleteBtnSpan) 
//Para poder borrar(borras el padre de todo el elemento) ó el nuevo elemento introducido.
deleteBtnSpan.addEventListener('click', () => {
  //deleteBtnSpan.parentElement.remove()  
  newTask.remove()
})
tasksBox.append(newTask)

}

const checkTextInput = (input) => {
  if(input.value.trim('') === '') {
    input.classList.add('input-error')
    createAlert('No puedes dejar el campo vacío.')
    return 
}else {
    input.classList.remove('input-error')
    
    
}

}

const handleSubmit = (e) => {  // 1 cada vez q haga click (handleSubmit)
    e.preventDefault()
    const taskText = form.taskInput.value // 2 guardará el texto q haya escrito   
    const isCompleted = form.completedInput.checked // 3 guardará si le has dado al checked 

    checkTextInput(form.taskInput)
   // Arriba en la funcion(checkTextInput = (input)) éste input se lo hemos puesto xq queremos, pero aquí
   //como en el ejm:  checkTextInput(form.taskInput)le hemos pasado un form.task...real, cazado del html.
       
    // Esta funcion(handleSubmit) recibirá estos 2 valores que lo hemos sacado a otra función
    createNewTask(taskText, isCompleted)
  
  form.reset()
  form.taskInput.focus()

}   

form.addEventListener('submit', (e) => handleSubmit(e))