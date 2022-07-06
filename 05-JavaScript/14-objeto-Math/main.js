//? Math

//* Propiedades de Math
console.log('PI -->', Math.PI)
console.log('Constante de Euler -->', Math.E)
console.log('Raíz cuadrada de 2 -->', Math.SQRT2)


//* Métodos de Math

// Raíz cuadrada de un número
console.log('Ríz cuadrada de 144 -->', Math.sqrt(144))

// Potencia de un número elevado a otro
console.log('3 elevado al cuadrado -->', Math.pow(3, 2))

// Redondeo común de un número al entero más cercano (el 1,2,3,4--->van hacia la baja)
console.log('Round de 5.7 -->', Math.round(5.7))
console.log('Round de 5.3 -->', Math.round(5.3))
console.log('Round de 5.5 -->', Math.round(5.5))

// Redondeo siempre al alza
console.log('Ceil de 5.1 -->', Math.ceil(5.1))
console.log('Ceil de 5.9 -->', Math.ceil(5.9))

// Redondeo siempre a la baja 
console.log('Floor de 5.1 -->', Math.floor(5.1))
console.log('Floor de 5.9 -->', Math.floor(5.9))

//* Crear un número aleatorio
// devuelve un número aleatorio entre 0 y 1
console.log('Math.random() -->', Math.random())

console.log('Math.random() * 10 -->', Math.random() * 10)



// crear un número aleatorio del 1 al 10
console.log('Math.floor(Math.random() * 10) -->', Math.floor(Math.random() * 10) + 1)
console.log('Math.ceil(Math.random() * 10) -->', Math.ceil(Math.random() * 10))

//* TRUCO PARA OBTENER UN NÚMERO ALEATORIO ENTRE DOS NÚMEROS
//! Ojo! el máximo estará excluído 


//?      Math.floor(Math.random() * (41 - 30)) + 30
console.log(Math.floor(Math.random() * (41 - 30)) + 30)



//* Número más GRANDE de una lista de números
console.log('Número más grande -->', Math.max(5, 1, 23, -7, 20))

//* Número más PEQUEÑO de una lista de números
console.log('Número más pequeño -->', Math.min(5, 1, 23, -7, 20))


// Con el nuevo "SPREAD OPERATOR" podemos utilizar un array para saber cual es el número más grande o más pequeño
const numeros = [4, 13, -5, 23, 7]

console.log(Math.max(...numeros))
console.log(Math.min(...numeros))