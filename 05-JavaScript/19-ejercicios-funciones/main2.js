function saludar (nombre, edad){
    console.log(`Hola mi nombre es  ${nombre} y tengo  ${edad}  años`)
}


saludar('Jon', 35)
function funcionDeclarada (){
    console.log('Esto es una funcion declarada, puede invocarse en cualquierparte de nuestro codigo incluso, antes de q la funcion esté declarada. ')
}
funcionDeclarada()


const funcionExpresada = function(){
    console.log('Funcion Expresada es decir; funcion q se le ha asignado como valor una variable..')
}
funcionExpresada()

//const saludo = () => {
    //console.log('Hooolaaa')
//}
//saludo()

const saludo = (nombre) => {
    console.log(`Hola ${nombre}`)
}
saludo('Ursula')

const fruits = ['Peras', 'Uvas', 'Platanos']
fruits.forEach((las, index) => console.log (`${las} está en la posicion ${index}`))

// Crea una función a la que le pasamos 2 números y imprime por consola cual es el mayor de los dos o si son iguales.
 const numeroMayor = (num1, num2) => {
    if (num1 > num2){
        console.log(`${num1} es mayor que  ${num2}`)
    }else if (num1 < num2){
    console.log(`${num1} es menor que  ${num2}`)

    }else {
        console.log(`${num1} y ${num2} son iguales`)
    }
    
}
 //Por ejem. pasamos éstos valores ( 7 y 3)
    numeroMayor(7,3)

// 04 Crea una función que reciba el array de frutas y devuelva un string con todas las
//frutas separadas por comas.(min.0:05:00 hasta 0:08:35 del dia 21 1ªparte)


const frutas = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras', 'Uvas', 'Pomelos']
const myUnion = (array) => {
let stringFinal = ''
//primera forma
    //for (let index in frutas){
    //    if (index < array.length -1){
    //      stringFinal += frutas[index] + ', '
    //    }else{
    //      stringFinal += frutas[index]
    //    }
    //}                                 
//segunda forma

    //for(let fruta of frutas){
        //stringFinal += fruta + ', '
    //}
    //stringFinal = stringFinal.slice(0, -2)
//tercera  forma (empleando un ternario)
    for(let i in array){
        stringFinal += (i < array.length -1) ? array[i] + ', ' : array[i]
    }

    return stringFinal
}

console.log(myUnion(frutas))


// 05 Crea una función que reciba el array de frutas y que te devuelva un nuevo array al revés.
// EL ARRAY.LENGTH -1 ---> SIGNIFICA ULTIMA POSICION DE CUALQUIER ARRAY
//const frutas = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras', 'Uvas', 'Pomelos']
const miReves = (array) => {
    const arrayAlReves = []
    for (let valor of array){
        arrayAlReves.unshift(valor)
    }
    return arrayAlReves 

}
console.log(miReves(frutas))

// 06.Crea una función que le pasemos un array de números y nos devuelva cuál es el número mayor.
const numeros = [2, 5, 7, 11, 25]
const numMayor = (array) => {
    let numMayor = 0

    for (let num of array) {
        if (num > numMayor ){
            numMayor = num
        }
    }

    return numMayor
}

console.log(numMayor(numeros))

//07 Haz una función que coja un string que le pasemos por parámetro y le convierta la primera letra en mayúscula.

const mayuscula = (text) => {
    let finalText = ''

    const primeraLetra = text.slice(0,1)
    const restoFrase = text.slice(1)

    finalText = primeraLetra.toUpperCase() + restoFrase

    return finalText
}

 console.log(mayuscula('pajarito'))   


    
