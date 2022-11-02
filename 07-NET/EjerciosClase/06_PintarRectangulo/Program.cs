Console.WriteLine("Introduzca el numero de la filas.");
int filas;

if (!int.TryParse(Console.ReadLine(), out filas))
{
    Console.WriteLine("Introduzca de nuevo el número de la tabla.");
    int.TryParse(Console.ReadLine(), out filas);
}

Console.WriteLine("Introduzca el numero de columnas.");
int columnas;

if (!int.TryParse(Console.ReadLine(), out columnas))
{
    Console.WriteLine("Introduzca de nuevo el número de la tabla.");
    int.TryParse(Console.ReadLine(), out columnas);
}

for(int f = 1; f<= filas;f++)
{
    for(int c = 1; c <= columnas; c++)
    {
        Console.Write("z");
    }

    Console.WriteLine();
}
