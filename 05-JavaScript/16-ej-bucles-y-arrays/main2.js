// 01 Escribe un programa que pida un número mayor que 1 y que devuelva si el número es
//primo o no.

let numero = prompt ('Dime un nº mayor que 1')
let nºprimo = true

if ( numero <= 1 ){
    console.log ('¡Error!')
}else {
    console.log ('el nº es mayor que 1')
}

for ( let i = 2; i < numero && nºprimo; ++i){
    if ( numero % i === 0){
        nºprimo = false
    }
}
if (nºprimo === true) {
    console.log (`${numero} es primo.`)
}else {
    console.log (`${numero} no es primo.`)
}

// ejercicio 02

const numeros = [1,-3,7,-8,10]
let pares = []
let impares = []
let numaleatorio 

for (let numero of numeros){
    numaleatorio = (Math.floor(Math.random() * 10) + 1)
    const result =  numaleatorio * numero 

    if (result % 2 === 0 ){
        pares.push(numero)

    } else {
        impares.push(numero)
    }
    console.log(`${numaleatorio} x ${numero} = ${result}`)
}
console.log(pares)
console.log(impares)

// ejercicio 03

