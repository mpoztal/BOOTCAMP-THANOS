Console.WriteLine("Introduzca los grados celsius");

int celsius;

string celsiusStr = Console.ReadLine();

if(int.TryParse(celsiusStr, out celsius))
{
    int kelvin = celsius + 273;
    int fahrenheit = celsius * 18 / 10 + 32;

    Console.WriteLine($"Grados Kelvin: { kelvin }");
    Console.WriteLine($"Grados Fahrenheit: {fahrenheit}");
}
