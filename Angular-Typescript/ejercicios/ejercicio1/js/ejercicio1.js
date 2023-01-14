//Escribir un programa q me permita determinar q una cadena de caracteres es un palindromo.
// 1º Almacenar el dato
// 2º Pasarlo todo a minúscula
// 3º Qitar los espacios
// 4 Darle la vuelta
// 5º Comparar
// 1º
var frase = "Anita lava la tina";
function isPalindrome(pSentence) {
    //Programar por suposición---> demuestro q es un palíndromo(true)
    var resultado = true;
    var minuscula = pSentence.toLowerCase(); // 2º Esto es lo que hace ---> anita·lava·la·tina
    // Este array de palabras partida por los espacios, es decir; Anita (espacio) lava (espacio)...donde Anita(posición 0)..
    var palabras = minuscula.split(" "); // Esto es lo que hace--> ['anita', 'lava', 'la', 'tina']
    // Vuelvo a convertirlo en una cadena d caracteres a través del método join() une en una palabra sin espacios(se le pasa ""--> caracter vacío)
    var withoutSpace = palabras.join(""); //  Esto es lo que hace ---> anitalavalatina
    var withoutSpaceInverter = invertirCadena(withoutSpace); // 4º Aunque no se ve lo que hace es a ésto le damos la vuelta anitalavalatina
    if (withoutSpace !== withoutSpaceInverter) { // Aquí estamos comparando ambas cadenas
        resultado = false;
    }
    return resultado;
}
function invertirCadena(pString) {
    var arrCaracteres = pString.split(""); //  [ 'a', 'n' , 'i', 't', 'a' ......]
    var arrInvertido = arrCaracteres.reverse(); //  [ 'a', 'n' , 'i', 't', 'a' ......]
    return arrInvertido.join(""); // Lo vuelvo a unir--> anitalavalatina
}
if (isPalindrome(frase)) {
    console.log('Es un palindromo');
}
else {
    console.log('no es un palindromo');
}
