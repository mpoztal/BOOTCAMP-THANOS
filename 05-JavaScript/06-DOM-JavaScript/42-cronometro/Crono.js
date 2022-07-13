import Alert from './helpers/Alert.js'

class Crono {

  constructor(output) {    
    this.tiempoInicio = 0
    this.tiempoParada = 0 
    this.segCounter = 0
    this.interval = null
    this.output = output    
  }
  
  arrancar () {
    if (this.tiempoInicio !== 0) {
      const alert = new Alert('No puedo empezar un cronómetro YA EMPEZADO')
      alert.show()
      return
    }
   
    this.tiempoInicio = Date.now() 
    this.interval = setInterval(() => this.incrementCounter() , 100)    
  }
  
  incrementCounter () { 
    this.segCounter += 0.1
    this.output.innerHTML = this.segCounter.toFixed(2) + 'seg.'  
  }

  parar () {
    if (this.tiempoParada !== 0) {
      const alert = new Alert('No puedo parar un cronómetro que YA ESTÁ PARADO')
      alert.show()
      return 
    }
    if (this.tiempoInicio === 0) {
      const alert = new Alert('Primero tienes que darle a arrancar')
      alert.show()
      return
    }
    this.tiempoParada = Date.now()
    this.mostrarTiempo()  
    
    clearInterval(this.interval)
    this.segCounter = 0
  }

  resetear () {
    if (this.tiempoInicio === 0) {
      const alert = new Alert('Primero hay que arrancar y parar.')
      alert.show()
      return
    }else if (this.tiempoParada === 0) {     
      const alert = new Alert('Primero tienes que parar el cronómetro.')
      alert.show()
      return
    }
    this.tiempoInicio = 0
    this.tiempoParada = 0

    this.output.innerHTML = '0'

  }

  mostrarTiempo () {
    if (this.tiempoInicio === 0 || this.tiempoParada === 0) {
      console.error('Primero tienes que arrancar y parar.')
      return
    }
    const segundosTotales = (this.tiempoParada - this.tiempoInicio) / 1000
    console.log(`Han pasado exactamente ${segundosTotales.toFixed(2)} s.`)

    this.output.innerHTML = segundosTotales.toFixed(2) + 'seg.'
  }
}

export default Crono
