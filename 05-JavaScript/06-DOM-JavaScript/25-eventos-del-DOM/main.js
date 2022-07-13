//* EVENTOS DEL DOM EN JAVASCRIPT

//? Primero tenemos que cazar el elemento al que le queramos escuchar sus eventos
const imagen = document.querySelector('img')
const boton = document.querySelector('button')


//? Le añadimos un "escuchador" al elemento y le decimos qué evento queremos escucharle

let contadorDeClicks = 0
const clickEnLaImagen = () => {
  contadorDeClicks++
  console.log(`Has hecho click en la imagen ${contadorDeClicks} veces`)
}

// addEventListener requiere 2 parámetros:
  // un string con el nombre del evento
  // una referencia a una función
    // puede ser una función que ya tengas creada o pasarle irectamente una función anónima para que se ejecute
imagen.addEventListener('click', clickEnLaImagen )

imagen.addEventListener('mouseenter', () => document.body.style.backgroundColor = 'pink')
imagen.addEventListener('mouseleave', function() { document.body.style.backgroundColor = 'white' })

boton.addEventListener('click', () => { 
  console.log('Click en el botón')
  console.log() 
  imagen.classList.add('saltar') 
} )



document.body.addEventListener('keypress', () => console.log('has apretado una tecla'))

// el evento animationend "salta" cuando un elemento termina una animación
imagen.addEventListener('animationiteration', () => console.log('animación terminada') )

document.addEventListener('scroll', () => console.log())


//* TODOS LOS EVENTOS pasan como PRIMER PARÁMETRO DE LA FUNCIÓN QUE PONEMOS en el addEventListener un objeto que da MUCHA INFORMACIÓN DEL EVENTO

document.body.addEventListener('click', (evento) => {

  if (evento.target.className === 'titulo') {
    console.log('Has hecho clic al título')
  }

})

const apretarTecla = (evento) => {
  console.log(evento)

  if (evento.key === 'A') {
    document.body.style.backgroundColor = 'hotpink'
  }



}

document.body.addEventListener('keypress', (evento) => apretarTecla(evento))


//******************************************/

//* TENEMOS UN PAR DE MANERAS MÁS DE CREAR ESCUCHADORES

// 1.- Añadiendo dentro de la etiqueta HTML un atributo con el mismo nombre que el evento que quieres escuchar pero con "on" delante. Ej: onclick="clickEnLinea()"

const clickEnLinea = () => {
  console.log('Has hecho clic directamente desde HTML')
}

const miFoto = document.querySelector('.mi-foto')
console.dir(miFoto)


// 2.- Todos los objetos cazados tienen una propiedad "on...." para cada evento que existe. Podemos añadirle a esa propiedad la llamada a una función

const clickDesdePropiedad = (evt) => {
  console.log(evt)
  console.log('Has hecho clic desde la propiedad "oncontextmenu"')
  
}

miFoto.onclick = (evt) => console.log('has hecho click', evt)
miFoto.oncontextmenu = (evt) => clickDesdePropiedad(evt)

console.dir(miFoto)

//***************************/

//* Prevenir el comportamiento por defecto de un elemento
// Hay elementos que tienen un comportamiento por defecto:
  // un formulario cuando lo envías se recarga la página
  // un link "a" te reenvía a una url
  // el botón derecho te abre un menú contextual

// podemos prevenir ese comportamiento utilizando el "event object" y su método "event.preventDefault()"

// const formulario = document.forms[0]
const formulario = document.querySelector('#form')

formulario.addEventListener('submit', (evt) => {
  evt.preventDefault()
  console.log('formulario enviado', evt)
})
