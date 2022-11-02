using _15_EjercicioInterfazPersona.Clases;

Console.WriteLine("Inserte el nombre del estudiante");
string nombre = Console.ReadLine();

Console.WriteLine("Inserte la edad del estudiante");
int edad;
int.TryParse(Console.ReadLine(), out edad);

Console.WriteLine("Inserte la asignatura");
string asignatura = Console.ReadLine();

Estudiante nuevoEstudiante = new Estudiante();

nuevoEstudiante.SetNombre(nombre);
nuevoEstudiante.SetEdad(edad);
nuevoEstudiante.SetAsignatura(asignatura);

nuevoEstudiante.GetNombre();
nuevoEstudiante.GetAñoNacimiento();
nuevoEstudiante.GetAsignatura();