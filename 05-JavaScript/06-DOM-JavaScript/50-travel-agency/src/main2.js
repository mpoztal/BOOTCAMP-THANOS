// Este evento se ejecuta nada más cargar todo el DOM
document.addEventListener('DOMContentLoaded', () => console.log('página cargada'))

let page = 1

window.addEventListener('scroll', (e) => {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    console.log('Página: ' + page)
    page++
  }
})
