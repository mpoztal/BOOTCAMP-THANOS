


const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1, 'Ivan', 'Jessica' , ...arr2]

console.log(arr3)






const persona1 = {
  name: 'Ivan',
  age: 35,
  arms: 2,
  fingers: 20
}
const persona1Copy = { ...persona1 }



const persona2 = {
  name: 'Jessica',
  isMarried: true,
  age: 20
}

//! Si varios objetos tienen los mismos nombres de propiedades, el último es el que "gana", es el que sobreescribe el valor

//! El nuevo objeto cogerá también todas las propiedades de los objetos antiguos
const persona3 = { ...persona2, ...persona1  }



//* Si queremos añadir nuevas propiedades al objeto "copiado" las podemos añadir después del spread operator

const persona4 = {
  ...persona1,
   age: 43,
   hair: 'blonde'
}



console.log(persona4)