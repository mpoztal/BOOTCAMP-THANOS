

let contadorID = 0
const allToDos = [
    {
        "id": 1,
        "task": "correr"
    },
    {
        "id": 2,
        "task": "patinar"
    },
    {
        "id": 3,
        "task": "montar en bici"
    }
]


const createToDo = () => {
    let tarea = prompt('Dime una tarea:')

    contadorID++

    const nuevaTarea = {
        id: contadorID,
        task: tarea
    }

    allToDos.push (nuevaTarea)

    console.log(`Se ha añadido la tarea con ID ${nuevaTarea.id}  correctamente`)
}






const readToDos = () => {
    for (let myToDo of allToDos) {

        console.log(`Mi tarea con ID ${myToDo.id} es ${myToDo.task}.`)
    }
} 


const updateToDo = () => {
    readToDos()
    let index
    const askToDo = prompt('Dime que tarea quieres actualizar:')

    for (let i = 0; i < allToDos.length; i++){
        if(allToDos[i].id === +askToDo){
            index = i
            console.log(`El ID  ${askToDo} está en la posición ${i}`)
        }

    }
    
    let tarea = prompt('Dime una tarea:')
    
    allToDos[index].task = tarea

}

const updateToDo2 = () => {
    readToDos()

    const askToDo = prompt('Dime que tarea quieres actualizar:')
    
    for (let i = 0; i < allToDos.length; i++){
        if(allToDos[i].id === +askToDo){
            
            console.log(`El ID  ${askToDo} está en la posición ${i}`)
            let tarea = prompt('Dime una tarea:')
    
            allToDos[i].task = tarea
        }

    }

}

const updateToDo3 = () => {
    readToDos()

    const askToDo = prompt('Dime que tarea quieres actualizar:')
    let toDoToUpdate 
    for (let myToDo of allToDos){
        if(myToDo.id === +askToDo){
            
            toDoToUpdate = myToDo        
        }

    }
    let tarea = prompt('Dime una tarea:')
    
    toDoToUpdate.task = tarea

}

const deleteToDo = () => {
    readToDos()

    const deleteId = prompt ('Dime el ID de la tarea que quieres borrar.')

    for (let i = 0; i < allToDos.length; i++){
        if(allToDos[i].id === +deleteId){
            allToDos.splice(i, 1)  // i corespond, a la posicion del elemento y 1 nº de elementos q quiero borrar.
        }
        
    }


}