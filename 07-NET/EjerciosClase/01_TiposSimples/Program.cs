
bool vBool = true;

Console.WriteLine("Mi variable booleana: " + vBool);

//Declarar un int y sacar por pantalla
int vInt = 9;

Console.WriteLine("Mi variable entera: " + vInt);

//Declarar un char y sacarlo por pantalla
char vChar = 'z';

Console.WriteLine("Mi variable char: " + vChar);

//Declarar un float
float vFloat = 3.59F;

Console.WriteLine("Mi variable float: " + vFloat);

string nullString = null;

//Definicion de tipos simples nulables
int? nullInt = null;
float? nullFloat = null;
long? nullLong = null;

Console.WriteLine("Mi long nulo: " + nullLong);

bool[] arrayBool = { true, false, true};

Console.WriteLine("El primer valor de mi array booleano es: " + arrayBool[0]);

//Definir un array de tipo int con 3 valores y sacar por pantalla el segundo valor
int[] arrayInt = new int[3];
arrayInt[0] = 1;
arrayInt[1] = 2;
arrayInt[2] = 3;

Console.WriteLine("Segundo valor del array de enteros es: " + arrayInt[1]);

//Definir un array de tipo char con 3 valores y sacar por pantalla el tercer valor
char[] arrayChar = { 'a', 'b', 'c' };

Console.WriteLine("Tercer valor del array de char es: " + arrayChar[2]);

enum vEnum
{
    tipo1 = 0,
    tipo2 = 1,
    tipo3 = 2
}

//Console.WriteLine("Mi tipo 1 es :" + vEnum.tipo1);

      