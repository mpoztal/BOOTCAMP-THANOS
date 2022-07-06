// Mini "base de datos"
const allToDos = [
  { id: 1, task: 'Estudiar JavaScript 👨‍🏫', isCompleted: false },
  { id: 2, task: 'Sacar a las perras 🐕‍🦺', isCompleted: true },
  { id: 3, task: 'Comprar el pan 🍞', isCompleted: false },  
]
let counterID = 3

// Funciones
const askUserForToDoText = () => {
  // Pedido al usuario el texto de la nueva tarea
  let userToDo  
  do {    
    userToDo = prompt('Dime la nueva tarea:')
  }while(userToDo === null || !isNaN(userToDo) || userToDo.trim() === '')

  return userToDo
}

const askUserForToDoId = (message) => {
  // Pedir el ID de la tarea que se quiere actualizar
  // Revisar si el ID es un número
  let id = prompt(message)
  
  if (id === null || id.trim() === '' || isNaN(id)){    
    console.error('Tienes que poner un número')          //Esta estructura es muy típica, el no usar else y poner un return
    return
  }

  // updateId = Number(updateId)
  id = +id
  return id
 


}

const createToDo = () => {
  
  const userToDo = askUserForToDoText()

  // Aumentamos en uno el ID
  counterID++

  // Creamos la nueva tarea
  const newToDo = {
    id: counterID,
    task: userToDo,
    isCompleted: false
  }

  // Meter la nueva tarea en la "base de datos"
  allToDos.push(newToDo)

  console.log(`La tarea "${userToDo}" se ha añadido correctamente.`)

}

const readToDos = () => {
  console.clear()
  console.log('ESTAS SON TUS TAREAS')
  for (let toDo of allToDos) {
    console.log(`${toDo.isCompleted ? '✅' : '❌'}  ${toDo.id}: ${toDo.task}`) // Aplicamos un ternario
  }
}

const updateToDo = () => {
  // Mostrar todas las tareas para que el usuario elija cual quiere actualizar llamando a ésta función.
  readToDos()

  const updateId = askUserForToDoId('Dime el ID de la tarea que quieres actualizar')

  let isFound = false
  // buscar esa tarea en nuestra "base de datos" (recorrerla)
  for (let toDo of allToDos) {
    // por cada tarea preguntar si los id coinciden
    if (updateId === toDo.id) {
      // si coinciden, pedir el nuevo texto actualizado al usuario
      const newUpdatedToDo = askUserForToDoText()

      // cambiar el texto por el nuevo      
      console.log(`Has modificado la tarea "${toDo.task}" por "${newUpdatedToDo}"`)
      toDo.task = newUpdatedToDo

      isFound = true
    }
  }

  // si no coincide ninguna podemos decir que no existe
  if (!isFound) {
    console.error(`No existe ninguna tarea con el id: ${updateId}`)
  }

}

const deleteToDo = () => {
 // Mostrar todas las tareas para que el usuario elija cual quiere borrar
 readToDos()

  // Pedir el ID de la tarea que se quiere borrar
  // Revisar si el ID es un número
  const deleteId = askUserForToDoId('Dime el ID de la tarea que quieres borrar.')
  if (deleteId === undefined) return

  let isFound = false
  // buscar esa tarea en nuestra "base de datos" (recorrerla)
  //* Opción con un for...in eliminando directamente con el índice
  /*for (let i in allToDos) {
    // por cada tarea preguntar si los id coinciden
    if (deleteId === allToDos[i].id) {
      // si coinciden, borrar la tarea de la "base de datos"        
      console.log(`Has borrado "${allToDos[i].task}" de tus tareas.`)
      allToDos.splice(i, 1)
      

      isFound = true
    }
  }*/

  //* Opción con un for...of y eliminando buscando el indexOf de todo el objeto
  for (let toDo of allToDos) {
    // por cada tarea preguntar si los id coinciden
    if (deleteId === toDo.id) {
      // si coinciden, borrar la tarea de la "base de datos"        
      console.log(`Has borrado "${toDo.task}" de tus tareas.`)
      allToDos.splice(allToDos.indexOf(toDo), 1)  

      isFound = true
    }
  }

  // si no coincide ninguna podemos decir que no existe
  if (!isFound) {
    console.error(`No existe ninguna tarea con el id: ${deleteId}`)
  }
}

const completeToDo = () => {
  // Mostrar todas las tareas
  readToDos()

  // Preguntar por el ID de la tarea que quieres completar
  const completeId = askUserForToDoId('Dime el ID de la tarea que quieres completar/descompletar:')
  if (completeId === undefined) return

  // buscar en la "base de datos" nuestro toDo
  let isFound = false
  for (let toDo of allToDos) {
    if (completeId === toDo.id) {
      // cambiarle la propiedad isCompleted
      toDo.isCompleted = !toDo.isCompleted

      readToDos()

      isFound = true
    }
  }
  if (!isFound) {
    console.error(`No existe ninguna tarea con el id: ${completeId}`);
  }
}

export { createToDo, readToDos, updateToDo, deleteToDo, completeToDo}