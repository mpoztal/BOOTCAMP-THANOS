string palabra = "Hola";

Console.WriteLine($"La tercera letra de Hola es { palabra[2] }");

Console.WriteLine($"LA longitud de Hola es {palabra.Length}");

Console.WriteLine($"Una subcadena de Hola es {palabra.Substring(1, 3)}");

string frase = "Estoy dando clase de .NET";

Console.WriteLine(frase.Replace(".NET", "Angular"));

string[] palabras = frase.Split(" ");

for(int i = 0; i < palabras.Length; i++)
{
    if (palabras[i] == "Estoy" || palabras[i] == "clase")
        palabras[i] = palabras[i].ToUpper();
}

Console.WriteLine(String.Join(" ", palabras));

string fraseSalida = string.Empty;

foreach(string item in palabras)
{
    if (item == "Estoy" || item == "clase")
        fraseSalida = fraseSalida + item.ToUpper() + " ";
    else
        fraseSalida = fraseSalida + " " + item;
}

Console.WriteLine(fraseSalida.Trim());

Console.WriteLine($"La frase ‘Estoy dando clase de .NET’ tiene {palabras.Length} palabras");

int posicion = 0;

for (int i = 0; i < palabras.Length; i++)
{
    if (palabras[i] == ".NET")
    {
        posicion = i + 1;
        break;
    }
}

Console.WriteLine($"\'.NET\' es la palabra número {posicion} de la frase \'Estoy dando clase de .NET\'");


posicion = 1;

foreach(string item in palabras)
{
    if (item == ".NET")
    {
        break;
    }

    posicion++;
}

Console.WriteLine($"\'.NET\' es la palabra número {posicion} de la frase \'Estoy dando clase de .NET\'");