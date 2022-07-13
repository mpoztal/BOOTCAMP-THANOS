const button = document.querySelector('.btn')
const padre = document.querySelector('.padre')


//* Traversing es "viajar" entre elementos
//! Vigilad de usar siempre la opción que diga "Element"
//? elementos = etiquetas HTML

// la palabra children me devuelve un array con los hijos que son elementos (etiquetas)
console.log('children -->', padre.children)

// parentElement --> Su padre
console.log('parentElement -->', padre.parentElement) // div.container

// firstElementChild --> Primer hijo
console.log('firstElementChild -->', padre.firstElementChild) // h2


// lastElementChild --> Último hijo
console.log('lastElementChild -->', padre.lastElementChild) // div

// nextElementSibling --> Siguiente hermano
console.log('nextElementSibling -->', padre.nextElementSibling)  // button

// previousElementSibling --> Anterior hermano
console.log('previousElementSibling -->', padre.previousElementSibling)  // h1


button.addEventListener('click', () => {irstElementChild.
  // padre.firstElementChild.nextElementSibling.fstyle.backgroundColor = 'gold'
  padre.querySelector('p').style.backgroundColor = 'pink'

  button.parentElement.style.border = '2px solid lightseagreen'

  button.remove()

})
