using _14_EjercicioInterfazPerro.Clases;

Perro nuevoPerro = new Perro();

Console.WriteLine("Escriba el nombre del perro");

string nombre = Console.ReadLine();

nuevoPerro.SetNombre(nombre);
nuevoPerro.GetNombre();
nuevoPerro.Comer();