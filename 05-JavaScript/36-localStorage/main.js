//? Local Storage
//! SOLO PERMITE GUARDAR STRINGS


const nombre = 'Ivan'
const edad = 35
const arr = [1, 2, 3]
const obj = {
  fruta: 'plátano',
  cantidad: 7
}

//* 1.- Añadir algo a localStorage --> setItem()
//! Si añadimos un elemento con una "key" que ya existe, lo va a sobreescribir

localStorage.setItem('nombre', nombre)
localStorage.setItem('edad', edad)
localStorage.setItem('numeros', arr) // problemas
localStorage.setItem('fruta', obj) // problemas


//* 2.- Coger algo de localStorage --> getItem()
//! Si intentamos obtener un elemento que no existe nos devolverá null

console.log(localStorage.getItem('nombre'))
console.log(localStorage.getItem('edad'))
console.log(localStorage.getItem('numeros')) // problemas
console.log(localStorage.getItem('fruta')) // problemas

//? Para solucionar los "problemas" con los arrays y objetos, usamos otro objeto que también viene con JavaScript que se llama JSON

//* 3.- Convertir cualquier cosa en un string auténtico --> JSON.stringify()

const frutas = ['🍎', '🍐', '🍋']
const platano = {
  fruta: '🍌',
  cantidad: 7
}

const frutasString = JSON.stringify(frutas)
console.log(frutasString)

const platanoString = JSON.stringify(platano)
console.log(platanoString)

localStorage.setItem('platano', platanoString) // sin problemas
localStorage.setItem('arrFrutas', frutasString) // sin problemas


//* 4.- Conseguir objetos y arrays auténticos a partir de un string --> JSON.parse()

const platanoObjString = localStorage.getItem('platano')
const platanoReal = JSON.parse(platanoObjString)
console.log(platanoReal.fruta)


//* EXTRA 
// Eliminar un elemento de localStorage
localStorage.removeItem('fruta')

// Borrar TODOS los elementos del localStorage
localStorage.clear()


//? La forma más normal de tenerlo:

const allMovies = [ {title: 'Mad Max'}, {title: 'Harry Potter'} ]

// Meter datos rápido
localStorage.setItem('allMovies', JSON.stringify(allMovies))

// Coger datos rápido
const arrMovies = JSON.parse(localStorage.getItem('allMovies'))