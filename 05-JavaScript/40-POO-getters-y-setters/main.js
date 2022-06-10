class Book {
  #title
  #pages
  #isRidden

  constructor (title, pages) {
    this.#title = title
    this.#pages = pages
    this.#isRidden = false
  }

  // los siguientes 2 métodos son los que se suelen usar para obtener y cambiar una propiedad
  getTitle () {
    return this.#title
  }
  
  setTitle (newTitle) {
    if (typeof newTitle !== 'string') {
      return
    }
    this.#title = newTitle
  }

  // aunque la forma más correcta actualmente sería con un getter y un setter
  get pages () {
    return this.#pages
  }

  set pages (newPages) {
    if (typeof newPages !== 'number') {
      return
    }

    this.#pages = newPages
  }
}

const book1 = new Book('El Perfume', 150)

// Para obtener el título llamamos a getTitle()
console.log(book1.getTitle())

//! veremos como no cambia el títle porque no es un string
book1.setTitle(25)

//* Aquí si que cambia
book1.setTitle('Harry Potter')
console.log(book1)

//? con los setter y getters
console.log(book1.pages)
book1.pages = '345' //! no las cambiará
book1.pages = 200
console.log(book1)
