import Alert from '../helpers/Alert.js'
import BSModal from '../helpers/BSModal.js'
import isTheInputEmpty from '../helpers/isTheInputEmpty.js'
// import createBootstrapModal from '../helpers/createBootstrapModal.js'
import ToDo from './ToDo'

class ToDoApp {
  constructor () {
    this.allToDos = []
    this.inputToDo = document.querySelector('.inputTask')
    this.toDoList = document.querySelector('.toDoList')
    this.pendingTasks = document.querySelector('.pendingTasks')
    this.filterAll = document.querySelector('.filterAll')
    this.filterActive = document.querySelector('.filterActive')
    this.filterCompleted = document.querySelector('.filterCompleted')
    this.filterClear = document.querySelector('.filterClear')

    //* "Bindear" un método
    this.updateToDo = this.updateToDo.bind(this)

    this.inputToDo.onkeyup = (e) => this.handleSubmitToDo(e)
    this.filterAll.onclick = () => this.printToDos()
    // this.filterActive.onclick = () => this.filterActiveToDos()
    // this.filterCompleted.onclick = () => this.filterCompletedToDos()
    this.filterActive.onclick = () => this.filterBy('active')
    this.filterCompleted.onclick = () => this.filterBy('completed')
    this.filterClear.onclick = () => this.clearCompletedToDos()

    this.getToDosFromLocalStorage()
    this.printToDos()
    this.updatePendintToDos()
  }

  clearCompletedToDos () {
    this.allToDos = this.allToDos.filter((toDo) => !toDo.isCompleted)
    this.updateToDosLocalStorage()
    this.printToDos()
  }

  filterBy (filter) {
    let filteredToDos = []

    if (filter === 'active') {
      filteredToDos = this.allToDos.filter((toDo) => !toDo.isCompleted)
    } else if (filter === 'completed') {
      filteredToDos = this.allToDos.filter((toDo) => toDo.isCompleted)
    }

    this.printToDos(filteredToDos)
  }

  filterActiveToDos () {
    const filteredToDos = this.allToDos.filter((toDo) => !toDo.isCompleted)
    this.printToDos(filteredToDos)
  }

  filterCompletedToDos () {
    const filteredToDos = this.allToDos.filter((toDo) => toDo.isCompleted)
    this.printToDos(filteredToDos)
  }

  updatePendintToDos () {
    const uncompletedToDos = this.allToDos.filter((toDo) => !toDo.isCompleted).length
    // let pendingCounter = 0
    // this.allToDos.forEach((toDo) => {
    //   if (toDo.isCompleted === false) {
    //     pendingCounter++
    //   }
    // })
    // this.pendingTasks.innerHTML = pendingCounter
    this.pendingTasks.innerHTML = uncompletedToDos
  }

  getToDosFromLocalStorage () {
    this.allToDos = JSON.parse(localStorage.getItem('allToDos')) || []

    this.allToDos = this.allToDos.map((toDo) => {
      return new ToDo(toDo.task, this.updateToDo, toDo.id, toDo.isCompleted)
    })
  }

  updateToDosLocalStorage () {
    localStorage.setItem('allToDos', JSON.stringify(this.allToDos))
  }

  handleSubmitToDo (e) {
    if (e.key !== 'Enter') return

    if (isTheInputEmpty(this.inputToDo)) {
      const errorAlert = new Alert('No puedes dejar el input vacío.')
      errorAlert.show()
      return
    }

    const toDoValue = this.inputToDo.value

    // const newToDo = {
    //   id: nanoid(),
    //   task: toDoValue,
    //   isCompleted: false
    // }
    const newToDo = new ToDo(toDoValue, this.updateToDo)

    this.allToDos = [...this.allToDos, newToDo]
    this.printToDos()
    this.updateToDosLocalStorage()

    this.inputToDo.value = ''
    this.inputToDo.focus()
  }

  printToDos (array = this.allToDos) {
    this.toDoList.innerHTML = ''
    array.forEach((toDo) => {
      const newToDo = this.createToDo(toDo)
      this.toDoList.append(newToDo)
    })
  }

  createToDo (toDo) {
    const toDoHTML = document.createElement('li')
    toDoHTML.className = `${toDo.isCompleted && 'text-decoration-line-through'} toDo px-3 py-2 bg-white rounded d-flex shadow border`
    toDoHTML.textContent = toDo.task

    const checkBtn = document.createElement('i')
    const editBtn = document.createElement('i')
    const deleteBtn = document.createElement('i')

    const checkIcon = toDo.isCompleted ? 'bi-check-circle text-success' : 'bi-circle text-info'

    checkBtn.className = `icon bi ${checkIcon} me-2`
    editBtn.className = 'icon bi bi-pencil text-danger ms-auto me-2'
    deleteBtn.className = 'icon bi bi-x-lg'

    // checkBtn.addEventListener('click', () => this.changeCompleteUncomplete(toDo))
    checkBtn.onclick = () => this.changeCompleteUncomplete(toDo.id)

    // editBtn.onclick = () => createBootstrapModal(toDo, this.updateToDo)
    editBtn.onclick = () => new BSModal(toDo, this.updateToDo)

    deleteBtn.onclick = () => this.deleteToDo(toDo.id)

    toDoHTML.prepend(checkBtn)
    toDoHTML.append(editBtn, deleteBtn)

    return toDoHTML
  }

  changeCompleteUncomplete (idClick) {
    // this.allToDos = this.allToDos.map((toDo) => {
    //   if (idClick === toDo.id) {
    //     return toDo.completeUncompleteToDo()
    //   } else {
    //     return toDo
    //   }
    // })

    // this.allToDos = this.allToDos.map((toDo) => {
    //   return idClick === toDo.id ? toDo.completeUncompleteToDo() : toDo
    // })
    this.allToDos = this.allToDos.map((toDo) => idClick === toDo.id ? toDo.completeUncompleteAndReturnToDo() : toDo)

    this.printToDos()
    this.updateToDosLocalStorage()
    this.updatePendintToDos()
  }

  deleteToDo (idClick) {
    // this.allToDos = this.allToDos.filter((toDo) => {
    //   return toDo.id !== idClick
    // })
    this.allToDos = this.allToDos.filter((toDo) => toDo.id !== idClick)
    this.printToDos()
    this.updateToDosLocalStorage()
    this.updatePendintToDos()
  }

  updateToDo (editedToDo) {
    // this.allToDos = this.allToDos.map((toDo) => {
    //   if (toDo.id === editedToDo.id) {
    //     return editedToDo
    //   } else {
    //     return toDo
    //   }
    // })
    this.allToDos = this.allToDos.map((toDo) => toDo.id === editedToDo.id ? editedToDo : toDo)
    this.printToDos()
    this.updateToDosLocalStorage()
  }
}

export default ToDoApp
