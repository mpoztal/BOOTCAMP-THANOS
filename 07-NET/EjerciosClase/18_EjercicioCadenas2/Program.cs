string cadena = "Estoy probando implementaciones de cadenas";

Console.WriteLine($"La longitud de la cadena es {cadena.Length}");

string[] palabras = cadena.Split(" ");

Console.WriteLine($"El numero de palabras de la cadena es {palabras.Length}");

Console.WriteLine(cadena.Replace("probando", "estudiando"));

int posicion = 1;

foreach(string item in palabras)
{
    if(item == "implementaciones")
    {
        Console.WriteLine($"La posicion de la palabra implementaciones es {posicion}");

        Console.WriteLine($"La palabra implementaciones tiene {item.Length} caracteres");

        break;
    }

    posicion++;
}
