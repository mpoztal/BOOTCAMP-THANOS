/*
//* ESTILOS CSS NECESARIOS
.empty-input-error {
  animation: errorInOut 5s forwards ease;
}

.is-invalid::placeholder {
  color: $danger;
}

@keyframes errorInOut {
  0% {
    left: -100%;
  }
  20% {
    left: 50%;
  }
  80% {
    left: 50%;
  }
  100% {
    left: -100%;
  }
}  
*/

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

export default createBootstrapAlert