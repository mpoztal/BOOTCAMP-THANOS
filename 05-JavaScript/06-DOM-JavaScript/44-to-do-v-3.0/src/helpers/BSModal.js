import { Modal } from 'bootstrap'
import Alert from './Alert'
import isTheInputEmpty from './isTheInputEmpty'

class BSModal {
  constructor (toDo) {
    this.myModalHTML = this.createModalMarkup()
    this.bsModal = new Modal(this.myModalHTML)
    this.myModalHTML.addEventListener('hidden.bs.modal', () => this.myModalHTML.remove())

    this.taskInput = this.myModalHTML.querySelector('.taskInput')
    this.editButton = this.myModalHTML.querySelector('.edit-button')
    this.taskInput.value = toDo.task

    this.bsModal.show()

    this.editButton.addEventListener('click', () => {
      if (isTheInputEmpty(this.taskInput)) {
        const alert = new Alert('No puedes dejar el campo vacío.')
        alert.show()
        return
      }

      this.bsModal.hide()
      toDo.editTask(this.taskInput.value)
    })
  }

  createModalMarkup () {
    const modal = document.createElement('div')
    modal.className = 'modal fade'
    modal.setAttribute('tabindex', '-1')
    // Para hacer que no se salga al hacer click fuera de la caja
    modal.setAttribute('data-bs-backdrop', 'static')
    // Para que no se salga al darle a Escape
    modal.setAttribute('data-bs-keyboard', 'false')

    modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Editando Tarea</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input
            class="taskInput form-control mb-3 "
            type="text"
            placeholder="Editar tarea..."                            
          >        
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="edit-button btn btn-warning">Editar</button>
        </div>
      </div>
    </div>
    `
    return modal
  }

  show () {
    this.bsModal.show()
  }

  hide () {
    this.bsModal.hide()
  }
}

export default BSModal
