import { Modal } from 'bootstrap'
import Alert from './Alert'
import isTheInputEmpty from './isTheInputEmpty'

const createBootstrapModal = (toDo) => {
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
  // trabajamos con el modal de bootstrap
  const bootstrapModal = new Modal(modal)
  bootstrapModal.show()

  // borramos el modal justo después de que se haya escondido
  // ? 'hidden.bs.modal' es un evento creado por bootstrap
  modal.addEventListener('hidden.bs.modal', () => modal.remove())

  // cazamos el input y el botón
  const taskInput = modal.querySelector('.taskInput')
  const editButton = modal.querySelector('.edit-button')

  // le damos al input el value correcto
  taskInput.value = toDo.task

  // escuchamos el click al botón de enviar
  editButton.addEventListener('click', () => {
    if (isTheInputEmpty(taskInput)) {
      const alert = new Alert('No puedes dejar el campo vacío.')
      alert.show()
      return
    }

    bootstrapModal.hide()
    toDo.editTask(taskInput.value)
  })
}

export default createBootstrapModal
