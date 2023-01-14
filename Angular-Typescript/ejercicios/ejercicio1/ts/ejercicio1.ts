//Escribir un programa q me permita determinar q una cadena de caracteres es un palindromo.

// 1º Almacenar el dato
// 2º Pasarlo todo a minúscula
// 3º Qitar los espacios
// 4 Darle la vuelta
// 5º Comparar

                     


// 1º
let frase: string = "Anita lava la tina";

function isPalindrome(pSentence: string): boolean {
    //Programar por suposición---> demuestro q es un palíndromo(true)
    let resultado: boolean = true;

    let minuscula: string = pSentence.toLowerCase();  // 2º Esto es lo que hace ---> anita·lava·la·tina

     // Este array de palabras partida por los espacios, es decir; Anita (espacio) lava (espacio)...donde Anita(posición 0)..
    const palabras: string[] = minuscula.split(" "); // Esto es lo que hace--> ['anita', 'lava', 'la', 'tina']

    // Vuelvo a convertirlo en una cadena d caracteres a través del método join() une en una palabra sin espacios(se le pasa ""--> caracter vacío)

    let withoutSpace: string = palabras.join("") //  Esto es lo que hace ---> anitalavalatina

    let withoutSpaceInverter: string = invertirCadena(withoutSpace);// 4º Aunque no se ve lo que hace es a ésto le damos la vuelta anitalavalatina

    if(withoutSpace !== withoutSpaceInverter) { // Aquí estamos comparando ambas cadenas

        resultado = false;
    }
    

    return resultado;
}

function invertirCadena(pString: string): string {
    const arrCaracteres: string[] = pString.split("");  //  [ 'a', 'n' , 'i', 't', 'a' ......]
    const arrInvertido: string[] = arrCaracteres.reverse() //  [ 'a', 'n' , 'i', 't', 'a' ......]
    return arrInvertido.join("") // Lo vuelvo a unir--> anitalavalatina
}

if(isPalindrome(frase)){
    console.log('Es un palindromo')
}else{
    console.log('no es un palindromo')
}

