Console.WriteLine("Introduzca el numero de la tabla a multiplicar.");
int numero;

if (!int.TryParse(Console.ReadLine(), out numero))
{
    Console.WriteLine("Introduzca de nuevo el número de la tabla.");
    int.TryParse(Console.ReadLine(), out numero);
}

int[] arrayNumeros = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

foreach(int numeroArray in arrayNumeros)
{
    Console.WriteLine($"{numero} * {numeroArray} = {numero * numeroArray}");
}

for(int i = 1; i < 11; i++)
{
    Console.WriteLine($"{numero} * {i} = {numero * i}");
}

int indice = 1;

do
{
    Console.WriteLine($"{numero} * {indice} = {numero * indice}");
    indice++;
} while (indice < 11);
