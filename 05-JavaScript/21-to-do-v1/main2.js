// LO MÁS BÁSICO DE HACER---> HACER UN CRUD (Cread, read, update y Delete) es decir, crear, leer, actualizar y borrar.

   //(c) CREAR TAREA
   //(r) LEER TAREAS
   //(u) ACTUALIZAR TAREA
   //(d) BORRAR TAREA
   const allToDos = [
      { id: 1, task: 'Estudiar JavaScript 👨‍🏫', isCompleted: false },
      { id: 2, task: 'Sacar a las perras 🐕‍🦺', isCompleted: true },
      { id: 3, task: 'Comprar el pan 🍞', isCompleted: false },  
    ]

    //const createToDo = () => {}
    //const readToDos  = () => {}    (CREAMOS LAS FUNCIONES DEL CRUD)
    //const updateToDo  = () => {}
    //const deleteToDo  = () => {}

    let counterID = 3
    
   const createToDo = () => {}
   const readToDos  = () => {
      console.clear()  // PARA LIMPIAR CONSOLA
      console.log('ESTAS SON TUS TAREAS')
      for (let toDo of allToDos) {
        console.log(`${toDo.isCompleted ? '✅' : '❌'}  ${toDo.id}: ${toDo.task}`)
      }
   }
   
   const updateToDo  = () => {}
   const deleteToDo  = () => {}