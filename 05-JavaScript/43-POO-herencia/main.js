class Codehouser {

  constructor (nombre, email) {
    this.nombre = nombre
    this.email = email
  }

  infoContacto () {
    console.log(`Mi nombre es ${this.nombre} y mi email es ${this.email}`)
  }

}


class Alumno extends Codehouser{
  constructor (nombre, email, curso) {    
    super(nombre, email)    

    this.curso = curso
    this.aprobado = false
  }  

  aprobarCurso () {
    this.aprobado = true
  }

}

class Profesor extends Codehouser {
  constructor (nombre, email, asignaturas) {
    super(nombre, email)
    this.asignaturas = asignaturas
  }

  infoAsignaturas () {
    this.asignaturas.forEach((asignatura, index) => {
      console.log(`${index + 1}: ${asignatura}`)
    })
  }

}

class ProfeJunior extends Profesor {
  constructor (nombre, email, asignaturas, years) {
    super(nombre, email, asignaturas)
    this.years = years
  }
}


const javier = new ProfeJunior('Javi', 'javi@gmail.com', ['Git'], 3)


class ProfeSenior extends Profesor {

}


const ismael = new Codehouser('Ismael', 'ismael@gmail.com')
const raul = new Alumno('Raúl', 'raul@gmail.com', 'Bootcamp Fullstack')
const ivan = new Profesor('Ivan', 'ivan@gmail.com', ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Sass'])

console.log(ismael)
console.log(raul)
console.log(ivan)

console.log(raul.curso)
console.log(raul.nombre)

raul.aprobarCurso()
raul.infoContacto()
raul.saludar = () => console.log('hola')
raul.saludar()
console.log(raul instanceof Profesor)
