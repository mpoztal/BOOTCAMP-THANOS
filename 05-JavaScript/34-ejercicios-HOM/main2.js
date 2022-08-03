//const peliculas = [
   // 'El señor de los Anillos',
   // 'Harry Potter',
   // 'Matrix',
   // 'Robocop',
   // 'Gladiator',
   // 'Mad Max',
   // 'Up'
 //   ]

  // 1º Imprimáis todas las películas en consola así:
    //      1 -> El señor de los Anillos
    //      2 -> Harry Potter
    //      ....

//peliculas.forEach((pelicula, index) => {
    //console.log(`${index + 1} ->${pelicula}`)
//})

    //*2º Quiero un NUEVO ARRAY con SOLO las películas que tengan más de 7 letras
  
    //const filtrarPorNumLetras = peliculas.filter((pelicula) => {
    //return pelicula.length >7
  //})
//  console.log(filtrarPorNumLetras)

  //console.log(peliculas.filter((pelicula) => pelicula.length > 7))

  //* Quiero la primera película que encontréis que tenga 2 palabras (buscar en google, separar un string x palabras)
 
//console.log(peliculas.find((pelicula) => pelicula.split(' ').length === 2))


  //* Quiero un NUEVO ARRAY que tenga las mismas películas pero en mayúscula

  //const nuevoArrayMayuscula = peliculas.map((pelicula) => {
    //return pelicula.toUpperCase()
  //})
  //console.log(nuevoArrayMayuscula)


  //**********************************************************/

  const peliculas = [
    {
      titulo: 'El Señor de los Anillos',
      genero: ['Aventuras', 'Acción'],
      duracion: 250,
      year: 2001,
      director: 'Peter Jackson'
    },
    { 
      titulo: 'Harry Potter', 
      genero: ['Aventuras', 'Fantasía'], 
      duracion: 151, 
      year: 2001 , 
      director: 'Chris Columbus' 
    },
    { 
      titulo: 'Troya', 
      genero: ['Histórica', 'Acción'], 
      duracion: 132, 
      year: 2004 , 
      director: 'Wolfgang Petersen' 
    },
    { 
      titulo: 'Iron Man', 
      genero: ['Ciencia Ficción', 'Acción'], 
      duracion: 126,
      year: 2008 , 
      director: 'Jon Favreau' 
    },
    { 
      titulo: 'E.T.', 
      genero: ['Aventuras', 'Ciencia Ficción'], 
      duracion: 115, 
      year: 1982 , 
      director: 'Steven Spielberg' 
    },
    { 
      titulo: 'Los Goonies', 
      genero: ['Aventuras', 'Comedia'], 
      duracion: 114, 
      year: 1985 , 
      director: 'Richard Donner' 
    },
    { 
      titulo: 'Algo Pasa con Mary', 
      genero: ['Comedia', 'Comedia Romántica'], 
      duracion: 119, 
      year: 1998 , 
      director: 'Bobby Farrelly' 
    },
    { 
      titulo: 'Hook',
      genero: ['Aventuras', 'Fantasía'], 
      duracion: 142, 
      year: 1991 , 
      director: 'Steven Spielberg' 
    }
  ];

  // Ejercicio2

  //console.log(peliculas.filter((pelicula) => pelicula.year > 2000)) Otra forma

  nuevasPeliculas = peliculas.filter((pelicula) => pelicula.year > 2000)
  console.log(nuevasPeliculas)
  //Se interpretaría:
  //Guardame en éste nuevo array(nuevasPeliculas) que es el array de peliculas 
  //filtrado y por cada pelicula metes sólo aquellas peliculas cuyo year sea > 2000.


  //3.- Filtra las películas por genero 'Fantasía'

  fantasiaPeliculas = peliculas.filter((pelicula) => pelicula.genero.includes('Fantasía'))
  //fantasiaPeliculas = peliculas.filter((pelicula) => pelicula.genero.indexOf('Fantasía') >-1)
  console.log(fantasiaPeliculas)

  //4.- Vamos a ENCONTRAR una película de'Wolfgang Petersen' y guardarla en una variable


 const encontrarPelicula = peliculas.find((pelicula) => pelicula.director.includes('Wolfgang Petersen'))
console.log(encontrarPelicula)

//5.Vamos a MODIFICAR cada duración de las películas y sumarle a todas 100 minutos

const newArrayPeliculas = peliculas.map((pelicula) => {
   const peliculaModificada = {...pelicula, duracion: pelicula.duracion+100}
   return peliculaModificada
})
console.log(newArrayPeliculas)

//Ejercicio 6 

const peliculasConRating = peliculas.map((pelicula) => {
  return {...pelicula, rating: 5}

})
console.log(peliculasConRating)

//* EXTRA! añadamos el rating a 8 SOLO A LAS PELÍCULAS de Steven Spielberg

console.log(peliculas.map((pelicula) => {
  if (pelicula.director==='Steven Spielberg') {
    return {...pelicula, rating: 8}
  }else{
    return pelicula
  }


}))

// Simplificamos con un ternario
console.log(peliculas.map((pelicula) => pelicula.director === 'Steven Spielberg' ? {...pelicula, rating: 8} : pelicula))


