//Ejercicio 6

for (let i = 1; i <= 10; i++){

    for (let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${j * i}`)
    } 
}

//Ejercicio 7


let numero 

do {
    numero = prompt('Hola dime un nº entre 50 y 100')

}while ( numero < 50 || numero > 100 )

console.log (numero)



//Ejercicio 8

let num 

do{
    num = prompt('Introduce nº entre 2 y 10')
    
}while(num < 2 || num > 10)
console.log (num)
for ( let i = 1; i <= 1; i++){
    console.log (`${i} x ${num} = ${i * num}`)
    }
   


//Ejercicio 9


let asterisco = 0
let estrellas = ''

while(asterisco >= 0 && asterisco <= 7 ){
    asterisco++ 
    estrellas +='*'
    console.log (estrellas) 
}





//Ejercicio 10


const myList = [1,9,3,8,5,7]

for (let num of myList) {
    console.log(num * 2)
  }

  //Ejercicio 11

const numbers = [-2,7,20,-17,0,50,-75,8,-6,10,0]
//Contadores auxiliales
let contadorpositivo = 0
let contadornegativo = 0
let contadorceros  = 0
//Bucle que cambia esas variables
for ( let num of numbers){
    if (num >= 0 ){
        if (num === 0){
            contadorceros++
        }
        contadorpositivo++
    }else{
        contadornegativo++
    }        
}
//Resultados finales
console.log(`Hay ${contadorceros} ceros`)
console.log(`Hay ${contadorpositivo} positivos`)
console.log(`Hay ${contadornegativo} negativos`)
  
 //Ejercicio 12
 let numsecret
let numpass = Math.floor(Math.random() * 100) + 1
let intentos = 0

do {
    intentos++
    numsecret = prompt('Introduce nº secreto entre 1 y 100')
   
    if (numpass > numsecret){
        console.log ('Nº secreto es mayor')
    }else if (numpass < numsecret){
        console.log ('Nº secreto es menor')
    }

}while (intentos <=6 && numpass !== parseFloat(numsecret))

if ( numpass ===  parseFloat(numsecret)){
    console.log ('¡Acertaste!')

}else{
    console.log ('¡Fallaste! el nº secreto es ' + numpass)
} 








