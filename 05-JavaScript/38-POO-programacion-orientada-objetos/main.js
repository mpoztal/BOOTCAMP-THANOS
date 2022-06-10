//? POO - Programación Orientada a Objetos 
//? OOP - Object Oriented Programming


/*
const coche = {
  // propiedades (info)
  brand: 'peugeot',
  doors: 5,
  color: 'red',

  // métodos (funcionalidad)
  start: function () {
    console.log('¡Ruuunnnn! 🚕💨')
  },

  stop: function () {
    console.log('Off')
  }
  
}

// este objeto, como es obvio, no comparte la misma funcionalidad que coche1
const coche2 = {
  brand: 'ferrari',
  doors: 3,
  color: 'green'
}


// console.log(coche.stop())
//console.log(coche2.start()) //! error
*/



//*************************************/
//? THIS

/*
const persona1 = {
  name: 'Ivan',
  age: 35,

  //* Este this va a hacer referencia al mismo objeto porque "function" guarda bien esa información
  saludo: function () {
    console.log(this)
    console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años`)
  }
}



const persona2 = {
  nombre: 'Jessica',
  age: '??',

  //! Este "this" va a imprimir el objeto Window porque las arrow functions no hacen referencia al objeto que las contiene sino siempre al objeto global (Window o Global)
  saludo: function () {
    console.log(this)
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.age} años`)
  }
}

const persona3 = {
  name: 'Viviana',
  age: '??',

  saludo() {
    console.log(this)
    console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años`)
  }
}

persona1.saludo()
persona2.saludo()
persona3.saludo()

*/

//****** "Fábrica de Objetos" --> CLASES **********/

//* Clase muy básica y poco dinámica
/*
class Coche {
  ruedas = 4
  marca = 'Seat'

  arrancar() {
    console.log('Runnnn 🏎💨')
  }
}

// Para crear una nueva "instancia" de tipo "Coche" usamos la palabra "new"

const coche3 = new Coche()
const coche4 = new Coche()

// podemos seguir añadiendo propiedades si hace falta
coche3.model = 'Ibiza'

console.log(coche3)
console.log(coche4)

coche3.arrancar()
coche4.arrancar()
*/


//* Clase dinámica que acepta parámetros por cada objeto que crees
//? CONSTRUCTOR

class CocheSeat {
  // en cada instancia SIEMPRE se ejecuta este método lo primero  
  constructor(modelo, ruedas) {
    this.marca = 'Seat'
    this.arrancado = false
    this.ruedas = ruedas ?? 4  // en este caso también valoraríamos el 0 como respuesta válida
    this.modelo = modelo || 'Ibiza'

    // Podemos tranquilamente llamar a cualquier método dentro del constructor para que se ejecute nada más instanciar un objeto
    this.infoCoche()
  }

  infoCoche() {
    console.log(`El coche es un ${this.marca} ${this.modelo}, tiene ${this.ruedas} ruedas y ${this.arrancado ? 'está arrancado' : 'está apagado.'}`)
  }

  arrancar() {    
    console.log(`Runnnn 🚕💨`)
    this.arrancado = true    
  }

}

// Cada vez que instanciamos un objeto lo que le pongas en los paréntesis del new lo va a recibir el "constructor"
const coche1 = new CocheSeat('Ibiza', 4)
const coche2 = new CocheSeat('León', 4)
console.log(coche1)
console.log(coche2)
