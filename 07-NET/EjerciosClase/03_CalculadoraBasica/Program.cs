try
{
    int numero1 = ObtenerPrimerNumero();

    Console.WriteLine("Introduzca el segundo numero.");
    int numero2;

    if (!int.TryParse(Console.ReadLine(), out numero2))
    {
        Console.WriteLine("Introduzca de nuevo el segundo numero.");
        int.TryParse(Console.ReadLine(), out numero2);
    }

    Console.WriteLine($"{numero1} + {numero2} = {numero1 + numero2}");
    Console.WriteLine($"{numero1} - {numero2} = {numero1 - numero2}");
    Console.WriteLine($"{numero1} * {numero2} = {numero1 * numero2}");
    Console.WriteLine($"{numero1} / {numero2} = {numero1 / numero2}");
}
catch (FormatException ex)
{
    Console.WriteLine(ex.Message);
}
catch (Exception ex)
{
    throw ex;
}
finally
{
    Console.WriteLine("Hasta Luego!");
}

int ObtenerPrimerNumero()
{
    Console.WriteLine("Introduzca el primer numero.");
    int numero1;

    if (!int.TryParse(Console.ReadLine(), out numero1))
    {
        Console.WriteLine("Introduzca de nuevo el segundo numero.");
        int.TryParse(Console.ReadLine(), out numero1);
    }

    return numero1;
}








void Sumar(int numero1, int numero2)
{
    int suma = numero1 + numero2;

    Console.WriteLine("La suma es:" + suma);
}

Sumar(1,2);

string FuncionSumar(int numero1, int numero2)
{
    int suma = numero1 + numero2;

    return "El resultado de la funcion suma es:" + suma;
}

Console.WriteLine(FuncionSumar(1, 2));
















