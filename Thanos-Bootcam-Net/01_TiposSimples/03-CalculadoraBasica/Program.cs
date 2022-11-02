//Escribe un programa en C# q calcule el resultado de sumar, restar, multiplicar y dividir dos números introducidos por el usuario.
//Además tambien debería clcular el resto de la division en la ultima linea.
// Entrada: 12 y 3   y     Salida: 12+3=15  12-3=9   12x3=36    12/3=4   12 mod 3 = 0 

//int numero1 = int.Parse(Console.ReadLine());
//int numero2 = int.Parse(Console.ReadLine());
//Console.WriteLine($"{numero1}+{numero2} = {numero1 + numero2}");
//Console.WriteLine($"{numero1}-{numero2} = {numero1 - numero2}");
//Console.WriteLine($"{numero1}*{numero2} = {numero1 * numero2}");
//Console.WriteLine($"{numero1}/{numero2} = {numero1 / numero2}");
//Console.WriteLine($"{numero1}%{numero2} = {numero1 % numero2}");


// Conversion ejemplo. Introduciendo x consola 1º p 2º 15
//int numero1;
//int.TryParse(Console.ReadLine(), out numero1);

//int numero2 = int.Parse(Console.ReadLine());
//Console.WriteLine($"{numero1}+{numero2} = {numero1 + numero2}");
//Console.WriteLine($"{numero1}-{numero2} = {numero1 - numero2}");
//Console.WriteLine($"{numero1}*{numero2} = {numero1 * numero2}");
//Console.WriteLine($"{numero1}/{numero2} = {numero1 / numero2}");

// Intento de peticion de numero si introducimos letras
//int numero1;
//Console.WriteLine("Introduzca el primer numero");

//if (!int.TryParse(Console.ReadLine(), out numero1))
//{
//    Console.WriteLine("Introduce de nuevo el primer numero");
//    int.TryParse(Console.ReadLine(), out numero1);

//}

//int numero2;
//Console.WriteLine("Introduzca el segundo numero");
//if (!int.TryParse(Console.ReadLine(), out numero2)) 
//{
//    Console.WriteLine("Introduce de nuevo el segundo numero");
//    int.TryParse(Console.ReadLine(), out numero2);

//}
//Console.WriteLine($"{numero1}+{numero2} = {numero1 + numero2}");
//Console.WriteLine($"{numero1}-{numero2} = {numero1 - numero2}");
//Console.WriteLine($"{numero1}*{numero2} = {numero1 * numero2}");
//Console.WriteLine($"{numero1}/{numero2} = {numero1 / numero2}");


// La escala de Kelvin es una escala absoluta utilizada en ciencias.
//Crea un programa en C# para convertir de grados centígrados a Kelvin y Fahrenheit.
// Solicita al usuario la cantidad de grados centígrados para convertirlos usando las 
//siguientes tablas de conversión:  Kelvin = celsius +273        fahrenheit = celsius x 18/10 + 32
//Entrada 33
//Salida kevin = 306  y  fahrenheit = 91

//Console.WriteLine("Introduzca los grados celsius");
//int celsius;

//string celsiusStr = Console.ReadLine();

//if (int.TryParse(celsiusStr, out celsius)) 
//{
//    int kelvin = celsius + 273;
//    int fahrenheit = celsius * 18 / 10 + 32;
//    Console.WriteLine($"Grados kelvin: { kelvin }");
//    Console.WriteLine($"Grados fahrenheit: {fahrenheit}");

//}

//Escribe un programa en C# q pregunte al usuario por un número x y muestre por
//el resultado de su tabla de multiplicar del 1 al 10.

//Console.WriteLine("Introduce el numero");

//int num;
//string numStr = Console.ReadLine();

//if (int.TryParse(numStr, out num)){ 
//    for (int i = 1; i < 11; i++) 
//    { 
//        Console.WriteLine($"{num} * {i} = {num*i}");
//    }   
//}

//Ejercicio de pintar un cuadrado.MUY IMPORTANTE!!

//Console.WriteLine("Introduce numero de filas");//Solicito nº de filas
//int filas;

//if (!int.TryParse(Console.ReadLine(), out filas))//Si el nº no es correcto...
//{
//    Console.WriteLine("Introduce de nuevo el numero de filas");//...Muestra este mensaje...
//    int.TryParse(Console.ReadLine(), out filas);// pídelo otra vez..
//}


//Console.WriteLine("Introduce numero de columnas");//Solicito nº de columnas

//int columnas;

//if (!int.TryParse(Console.ReadLine(), out columnas))//Si el nº no es correcto...
//{
//    Console.WriteLine("Introduce de nuevo el numero de filas");//...Muestra este mensaje...
//    int.TryParse(Console.ReadLine(), out columnas);// pídelo otra vez..
//}

//for (int f = 1; f <= filas; f++)//Recorre de 1 a nº de filas
//{
//    for (int c = 1; c <= columnas; c++)//Por cada vuelta
//    {
//        Console.Write("z");//Pinta tantas Z como columnas haya.
//    }

//    Console.WriteLine();// Y salta de línea.
//}






//try //Intenta ejecutarlo y captura el error de dividir por 0
//{
//	int numeroX;
//	Console.WriteLine("Introduce el numero X");//Muestra mensaje en consola
//	string numeroXStr = Console.ReadLine();//Espera entrada delusuario a traves del teclado
//    int.TryParse(numeroXStr, out numeroX);


//	int numeroY;
//	Console.WriteLine("Introduce el numero Y");
//	string numeroYStr = Console.ReadLine();
//	int.TryParse(numeroYStr, out numeroY);
//	Console.WriteLine($"{numeroX} / {numeroY} = {numeroX / numeroY}");
//}
//catch (DivideByZeroException ex)
//{

//    Console.WriteLine("No se puede dividir por 0!!");
//}


//Un METODO q haga una suma y q saque por pantalla la suma.

//void Sumar(int numero1, int numero2)
//{
//	int suma = numero1 + numero2;                         //DIFERENCIA ENTRE METODO (no devuelve valor) Y FUNCION (siempre devuelve valor)
//	Console.WriteLine("La suma es:" + suma);
//}

//Sumar(5,2);


//Una FUNCION q haga una suma y q saque por pantalla la suma.

//string FuncionSuma(int numero1, int numero2)
//{
//    int suma = numero1 + numero2;

//    return "El resultado de la funcion suma es:" + suma;

//}
//Console.WriteLine(FuncionSuma(1,2));

//1-CREA UN PROGRAMA Q IMPLEMENTE DOS METODOS PARA SALUDAR Y DESPEDIRSE.
//EL METODO D SALUDAR TIENE UN PARAMETRO 'NOMBRE' DE TEXTO. DESP.DEBEN D SER LLAMADOS.
//ENTRADA:JUAN              SALIDA: HOLA JUAN   ¡ADIÓS!

//void saludar (string nombre)
//{
//    Console.WriteLine("Hola" + nombre);    

//}

//void despedida()
//{
//    Console.WriteLine(" ¡Adiós! ");

//}

//saludar("Juan");
//despedida();


//2-Cree un programa en C# que implemente una función llamada
//Sumar que retorne la suma de dos números enteros pasados por parámetro.
//Después deben ser llamados.
//Entrada   4    4   Salida  8

int FuncionSuma(int numero1, int numero2)

{
      int suma = numero1 + numero2;

      return suma;

}
Console.WriteLine(FuncionSuma(4, 4));

























