import Alert from './Alert.js'

const inputPokemon = document.querySelector('.inputPokemon')

inputPokemon.addEventListener('keyup', (event) => {
  if (event.key !== 'Enter') return
  if (inputPokemon.value.trim() === '') return

  getPokemon(inputPokemon.value)  
})

const createPokemon = (pokemon) => {
  console.log(pokemon)
  const image = `<img src="${pokemon.sprites.front_default}">`
  new Alert(`${image} ${pokemon.name}`).show()
}

// async function getPokemon (pokemonValue) {
const getPokemon = async (pokemonValue) => {
  // fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  //   .then((resp) => resp.json())
  //   .then((pokemon) => console.log(pokemon))
  //   .catch((err) => console.error(err))
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}`)
  
    if (resp.status === 404) throw new Error('Pokemon no encontrado')  

    const pokemon = await resp.json()
  
    createPokemon(pokemon)

    console.log('Dentro del try catch')

   
  } catch(error) {    
    new Alert(error.message).show()
  }

  console.log('Fuera del try catch')




}
