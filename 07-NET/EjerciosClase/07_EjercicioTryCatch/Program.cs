Console.WriteLine("Introduzca el primer numero.");
int numero1;

if (!int.TryParse(Console.ReadLine(), out numero1))
{
    Console.WriteLine("Introduzca de nuevo el primer numero.");
    int.TryParse(Console.ReadLine(), out numero1);
}

Console.WriteLine("Introduzca el segundo numero.");
int numero2;

if (!int.TryParse(Console.ReadLine(), out numero2))
{
    Console.WriteLine("Introduzca de nuevo el segundo numero.");
    int.TryParse(Console.ReadLine(), out numero2);
}

try
{
    int division = numero1 / numero2;
}
catch(DivideByZeroException ex)
{
    Console.WriteLine("No se puede dividir por cero");
}
