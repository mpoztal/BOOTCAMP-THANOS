const peliculas = [
    'El señor de los Anillos',
    'Harry Potter',
    'Matrix',
    'Robocop',
    'Gladiator',
    'Mad Max',
    'Up'
  ]

  // 1º Imprimáis todas las películas en consola así:
    //      1 -> El señor de los Anillos
    //      2 -> Harry Potter
    //      ....

peliculas.forEach((pelicula, index) => {
    console.log(`${index + 1} ->${pelicula}`)
})

    //*2º Quiero un NUEVO ARRAY con SOLO las películas que tengan más de 7 letras
  const filtrarPorNumLetras = peliculas.filter((pelicula) => {
    return pelicula.length >7
  })
  console.log(filtrarPorNumLetras)
