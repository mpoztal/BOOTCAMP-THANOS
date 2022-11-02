using _19_Listas.Clases;

List<string> miLista = new List<string>();

miLista.Add("Manzana");
miLista.Add("Pera");
miLista.Add("Platano");

Console.WriteLine($"La lista tiene {miLista.Count} elementos");

Imprimir();

miLista.RemoveAt(0);

Imprimir();

miLista.Remove("Platano");

Imprimir();

List<string> miLista2 = new List<string>();

miLista2.Add("Naranja");
miLista2.Add("Kiwi");
miLista2.Add("Fresa");

miLista.AddRange(miLista2);

Imprimir();

miLista.Sort();

Imprimir();

void Imprimir()
{
    foreach (string item in miLista)
    {
        Console.WriteLine(item);
    }

    Console.WriteLine("/-------------------------------");
}

//------------------Listas de Objetos complejos
List<Persona> personas = new List<Persona>();

Persona persona1 = new Persona
{
    Nombre = "Pedro",
    Apellido = "Sanchez",
    Edad = 39
};

Persona persona2 = new Persona
{
    Nombre = "Ismael",
    Apellido = "De la Poza",
    Edad = 32
};

personas.Add(persona1);
personas.Add(persona2);

List<Persona> personas2 = new List<Persona>
{
    new Persona
    {
        Nombre = "Pedro",
        Apellido = "Sanchez",
        Edad = 39
    },
    new Persona
    {
        Nombre = "Ismael",
        Apellido = "De la Poza",
        Edad = 32
    }
};

foreach(Persona item in personas2)
{
    Console.WriteLine(item.Nombre + " " + item.Apellido);
}