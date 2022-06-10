/*

const peliculas = [
  'El señor de los Anillos',
  'Harry Potter',
  'Matrix',
  'Robocop',
  'Gladiator',
  'Mad Max',
  'Up'
]

//* Imprimáis todas las películas en consola así:
    //      1 -> El señor de los Anillos
    //      2 -> Harry Potter
    //      ....

    peliculas.forEach( (pelicula, index) => {
      console.log(`${index + 1} -> ${pelicula}`)
    } )


//* Quiero un NUEVO ARRAY con SOLO las películas que tengan más de 7 letras
const peliculasMas7Letras = peliculas.filter((pelicula) => { return pelicula.length > 7 })

console.log(peliculas.filter((pelicula) => pelicula.length > 7))


console.log(peliculasMas7Letras)


//* Quiero la primera película que encontréis que tenga 2 palabras

console.log(peliculas.find( (pelicula) => { 

  const arrayPalabras = pelicula.split(' ')

  if (arrayPalabras.length === 2) {
    return true
  } 

} ))

console.log(peliculas.find( (pelicula) => {
  return pelicula.split(' ').length === 2
} ))


console.log(peliculas.find( (pelicula) => pelicula.split(' ').length === 2 ))





//* Quiero un NUEVO ARRAY que tenga las mismas películas pero en mayúscula


const peliculasMayusculas = peliculas.map( (pelicula) => {
  return pelicula.toUpperCase()
} )

console.log(peliculasMayusculas)
*/
//**************************************************

const movies = [
  {
    title: 'El Señor de los Anillos',
    gender: ['Aventuras', 'Acción'],
    duration: 250,
    year: 2001,
    director: 'Peter Jackson'
  },
  { 
    title: 'Harry Potter', 
    gender: ['Aventuras', 'Fantasía'], 
    duration: 151, 
    year: 2001 , 
    director: 'Chris Columbus' 
  },
  { 
    title: 'Troya', 
    gender: ['Histórica', 'Acción'], 
    duration: 132, 
    year: 2004 , 
    director: 'Wolfgang Petersen' 
  },
  { 
    title: 'Iron Man', 
    gender: ['Ciencia Ficción', 'Acción'], 
    duration: 126,
    year: 2008 , 
    director: 'Jon Favreau' 
  },
  { 
    title: 'E.T.', 
    gender: ['Aventuras', 'Ciencia Ficción'], 
    duration: 115, 
    year: 1982 , 
    director: 'Steven Spielberg' 
  },
  { 
    title: 'Los Goonies', 
    gender: ['Aventuras', 'Comedia'], 
    duration: 114, 
    year: 1985 , 
    director: 'Richard Donner' 
  },
  { 
    title: 'Algo Pasa con Mary', 
    gender: ['Comedia', 'Comedia Romántica'], 
    duration: 119, 
    year: 1998 , 
    director: 'Bobby Farrelly' 
  },
  { 
    title: 'Hook',
    gender: ['Aventuras', 'Fantasía'], 
    duration: 142, 
    year: 1991 , 
    director: 'Steven Spielberg' 
  }
]

//* Ejercicio 1
/**
 * Vamos a imprimir todas los títulos de las películas con un número delante
 */

movies.forEach( (movie, index) => { 
  console.log(`${index + 1} -> ${movie.title}`)
} )

//* Ejercicio 2
/**
 * Filtra todas las películas que sean más modernas que el año 2000 y imprime el array por consola
 */

let modernMovies = movies.filter((movie) => {
  return movie.year > 2000
})

modernMovies = movies.filter((movie) => movie.year > 2000)
console.log('Peliculas de más del 2000 -> ',modernMovies)

// let modernTitles = modernMovies.map((movie) => {return movie.title})

// modernTitles = movies.filter((movie) => movie.year > 2000).map((movie) => movie.title)

// console.log(modernTitles)

//* Ejercicio 3
/**
 * Filtra las películas por genero 'Fantasía'
 */
const fantasyMovies = movies.filter( (movie) => {   
  for(let gender of movie.gender) {
    if (gender === 'Fantasía') return true
  }
} )

const fantasyMovies2 = movies.filter( (movie) => { return movie.gender.includes('Fantasía') } )


console.log(fantasyMovies2)

//* Ejercicio 4
/**
 * Vamos a ENCONTRAR una película de 'Wolfgang Petersen' y guardarla en una variable
 */

let movieWolfgang = movies.find( (movie) => movie.director === 'Wolfgang Petersen')
movieWolfgang = movies.find( (movie) => movie.director.includes('fgang'))

console.log(movieWolfgang)

//* Ejercicio 5
/**
 * Vamos a MODIFICAR cada duración de las películas y sumarle a todas 100 minutos
 */

let moviesLongDuration = movies.map((movie) => { 

  // modifica el objeto
  //! Hay que tener cuidado de no mutar también el array original
  const modifiedMovie = {...movie, duration: movie.duration + 100}

  // retorna el objeto modificado
  return modifiedMovie

})

moviesLongDuration = movies.map((movie) => { 
  return {...movie, duration: movie.duration + 100}
})

//! Ojo a la siguiente versión. Cuando quitamos las llaves y el return PERO DEVOLVEMOS UN OBJETO, dará error y tenemos que poner paréntesis

moviesLongDuration = movies.map((movie) => ({...movie, duration: movie.duration + 100}))

console.log(movies)
console.log(moviesLongDuration)

//* Ejercicio 6
/**
 * Vamos a AÑADIR a todas las películas la propiedad  rating  que empezará en 5
 */

const moviesWithRating = movies.map((movie) => {  
  return {...movie, rating: 5}
})

console.log(moviesWithRating)

//* EXTRA! añadamos el rating a 8 SOLO A LAS PELÍCULAS de Steven Spielberg

console.log(movies.map((movie) => {

  if (movie.director === 'Steven Spielberg') {
    return {...movie, rating: 8 }
  }else {
    return movie
  }

}))

console.log(movies.map((movie) => movie.director === 'Steven Spielberg' ? {...movie, rating: 8} : movie))


console.log(movies.some((movie) => movie.duration < 100))

console.log(movies.some((movie) => movie.year < 2000))


console.log(movies.every((movie) => movie.duration > 120))
