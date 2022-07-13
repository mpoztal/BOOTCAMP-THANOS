import { nanoid } from 'nanoid'

class ToDo {
  constructor (task, updateToDo, id, isCompleted) {
    this.id = id || nanoid()
    this.task = task
    this.isCompleted = isCompleted || false
    this.updateToDo = updateToDo
  }

  completeUncompleteAndReturnToDo () {
    this.isCompleted = !this.isCompleted
    return this
  }

  editTask (newEditedTask) {
    this.task = newEditedTask

    this.updateToDo(this)
  }
}

export default ToDo
