//* CAZAR ELEMENTOS DEL DOM

// por su id con la funcion---> getElementById()
const myTitle = document.getElementById('main-title')
console.log(myTitle)

// por cualquier selector CSS----> con el querySelector()
const myList = document.querySelector('ul.list')
console.log(myList)

//! querySelector SOLO GUARDA EL PRIMERO QUE ENCUENTRA
const listItem = document.querySelector('.list-item')
console.log(listItem)

// para guardar varios elementos podemos usar "querySelectoAll" Siempre nos devuelve
// un array [.....]
const listItems = document.querySelectorAll('.list-item')
console.log(listItems)



// particularmente podemos hacer "querySelector" dentro de otro elemento
const firstListItems = myList.querySelectorAll('.list-item')
console.log(firstListItems)


//*******************************/
//*  INFO QUE PUEDO LEER O MODIFICAR DE UN ELEMENTO

//? su ID
console.dir(myTitle.id)
myTitle.id = 'hola-que-tal' // Así se cambia el ID


//? sus clases -> de 2 formas
// directamente viendo TODO SU STRING DE CLASES
console.log(myList.className)
myList.className = 'list text-center mt-5 p-4'

// a través de un método que todos los elementos tienen "classList"
const specialItem = document.querySelector('.special-item')
console.dir(specialItem)

specialItem.classList.add('mt-5', 'border') // Añade clases

specialItem.classList.remove('border') // Elimina clases

specialItem.classList.replace('mt-5', 'mt-2') // Reemplaza una clase


// devuelve TRUE o FALSE si el elemento contiene la clase
console.log(specialItem.classList.contains('border'))
console.log(specialItem.classList.contains('mt-2'))

// quita o añade la clase dependiendo de si ya la tiene puesta o no
// SERÍA HACER COMO UN INTERRUPTOR con una clase
specialItem.classList.toggle('rounded')
specialItem.classList.toggle('rounded')


//? Su contenido de texto o de otras etiquetas HTML
// de tres formas:  innerText, textContent, innerHTML 
console.log(myTitle.innerText) 
console.log(myTitle.textContent)
console.log(myTitle.innerHTML) // lo bueno de usar éste es q te deja ver etiquetas del html ej. <strong>zzz</strong>

//! innerText no interpreta el código HTML que escriba como tal.
myTitle.innerText = 'Hola, te he cambiado el título, <em>guaperas</em>'

myTitle.innerHTML = 'Hola, te he cambiado el título, <em>guaperas</em>'

const secondList = document.querySelector('ul.second-list')

console.log(secondList.innerHTML)
secondList.innerHTML = `
<li class="molon" id="super-lista">Soy molón 😀</li>
<li class="molon" id="super-lista2">Soy molón 😎</li>
`

//? Sus atributos
// acceder a un atributo
console.log(secondList.getAttribute('title'))

// crear/modificar un atributo
secondList.setAttribute('name', 'Me llamo lista')

// borrar un atributo
secondList.removeAttribute('title')

//! tenemos otra manera de crear atributos "data-" y de leerlos, 
//pero también podemos hacerlo con setAttribute y getAttribute
secondList.setAttribute('data-id', '283756295')

//? Sus atributos de tipo ( data-) data-
console.dir(secondList.dataset.id)
console.dir(secondList.dataset.ivan)

secondList.dataset.ivan = "Hola desde javascript" // Añadiendo nuevo atributo
secondList.dataset.city = "Barcelona"


//? Sus ESTILOS CSS
const secondTitle = document.querySelector('#title-2')
// secondTitle.classList.add('color-gold')
secondTitle.style.color = 'gold'  //Se puede modificar cualquier estilo de éste modo ¡ATENCION! QUE ES INLINE (EN LINEA)
secondTitle.style.backgroundColor = 'tomato'

//***********************************/

//* CREAR UN ELEMENTO NUEVO EN EL DOM DE FORMA MANUAL DESDE 0

// 1.- Crear una nueva etiqueta HTML en memoria

const myNewText = document.createElement('p')

// 2.- Añadirle clases, id, atributos, estilos, etc.
myNewText.classList.add('color-green')
myNewText.id = 'superparrafo'

console.log(myNewText)

// 3.- Añadirle el contenido que quieras
myNewText.innerHTML = 'Pues pongo un supertexto para rellenar mi superparrafo 🦸‍♀️'

// 4.- Añadir el elemento al DOM
// primero necesitaremos el elemento donde meteremos el nuevo
const caja = document.querySelector('div.caja')

//luego decidimos en qué lugar de la caja se meterá

// caja.append(myNewText) // al final de todo de la caja
// caja.prepend(myNewText) // al principio de todo de la caja
// caja.after(myNewText) // justo después de la caja, pero FUERA
caja.before(myNewText) // justo antes de la caja, pero FUERA



//* Esto era la forma manual, pero como ya hemos visto, podemos crear un elemento siempre que tengamos a su padre

caja.innerHTML = `<p>Yo ya vengo de serie dentro de la caja</p>
<p class="color-green" id="superparrafo">Pues pongo un supertexto para rellenar mi superparrafo 🦸‍♀️</p>`
