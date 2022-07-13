/**
 * 
 * Añadid un h1 a mano en el DOM
 * 
 * * Cazáis el h1 con el id="title" y le cambiáis el Texto por otro
 * 
 * * Creáis un botón de forma MANUAL con JavaScript y lo añadís después del título
 *  * Que el botón diga "Haz clic aquí"
 * 
 *  * A este botón le ponéis la clase "rounded" y en una hoja de estilos a parte que tenga   los bordes redondeados 5px
 *  
 *  * Luego le añadís al botón estilos DIRECTAMENTE DESDE JAVASCRIPT poniéndole un color de fondo "tomato" y un color "white"
 * 
 *  * Al mismo botón le añadís un atributo "data-id" con el valor "12345"
 * 
 *  * Al título le añadís el atributo title="Soy un título"
 * 
 */

const h1 = document.getElementById('title')
// const h1 = document.querySelector('#title')

h1.innerHTML = 'He cambiado el título 👿'


const myButton = document.createElement('button')
myButton.innerHTML = 'Haz clic aquí'
myButton.className = 'rounded'
// myButton.classList.add('rounded')
// myButton.style.backgroundColor = 'tomato'
// myButton.style.color = 'white'
myButton.style.cssText = `
background-color: tomato;
color: white;
border: none;
padding: .5rem;
cursor: pointer;
`
h1.after(myButton)
console.log(myButton)


myButton.setAttribute('data-id', '12345')
myButton.dataset.myId = '12345'


h1.setAttribute('title', 'Soy un título')
