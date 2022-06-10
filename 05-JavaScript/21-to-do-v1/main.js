import { createToDo, readToDos, updateToDo, deleteToDo, completeToDo } from './helpers/crudFunctions.js'

let menu
do {
  menu = prompt(`
  ¡Bienvenid@ a la lista de tareas 1.0!
  (c) CREAR TAREA
  (r) LEER TAREAS
  (u) ACTUALIZAR TAREA
  (d) BORRAR TAREA
  (f) COMPLETAR/DESCOMPLETAR TAREA 

  (x) SALIR
  `)

  // Para salir del menú
  if (menu === 'x' || menu === null) break

  // Opciones del menú
  if (menu === 'c') {
    createToDo()
  }else if (menu === 'r') {
    readToDos()
  }else if (menu === 'u') {
    updateToDo()
  }else if (menu === 'd') {
    deleteToDo()
  }else if (menu === 'f') {
    completeToDo()
  }else {
    console.error('Esa opción no mola, y tú tampoco molas.')
  }

} while (true);

console.log('Has acabado, todo borrado.')
