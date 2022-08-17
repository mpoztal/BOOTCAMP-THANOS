import { nanoid } from '../node_modules/nanoid/nanoid.js'
import createBootstrapAlert from './helpers/createBootstrapAlert.js'

//* Mini "base de datos"
let allMovies = [
  // { 
  //   id: nanoid(5),
  //   title: 'El señor de los Anillos',
  //   genre: 'Aventuras',
  //   isSeen: true 
  // },
  // { 
  //   id: nanoid(5),
  //   title: 'Harry Potter',
  //   genre: 'Fantasía',
  //   isSeen: false 
  // },
  // { 
  //   id: nanoid(5),
  //   title: 'Robocop',
  //   genre: 'Acción',
  //   isSeen: true 
  // }
]

const form = document.querySelector('.add-movie-form')
const movieList = document.querySelector('.movie-list')
const filtersForm = document.querySelector('.filters-form')

const setMoviesToLocalStorage = () => {
  const allMoviesStringified = JSON.stringify(allMovies)
  localStorage.setItem('movies', allMoviesStringified)
}

const getMoviesFromLocalStorage = () => {
  allMovies = JSON.parse(localStorage.getItem('movies')) || []    
  displayMovies()
}

const displayMovies = (array = allMovies) => {
  movieList.innerHTML = ''
  array.forEach( (movie) => {
    const movieArticle = createMovie(movie)
    movieList.append(movieArticle)

  } )
}

const checkEmptyInput = (input) => {
  if (input.value === ''){
    input.classList.add('is-invalid')
    return false
  }

  input.classList.remove('is-invalid')
  return true   
  
}

const getFormValues = () => {
  const checkTitle = checkEmptyInput(form.movieName)  
  const checkGenre = checkEmptyInput(form.genre)

  if (!checkTitle || !checkGenre) {
    createBootstrapAlert('No puedes dejar ningún campo vacío')
    return
  }  
 
  return [form.movieName.value, form.genre.value, form.checkSeen.checked]
}

const createMovie = (movie) => {
  const movieArticle = document.createElement('article')
  
  let eyeIcon = movie.isSeen ? 'bi-eye text-primary' : 'bi-eye-slash text-info'

  movieArticle.className = 'movie d-flex align-items-center'
  movieArticle.innerHTML = `
  <h2 class="fs-4 m-0 me-3">${movie.title}</h2>
  <h3 class="fs-6 m-0 me-auto badge ${selectColorForGenre(movie.genre)}">${movie.genre}</h3>
  <i class="icon edit-icon bi bi-pencil text-success fs-3 me-3"></i>
  <i class="icon isSeen-icon bi ${eyeIcon} fs-3 me-3"></i>
  <i class="icon delete-icon bi bi-trash text-danger fs-3"></i>
  `

  const editIcon = movieArticle.querySelector('.edit-icon')
  const isSeenIcon = movieArticle.querySelector('.isSeen-icon')
  const deleteIcon = movieArticle.querySelector('.delete-icon')

  editIcon.addEventListener('click', () => createBootstrapModal(movie))
  isSeenIcon.addEventListener('click', () => changeSeenMovie(movie.id))
  deleteIcon.addEventListener('click', () => deleteMovie(movie.id)) 
  
  return movieArticle
}

const selectColorForGenre = (genre) => {  
  if (genre === 'Aventuras') return 'text-bg-adventures'
  else if (genre === 'Terror') return 'text-bg-terror'
  else if (genre === 'Acción') return 'text-bg-action'
  else if (genre === 'Drama') return 'text-bg-drama'
  else if (genre === 'Comedia') return 'text-bg-comedy'
  else if (genre === 'Fantasía') return 'text-bg-fantasy'
}

const createBootstrapModal = (movie) => {
  const modal = document.createElement('div')
  modal.className = 'modal fade'
  modal.setAttribute('tabindex' , '-1')
  // Para hacer que no se salga al hacer click fuera de la caja
  modal.setAttribute('data-bs-backdrop', 'static')
  // Para que no se salga al darle a Escape
  modal.setAttribute('data-bs-keyboard', 'false')

  modal.innerHTML = `
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modo superguay</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input
          class="form-control mb-3 titleInput"
          type="text"
          placeholder="Película..."
          name="movieName"                   
        >
        <select class="form-select genreSelect" name="genre">          
          <option value="Aventuras">Aventuras</option>
          <option value="Terror">Terror</option>
          <option value="Acción">Acción</option>
          <option value="Drama">Drama</option>
          <option value="Comedia">Comedia</option>
          <option value="Fantasía">Fantasía</option>
        </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="edit-button btn btn-warning">Editar</button>
      </div>
    </div>
  </div>
  `
  const bootstrapModal = new bootstrap.Modal(modal)
  bootstrapModal.show()  

  modal.addEventListener('hidden.bs.modal', () => modal.remove())

  const titleInput = modal.querySelector('.titleInput')
  const genreSelect = modal.querySelector('.genreSelect')
  const editButton = modal.querySelector('.edit-button')  

  genreSelect.value = movie.genre
  titleInput.value = movie.title

  editButton.addEventListener('click', () => {
    if (!checkEmptyInput(titleInput)) {
      createBootstrapAlert('No puedes dejar el campo vacío.')
      return
    }

    updateMovieInfo(movie.id, titleInput.value, genreSelect.value ) 
    bootstrapModal.hide()
  })


}

const changeSeenMovie = (idClick) => {  
  allMovies = allMovies.map((movie) => idClick === movie.id ? { ...movie, isSeen: !movie.isSeen } : movie)

  setMoviesToLocalStorage()

  displayMovies()
}

const deleteMovie = (idClick) => {
  allMovies = allMovies.filter((movie) => movie.id !== idClick)

  setMoviesToLocalStorage()

  displayMovies()
}

const updateMovieInfo = (id, title, genre) => {  
  allMovies = allMovies.map((movie) => movie.id === id ? { ...movie, title, genre } : movie )

  setMoviesToLocalStorage()

  displayMovies()
}

const handleSubmit = (event) => {
  event.preventDefault()
  
  const formValues = getFormValues()
  if (!formValues) return

  const [title, genre, isSeen] = formValues
 
  const newMovie = { id: nanoid(5), title, genre, isSeen }
// Con ésta forma,modif.array original sumandole a éste los cambios. Dando lugar 
// a unos nevos arrays.Por cada nuevo dato estaremos creando array newMovie
  allMovies = [...allMovies, newMovie] 
  
  setMoviesToLocalStorage()

  displayMovies()

  form.reset()
  filtersForm.reset()  
}

form.addEventListener('submit', (event) => handleSubmit(event))


//*************************** FILTROS *****************
let filterBySeenActive = false
let filterByNotSeenActive = false

const searchMovieTitle = () => {
  const searchTitleValue = filtersForm.searchTitle.value  
  const filteredMovies = allMovies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchTitleValue.toLowerCase())
  })

  displayMovies(filteredMovies)  
}

const filterByGenre = () => {  
  const genreValue = filtersForm.filterGenre.value

  if ( genreValue === '' ) {
    displayMovies()
  }else {
    const filteredMovies = allMovies.filter((movie) => movie.genre === genreValue)
  
    displayMovies(filteredMovies)
  }
  
  const filteredMovies = allMovies.filter((movie) => movie.genre.includes(genreValue))
  displayMovies(filteredMovies)
}

const filterBySeen = () => {  
  filterBySeenActive = !filterBySeenActive
  filtersForm.filterBySeen.classList.toggle('bg-semilight')
  
  if (filterBySeenActive) {
    const filteredMovies = allMovies.filter((movie) => movie.isSeen)
    displayMovies(filteredMovies)
  } else {
    displayMovies()
  }
}

const filterByNotSeen = () => {
  filterByNotSeenActive = !filterByNotSeenActive
  filtersForm.filterByNotSeen.classList.toggle('bg-semilight')

  filterByNotSeenActive 
    ? displayMovies(allMovies.filter((movie) => !movie.isSeen))
    : displayMovies()  
}

filtersForm.onsubmit = (event) => event.preventDefault()

filtersForm.searchTitle.onkeyup = () => searchMovieTitle()
filtersForm.filterGenre.onchange = () => filterByGenre()
filtersForm.filterBySeen.onclick = () => filterBySeen()
filtersForm.filterByNotSeen.onclick = () => filterByNotSeen()

getMoviesFromLocalStorage()