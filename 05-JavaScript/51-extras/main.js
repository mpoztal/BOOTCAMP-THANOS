// Este evento se ejecuta nada más cargar todo el DOM
document.addEventListener('DOMContentLoaded', () => console.log('página cargada'))

/*
let page = 1

window.addEventListener('scroll', (e) => {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    console.log('Página: ' + page)
    page++
  }
})
*/
const createPhotos = (photos) => {
  photos.forEach((photo) => {

    const div = document.createElement('div')
    div.className = 'photoBox'
    div.innerHTML = `
    <h2>${photo.title}</h2>
    <h3>${photo.id}</h3>
    <img src="${photo.thumbnailUrl}">
    `
    document.querySelector('.container').append(div)
  })
  
  
}

let page = 1
//* opción con filtros que nos dan páginas por cada petición
// const getPhotos = async () => {
//   const resp = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`)
//   const photos = await resp.json()
//   createPhotos(photos)
//   console.log(photos)
//   page++
// }


//* Opción pidiendo el array completo y creando trozos
let limit = 3
let initial = 0
const getPhotos = async () => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/photos`)
  const photos = await resp.json()
  
  const trozoArray = photos.slice(initial, limit)
  createPhotos(trozoArray)

  initial = limit
  limit += 3
  // page++
}




const handleIntersect = (entries) => {
  if (entries[0].isIntersecting) {
    console.log('dentro')

    getPhotos()
  }
}




const footer = document.querySelector('footer')

const observer = new IntersectionObserver(handleIntersect, {
  root: null,
  rootMargin: '200px',
  threshold: 0
})
observer.observe(footer)