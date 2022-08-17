//* Propiedades y métodos privados
//! No pueden ser vistos ni modificados fuera de la clase

class SeatCar {
  #brand = ''

  constructor (model) {
    // el guión bajo era una convención para decirle a otro programador que no se mutaran esas propiedades directamente
    this._model = model

    // con la almohadilla hacemos una propiedad o método PRIVADO, NO SE PUEDE MUTAR DESDE FUERA
    this.#brand = 'Seat' 
    
    
    // sin problema podemos utilizar métodos privados dentro de la class
    this.#carInfo()
  }

  newModel () {
    this._model = 'Córdoba'
  }

  #carInfo () {
    // también podemos utilizar propiedades privadas dentro de nuestra class
    console.log(`El coche es un ${this.#brand} ${this._model}`)
  }
}

const car1 = new SeatCar('Ibiza')
console.log(car1)

// Podemos si queremos modificar cualquier propiedad directamente desde fuera
car1._model = 'León'

console.log(car1)


//********************/
//* Propiedades y métodos estáticos
//? Entre tu y yo, creo que no usaréis mucho en vuestra vida el "static", pero hay que conocerlo

class Mates {
  static FIBONACCI = [1, 1, 2, 3, 5, 8, 13]
  static PI = 3.141596

  static suma(num1, num2) {
    return num1 + num2
  }
  static resta(num1, num2) {
    return num1 - num2
  }
  static potencia(base, exponente) {
    return base ** exponente
  }
}

// const mates1 = new Mates()

// console.log(mates1.PI) //! error
// console.log(mates1.suma(4,5)) //! error

console.log(Mates.PI)
console.log(Mates.FIBONACCI)
console.log(Mates.potencia(3, 4))

// el objeto Math de JavaScript tiene muchas propiedades y métodos estáticos
console.log(Math.PI)

// Para saber si un array es un array usábamos otro método estático de JavaScript
console.log(Array.isArray([1, 2, 3]))