// import Alert from './Alert.js'
import {faparser} from './node_modules/faparser/src/faparser.js'

//? Fetch
  //* El fetch necesita por parámetro que le pasemos la RUTA DE LO QUE QUEREMOS CONSEGUIR
  //* El PRIMER .then() nos da un objeto de tipo Response que nos da INFO DE LA RESPUESTA QUE NOS DA EL SERVIDOR
  //* El SEGUNDO .then() te va a ofrecer lo que has pedido, los datos

const btnQuijote = document.querySelector('.btnQuijote')
const btnUsuario = document.querySelector('.btnUsuario')
const btnRandom = document.querySelector('.btnRandom')
const selectGender = document.querySelector('.gender')
const outputQuijote = document.querySelector('.outputQuijote')


const createUser = (user) => {
  const { username, age, email } = user
  const cajaUser = document.createElement('div')
  cajaUser.innerHTML = `
  <h2>${username}</h2>
  <h3>Edad: ${age}</h3>
  <h4>${email}</h4>
  `
  cajaUser.style.cssText = 'position: absolute; top: 10px; right: 10px; background: tomato; color: white; padding: 1rem;'
  document.body.append(cajaUser)
}


let texto
btnQuijote.onclick = () => {
  fetch('./assets/elQuijote.txt')
    .then((response) => { 
      console.log(response)
      // Tendrás que usar el método que toque según el tipo de dato que quieras obtener
      return response.text()
    })
    .then((textoQuijote) => {      
      texto = textoQuijote
      outputQuijote.textContent = texto       
    })
    //! El Catch va a saltar con cualquiera de las dos promesas
    .catch((err) => console.error(err))
}


btnUsuario.onclick = () => {
  fetch('./assets/usuario.json')
    .then((resp) => resp.json())
    .then((user) => createUser(user))    
}



// Obtienes información de ésta URL
btnRandom.onclick = () => {
  fetch(`https://randomuser.me/api/?gender=${selectGender.value}&nat=ES&inc=name,picture`)
    .then((resp) => resp.json()) //Respuesta
    .then((user) => { //Devuelve...
      console.log(user)
      const alertContent = `<img src="${user.results[0].picture.medium}"> ${user.results[0].name.first} te ha enviado un mensaje. ♥`
      new Alert(alertContent).show()
    })
}
