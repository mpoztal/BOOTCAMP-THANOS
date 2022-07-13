
class Alert {
  constructor (message, color, delay) {
    this.message = message || 'Error'
    this.color = color || 'danger'
    this.delay = delay || 3000
    this.alert = this.createAlertMarkup()    
  }

  createAlertMarkup () {
    const alert = document.createElement('div')
    alert.className = `alert alert-${this.color} position-absolute start-50 translate-middle-x bottom-0`
    alert.innerHTML = this.message
    alert.style.zIndex = '1100'

    return alert
  }

  createAlertAnimation () {
    
    this.alert.animate([
      // { left: '-100%' },
      // { left: '50%', offset: 0.1 },
      // { left: '50%', offset: 0.9 },
      // { left: '-100%' }  
      {opacity: 0},      
      {opacity: 1}    
    ], { duration: 500, easing: 'ease-in' })


    setTimeout(() => {
      const animationFadeOut = this.alert.animate([
        {opacity: 1}, 
        {opacity: 0} 
      ], { duration: 500, easing: 'ease-out' })

      animationFadeOut.onfinish = () => this.alert.remove()
    }, this.delay)
  }

  show () {
    this.createAlertAnimation()
    document.body.append(this.alert)
  }


}




const createBootstrapAlert = (message = 'Error', color = 'danger') => {
  const alert = document.createElement('div')
  alert.className = `empty-input-error alert alert-${color} position-absolute translate-middle-x bottom-0`
  alert.innerHTML = message
  alert.style.zIndex = '1100'

  document.body.append(alert)

  // alert.addEventListener('animationend', () => alert.remove())

  // Esto es del futuro
  setTimeout(() => { alert.remove() }, 6000)
}

export default Alert