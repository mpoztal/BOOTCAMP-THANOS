/**
 * 
 * Dentro de una variable podemos guarda:
 * 
 * * VALORES PRIMITIVOS --> guardados como VALOR
 * 
 * ? String
 * ? Number
 * ? Boolean
 * ? null
 * ? undefined
 * 
 * ? Symbol
 * ? BigInt
 * 
 * * VALORES guardados como REFERENCIA
 * 
 * Varios valores dentro de una misma variable
 * ? Array
 * Funciones que ejecutan código y que también pueden retornar información
 * ? Function
 * 
 * ? Object --> Nos dan la posibilidad de guardar VARIOS DATOS que hacen referencia a UNA MISMA COSA, un mismo "ente"
 * 
 * 
 */

//* Crear de forma LITERAL un objeto
// Lo primero que vamos a ver de un objeto son sus PROPIEDADES, que son como variables que simplemente se guardan dentro del objeto

//! Los objetos siempre funcionan por PARES (llave: valor) (propiedad: valor de la propiedad) (KEY: VALUE)
//! entre un par y otro, se separa con una coma

const frutas = ['🍎', '🍋', '🍇']
console.log(frutas[0])

const platano = {   //  0x9998  -->  {}
  color: 'amarillo',
  procedencia: 'Islas Canarias',
  precio: 2,
  'tiene motitas': true,
  tiendas: ['Mercadona', 'DIA', {nombre: 'Lidl'}],
  sabor: {
    dulce: 3,
    amargo: 1,
    salado: 0
  }
}

console.log(platano)

//* Para poder acceder a cualquier objeto, para entrar en él usamos la notación del punto --> .
console.log(platano.procedencia) // 'Islas Canarias'

console.log(platano.tiendas[2].nombre) // 'Lidl'

console.log(platano.sabor.salado) // 0


const [tienda1, tienda2] = platano.tiendas
console.log(tienda1, tienda2)



//* Otra manera de acceder a las propiedades de un objeto
// se puede llamar a una propiedad de un objeto también usando los corchetes. De hecho, puedes poner espacios en los nombres de las propiedades usando strings, y la única forma de acceder a ellas es usando los corchetes

const dato = 'color'
console.log(frutas['0']) // '🍎'

console.log(platano['tiene motitas']) // true
console.log(platano[dato]) // 'amarillo'


//************************************/
//* MODIFICAR EL OBJETO CREADO


// Podemos añadir directamente una propiedad a un objeto
platano.estaMaduro = true
platano.fechaRecogida = "23/5/2021"

// o modificar un valor existente
platano.sabor.salado = 4


//o eliminar un valor
delete platano.precio

console.log(platano)

//*********************************/
//* RECORRER UN OBJETO

//* for...in

for (let llave in platano) {
  console.log(llave) // esto da las propiedades
  console.log(platano[llave])  // y esto los valores
}

//******************************** */

//* CURIOSIDAD PERO OJITO!!!
console.log(Object.values(platano))
console.log(Object.keys(platano))
console.log(Object.entries(platano))

console.log([1,2,3].entries())

const numeros = ['🍎','🍐','🍌']

for(let [index, valor] of numeros.entries()) {
  console.log(index,  valor)
}

//******************************** */



//? Algo muy muy típico que nos encontramos tanto en bases de datos como en API es tener UN ARRAY CON MUCHOS OBJETOS

const frutasAPI = [
  {
    id: 1,
    fruta: '🍌'
  },
  {
    id: 2,
    fruta: '🍋'
  },
  {
    id: 3,
    fruta: '🍎'
  },
  {
    id: 4,
    fruta: '🍐'
  }
]

console.log(frutasAPI)
console.log(frutasAPI[0].fruta)

//*********************/

//* DESESTRUCTURACIÓN DE OBJETOS


// Ejemplo en un array
const nombres = ['Ivan', 'Jess', 'Kira', 'Freya']

const [nombre1, , nombre3] = nombres
console.log(nombre1, nombre3)
//! No importa el nombre que le pongas a las variables, lo UNICO IMPORTANTE ES LA POSICIÓN DONDE LAS PONGAS

// En objetos
const fruta = {
  nombre: 'plátano',
  emoticono: '🍌',
  cantidad: 5,
  procedencia: 'Islas Canarias'
}

const { emoticono, procedencia } = fruta
console.log(emoticono, procedencia)
//! No importa la posición en que los pongas ni se coges solo uno o todos los que tiene lo ÚNICO IMPORTANTE ES QUE SE LLAMEN IGUAL QUE EL OBJETO ORIGINAL
//* Si quieres puedes ponerle un alias para cambiarle el nombre

const { nombre: nombreFruta } = fruta
