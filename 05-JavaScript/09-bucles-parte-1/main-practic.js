for (let variable = 0; variable <= 5; variable += 1) {
    console.log('soy un for')
}

for(let variable = 5; variable >= 1; variable -= 1){
    console.log('soy un for que va hacia abajo')
}

for (let i = 1; i <= 5; i++){
    console.log('For con variable "i"')
}
// para sumar de dos en dos es esta formula +=2
for ( let i = 1; i <= 5; i += 2){
    console.log('For con "i"')
}














// EJERCICIOS 

//Bucles 01.

for (let i = 3; i <= 30; i +=3){
    console.log(i)
}

//Bucles 02.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for ( let num of numeros){
    console.log('8 x ' + num + '=' + num * 8)
}

//Bucles 03.

for (let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(`${i} 'es par'`)
    }else {
        console.log(`${i} 'es impar'`)
    }
}

//Bucles 04.(mint:2:38:34 del dia 18 pate 1º)
let contador = 0

const frase = prompt ('Dime una frase y te digo las aes que tiene')
for (let letra of frase) {
    if (letra.toLowerCase() === 'a' || letra.toLowerCase() === 'á' || letra.toLowerCase() === 'à'){
      contador++
    }    
}

console.log('Has escrito ' + contador + ' aes.')


//Bucle 05.
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    }else if (i % 3 === 0){
        console.log('Fizz')
    }else if (i % 5 === 0){
        console.log('Buzz')
    }else {
            console.log(i)
    }
} 





