import AlertTW from '../helpers/AlertTW'
import Destination from './Destination'
// Esta es mi pequeña base de datos
class TravelAgency {
  constructor () {
    // "array global"
    this.allDests = []
    this.form = document.querySelector('.mainForm')
    this.notFavoriteFilter = document.querySelector('.notFavorite')
    this.favoriteFilter = document.querySelector('.favorite')
    this.clearFilters = document.querySelector('.clearFilters')
    this.searchDestinationInput = document.querySelector('.searchDestination')
    this.destinationsBox = document.querySelector('.destinations')

    this.editingMode = false
    this.currentDestination = null

    this.form.onsubmit = (event) => { this.handleSubmit(event) }
    this.notFavoriteFilter.onclick = () => this.filterBy('not favorite')
    this.favoriteFilter.onclick = () => this.filterBy('favorite')
    this.clearFilters.onclick = () => this.printDestinations()
    this.searchDestinationInput.onkeyup = (event) => this.searchDestination(event)

    this.getAllDestinations()
  }

  printDestinations (array = this.allDests) {
    this.destinationsBox.innerHTML = ''
    array.forEach((dest) => {
      this.destinationsBox.append(dest.destinationHTML)
    })
  }

  async getAllDestinations () {
    // fetch('https://api-de-travels.herokuapp.com/destinations')
    //   .then((resp) => resp.json())
    //   .then((destinations) => console.log(destinations))
    //   .catch((err) => console.error(err))
    try {
      const resp = await fetch('https://api-de-travels.herokuapp.com/destinations')
      const destinations = await resp.json()
      this.allDests = destinations.map((dest) => {
        const newDest = new Destination(dest, this.deleteDestination)

        newDest.deleteButton.onclick = () => this.deleteDestination(newDest.id)
        newDest.heartButton.onclick = () => this.changeFavorite(newDest)
        newDest.editButton.onclick = () => this.editDestination(newDest)

        return newDest
      })
      this.printDestinations()
    } catch (err) {
      console.error(err)
    }
  }
//... Nos indica q vamos a pasar varios inputs un array de inputs
  checkValues (...inputs) {
    inputs.forEach((input) => {
      input.classList.toggle('ring', input.value === '')
      input.classList.toggle('ring-red-400', input.value === '')
    })
  }

  async addDestination (cityValue, countryValue, photoValue) {
    // Crear un objeto con los nuevos datos
    const newDest = {
      city: cityValue,
      country: countryValue,
      photo: photoValue,
      visited: false,
      favorite: false
    }

    // crear el objeto de OPCIONES DE LA PETICIÓN AL SERVIDOR
    const postOptions = {
      // GET   POST   PUT  PATCH   DELETE
      method: 'POST',
      // las cabeceras le dan info al servidor para saber qué le voy a enviar por ejemplo
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      },
      // lo que le vamos a enviar al servidor (¡¡Hay que convertirlo en JSON!!)
      body: JSON.stringify(newDest)
    }

    try {
      const resp = await fetch('https://api-de-travels.herokuapp.com/destinations', postOptions)

      if (!resp.ok) {
        throw new Error('Algo salió mal. 😢')
      }

      // una vez subida la nueva destinación ya podemos obtener otra vez todo de la API
      this.getAllDestinations()
    } catch (err) {
      console.error(err)
    }

    this.form.reset()
  }

  async changeFavorite (dest) {
    const newFavorite = { favorite: !dest.favorite }

    const patchOptions = {
      method: 'PATCH',// con patch modifica una parte
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(newFavorite)
    }

    try {
      const resp = await fetch(`https://api-de-travels.herokuapp.com/destinations/${dest.id}`, patchOptions)

      if (!resp.ok) {
        throw new Error('Algo salió mal 😢')
      }

      this.getAllDestinations()

      const favDest = await resp.json()
      new AlertTW(`${favDest.city} actualizada.`, 'bg-yellow-400').show()
    } catch (err) {
      console.error(err)
    }
  }
// Opcion de borrar
  deleteDestination (id) {
    fetch(`https://api-de-travels.herokuapp.com/destinations/${id}`, {
      method: 'DELETE'
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Algo salió mal 😢')
        }

        this.getAllDestinations()
      })
      .catch((err) => console.error(err))
  }

  editDestination (dest) {
    // subir los valores al formulario
    this.form.city.value = dest.city
    this.form.country.value = dest.country
    this.form.photo.value = dest.photo

    // cambiar el botón de añadir por editar
    this.form.btnAddEdit.className = 'bg-pink-300 hover:bg-pink-200 py-1 px-3 rounded row-span-2'
    this.form.btnAddEdit.innerHTML = 'Editar'

    // le doy al interruptor de "editingMode"
    this.editingMode = true

    // guardo el destination que he hecho click en global
    this.currentDestination = dest
  }

  updateDestination (city, country, photo) {
    const updatedDest = {
      city,
      country,
      photo,
      favorite: this.currentDestination.favorite,
      visited: this.currentDestination.visited
    }

    const putOptions = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(updatedDest)
    }

    fetch(`https://api-de-travels.herokuapp.com/destinations/${this.currentDestination.id}`, putOptions)
      .then((resp) => {
        if (!resp.ok) throw new Error('Algo salió mal 😢')

        this.getAllDestinations()
      })
      .catch((err) => console.error(err))

    // volver a poner todo en estado de añadir
    this.form.btnAddEdit.className = 'bg-violet-300 hover:bg-violet-200 py-1 px-3 rounded row-span-2'
    this.form.btnAddEdit.innerHTML = 'Añadir'
    this.form.reset()

    this.editingMode = false
    this.currentDestination = null
  }

  handleSubmit (event) {
    event.preventDefault()
    this.checkValues(this.form.city, this.form.country, this.form.photo)
    const city = this.form.city.value
    const country = this.form.country.value
    const photo = this.form.photo.value

    if (city === '' || country === '' || photo === '') {
      new AlertTW('No puedes dejar ningún campo vacío.', 'bg-red-500').show()
      return
    }

    if (this.editingMode) {
      this.updateDestination(city, country, photo)
    } else {
      this.addDestination(city, country, photo)
    }
  }

  filterBy (filterName) {
    let filteredDests = []

    if (filterName === 'not favorite') {
      filteredDests = this.allDests.filter((dest) => !dest.favorite)
    } else if (filterName === 'favorite') {
      filteredDests = this.allDests.filter((dest) => dest.favorite)
    }

    this.printDestinations(filteredDests)
  }

  changeAccentsFromLetters (text) {
    const parsedText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    return parsedText
  }

  searchDestination (event) {
    const filteredDests = this.allDests.filter((dest) => {
      const cityNoAccents = this.changeAccentsFromLetters(dest.city)
      const valueNoAccents = this.changeAccentsFromLetters(event.target.value)

      return cityNoAccents.toLowerCase().includes(valueNoAccents.toLowerCase())
    })
    this.printDestinations(filteredDests)
  }
}

export default TravelAgency
