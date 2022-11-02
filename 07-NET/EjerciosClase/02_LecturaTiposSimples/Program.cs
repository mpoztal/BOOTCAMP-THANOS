Console.WriteLine("Hola, Como te llamas?");

string name = Console.ReadLine();

Console.WriteLine($"Tu te llamas: { name }");

//Preguntar: Cuantos años tienes?
Console.WriteLine("Cuantos años tienes?");

//Responder: Tienes X años y naciste en el año X.
int edad = int.Parse(Console.ReadLine());

Console.WriteLine($"Tienes " + edad + $" años y naciste en { 2022-edad }");

//Preguntar: Donde vives?
Console.WriteLine("Donde vives?");

//Responder: Vives en X.
string direccion = Console.ReadLine();

Console.WriteLine($"Vives en {direccion}");
