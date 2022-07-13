import Crono from './Crono.js'

const output = document.querySelector('.output')
const startBtn = document.querySelector('.startBtn')
const stopBtn = document.querySelector('.stopBtn')
const resetBtn = document.querySelector('.resetBtn')

// Primero me dicen que tengo que instanciar un Crono y pasarle un elemento "output", es decir, donde se van a imprimir los segundos
const c1 = new Crono(output)

// Después de instanciar me dice la documentación que me regala 3 métodos para manejar el Crono
startBtn.onclick = () => c1.arrancar()
stopBtn.onclick = () => c1.parar()
resetBtn.onclick = () => c1.resetear()