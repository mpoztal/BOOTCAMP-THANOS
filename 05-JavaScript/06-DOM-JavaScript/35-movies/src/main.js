import { nanoid } from 'nanoid'

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


// Cazar todo lo necesario (formulario, caja de películas)
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

  // recorrer el array
  array.forEach( (movie) => {

    const movieArticle = createMovie(movie)

    movieList.append(movieArticle)

  } )
}

const checkEmptyInput = (input) => {
  // revisar que no haya dejado ningún campo vacío

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
  // trabajamos con el modal de bootstrap
  const bootstrapModal = new bootstrap.Modal(modal)
  bootstrapModal.show()  

  // borramos el modal justo después de que se haya escondido
  //? 'hidden.bs.modal' es un evento creado por bootstrap
  modal.addEventListener('hidden.bs.modal', () => modal.remove())

  // cazamos los dos input y el botón
  const titleInput = modal.querySelector('.titleInput')
  const genreSelect = modal.querySelector('.genreSelect')
  const editButton = modal.querySelector('.edit-button')
  

  // le damos al select y al input el value correcto  
  genreSelect.value = movie.genre
  titleInput.value = movie.title

  // escuchamos el click al botón de enviar
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
  
  
  // buscarla en la "base de datos" y modificar su valor
  // La siguiente forma modificaría directamente el array de películas sin cambiarle la referencia (lo estaríamos mutando)
  /* allMovies.forEach((movie) => {
    if (idClick === movie.id) {
      movie.isSeen = !movie.isSeen
    }
  }) */

  // La siguiente forma hace lo mismo pero creando un nuevo array y sustituyendo al array antiguo de películas (tendríamos una nueva referencia)
  // versión larga
  /* allMovies = allMovies.map((movie) => {
    if (idClick === movie.id) {
      return { ...movie, isSeen: !movie.isSeen  }
    }else {
      return movie
    }
  }) */
  //versión corta
 /*  allMovies = allMovies.map((movie) => {
    return idClick === movie.id ? { ...movie, isSeen: !movie.isSeen  } : movie
    }
  ) */

  // versión cortísima
  allMovies = allMovies.map((movie) => idClick === movie.id ? { ...movie, isSeen: !movie.isSeen } : movie)

  setMoviesToLocalStorage()

  // imprimir todas las películas otra vez
  displayMovies()
}

const deleteMovie = (idClick) => {
  // Mutando el array
  // allMovies.forEach((movie, index) => {
  //   if (idClick === movie.id) {
  //     allMovies.splice(index, 1)
  //   }
  // })

  // sin mutar el array --> filter()
  // allMovies = allMovies.filter((movie) => {
  //   return idClick !== movie.id ? true : false
  // })

  allMovies = allMovies.filter((movie) => movie.id !== idClick)

  setMoviesToLocalStorage()

  displayMovies()
}

const updateMovieInfo = (id, title, genre) => {  

  // allMovies.forEach((movie) => {
  //   if (id === movie.id) {
  //     movie.title = title
  //     movie.genre = genre
  //   }
  // })


  // allMovies = allMovies.map((movie) => {
  //   if (movie.id === id) {
  //     return { ...movie, title: title, genre: genre }
  //   }else {
  //     return movie
  //   }
  // })
  // allMovies = allMovies.map((movie) => {    
  //     return movie.id === id ? { ...movie, title: title, genre: genre } : movie  
  // })

  
  allMovies = allMovies.map((movie) => movie.id === id ? { ...movie, title, genre } : movie )

  setMoviesToLocalStorage()

  displayMovies()
}

const handleSubmit = (event) => {
  // evitar comportamiento por defecto del formulario
  event.preventDefault()
  
  // guardar valores que me ha puesto el usuario
  const formValues = getFormValues()
  if (!formValues) return

  const [title, genre, isSeen] = formValues
 
  const newMovie = { id: nanoid(5), title, genre, isSeen }

  // const newMovie2 = {
  //   id: ++counterId,
  //   title: myTitle,
  //   genre: myGenre,
  //   isSeen: myIsSeen
  // }

  //* Con el push, MUTAMOS el array original sin cambiarle la referencia
  // allMovies.push(newMovie)

  //* Es recomendable que siempre que se modifique el "array de base de datos" se le cambie la referencia completamente
  // allMovies = allMovies.concat(newMovie)
  allMovies = [...allMovies, newMovie] 
  
  // subimos la modificación a localStorage
  setMoviesToLocalStorage()

  displayMovies()

  form.reset()
  filtersForm.reset()

  
}

// añadir listener del submit
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

  //* 2 maneras de filtrar
  // Por el nombre exacto del género y filtrando por todas cuando seleccionamos "Todas"
  if ( genreValue === '' ) {
    displayMovies()
  }else {
    const filteredMovies = allMovies.filter((movie) => movie.genre === genreValue)
  
    displayMovies(filteredMovies)
  }
  

  // Filtrando preguntando si el género de la película incluye el string que has seleccionado (esto hace que al seleccionar "todas" que tiene un string vacío, tambiñen me las incluya todas.)
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



// displayMovies()
getMoviesFromLocalStorage()