//? Objeto Date()

// Tiene un método estático (que no necesita ser instanciado) que sirve para darte una fecha en milisegundos desde el 1 de enero de 1970
const msActuales = Date.now()
console.log(msActuales)

// Si en cambio, instanciamos un nuevo objeto de tipo Date obtenemos un objeto que tiene mucha información
// Si no pones nada en los paréntesis te guarda la fecha actual
const fechaActual = new Date()
//! Aunque veamos en consola un String, lo que guarda es un objeto de tipo Date con un montón de métodos para trabajar con fechas
console.dir(fechaActual)


const miCumple = new Date(1987, 0, 4, 21, 40)
const navidad = new Date('Dec 25 2021 22:22:22')
const fechaMilisegundos = new Date (315646511654)
console.log(miCumple)
console.log(navidad)
console.log(fechaMilisegundos)


//* Métodos para obtener datos de las fechas
//! cualquiera de estos te ofrece la fecha EN TU ZONA HORARIA
console.log(fechaMilisegundos.getFullYear())
console.log(fechaMilisegundos.getMonth() + 1) // sumamos 1 porque los meses los trata como un array, empiezan en 0
console.log(fechaMilisegundos.getDay()) // 0 es domingo y sábado es 6
console.log(fechaMilisegundos.getDate()) // día del més empezando por el 1
console.log(fechaMilisegundos.getHours())
console.log(fechaMilisegundos.getMinutes())
console.log(fechaMilisegundos.getSeconds())
console.log(fechaMilisegundos.getMilliseconds())

//* Para sacar los milisegundos de una fecha
console.log(miCumple.getTime())

//! utilizando los métodos con UTC siempre obtendrás la hora que fue en Londres
console.log(fechaMilisegundos.getUTCHours())




//* Métodos para CAMBIAR los datos de las fechas

navidad.setFullYear(2015)
navidad.setMinutes(45)
// y así con todos los métodos

console.log(navidad)

//* Podemos mostrar en pantalla un String con la fecha actual de una forma "Cool". con el método toLocaleString()

// si solo le ponemos el string con el país, nos devuelve algo parecido a esto --> 4/1/1987, 21:40:00
console.log(miCumple.toLocaleString('es'))

// como extra podemos pasarle un segundo parámetro con un objeto de configuración

const options = {
  // dateStyle: 'short',
  // timeStyle: 'short', 
  weekday: 'long',
  year: 'numeric',
  day: 'numeric',
  hour: 'numeric'
}

console.log(miCumple.toLocaleString('es', options))
console.log(miCumple.toLocaleString('ko', {day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric'}))
