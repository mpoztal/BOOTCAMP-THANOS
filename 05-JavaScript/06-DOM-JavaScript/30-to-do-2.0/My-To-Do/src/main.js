// Cazamos los elementos necesarios (formulario y caja de mis tareas)
const form = document.querySelector('.main-form')
const tasksBox = document.querySelector('.tasks-section')

//createAlert es una funci贸n para crear alertas (茅sta va con animaci贸n)
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

// 6 crear una variable(completedIcon) dependiendo si completed es true pondremos 馃憣 贸 馃憥
//let completedIcon

//if(completedIcon === true){
  //completedIcon = '馃憣' 
//}else{
  //completedIcon = '馃憥'  
//}

//newTask.innerHTML = taskText + ` - ` + completedIcon // 7 a帽adimos al h3 texto + gui贸n + Icono(馃憣 贸 馃憥)


//versi贸n m谩s r谩pida (utilizando un ternario)
//const completedIcon = isCompleted ? '馃憣' : '馃憥'
newTask.innerHTML = taskText + ` - ${isCompleted ? '馃憣' : '馃憥'}`
const deleteBtnSpan = document.createElement('span')
deleteBtnSpan.className = 'delete-btn ms-auto'
deleteBtnSpan.innerHTML = '鉂?'
newTask.append(deleteBtnSpan) 
//Para poder borrar(borras el padre de todo el elemento) 贸 el nuevo elemento introducido.
deleteBtnSpan.addEventListener('click', () => {
  //deleteBtnSpan.parentElement.remove()  
  newTask.remove()
})
tasksBox.append(newTask)

}

const checkTextInput = (input) => {
  if(input.value.trim('') === '') {
    input.classList.add('input-error')
    createAlert('No puedes dejar el campo vac铆o.')
    return 
}else {
    input.classList.remove('input-error')
    
    
}

}

const handleSubmit = (e) => {  // 1 cada vez q haga click (handleSubmit)
    e.preventDefault()
    const taskText = form.taskInput.value // 2 guardar谩 el texto q haya escrito   
    const isCompleted = form.completedInput.checked // 3 guardar谩 si le has dado al checked 

    checkTextInput(form.taskInput)
   // Arriba en la funcion(checkTextInput = (input)) 茅ste input se lo hemos puesto xq queremos, pero aqu铆
   //como en el ejm:  checkTextInput(form.taskInput)le hemos pasado un form.task...real, cazado del html.
       
    // Esta funcion(handleSubmit) recibir谩 estos 2 valores que lo hemos sacado a otra funci贸n
    createNewTask(taskText, isCompleted)
  
  form.reset()
  form.taskInput.focus()

}   

form.addEventListener('submit', (e) => handleSubmit(e))