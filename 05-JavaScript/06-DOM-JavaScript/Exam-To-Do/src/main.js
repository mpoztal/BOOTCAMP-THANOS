import './styles/css/style.css'
import './styles/sass/style.scss'

const createNewTask = (taskText, isCompleted) => {
    const newTaskH3 = document.createElement('h3')
    newTaskH3.className = 'task d-flex fs-5 mt-3 gap-4'  
    newTaskH3.innerHTML = taskText + ` - ${isCompleted ? 'bi bi-hand-thumbs-up-fill' : 'bi bi-hand-thumbs-down-fill'}`
    
    const deleteBtnTrash = document.createElement('i')
    deleteBtnTrash.className = 'bi bi-trash text-warning ms-auto'
    deleteBtnTrash.innerHTML = 'bi bi-trash text-warning ms-auto'

    deleteBtnTrash.addEventListener('click', () => {
        
        newTaskH3.remove() 
      })
     
      newTaskH3.append(deleteBtnTrash)  
        
      return newTaskH3
    
    }

const readActivity = () => {

}
const updateActivity = () => {

}
const deleteActivity = () => {

}







const form = document.querySelector('.main-form')
const activityBox = document.querySelector('.tasks-section')

const handleSubmit = (e) => {
    e.preventDefault()
   
}

form.addEventListener('submit',(e) => handleSubmit(e))