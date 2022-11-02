using _25_EjercicioLinqAlumnosProfesores.Clases;
using _25_EjercicioLinqAlumnosProfesores.Entidades;
using _25_EjercicioLinqAlumnosProfesores.Interfaces;

IDataService dataService = new DataService();

List<EstudianteExtendido> estudiantes = dataService.GetAlumnos();

foreach(EstudianteExtendido estudiante in estudiantes)
{
    Console.WriteLine($"{estudiante.Nombre} {estudiante.Apellidos} esta en la clase de {estudiante.Clase} y tiene una nota de {estudiante.Nota}");
}

List<ProfesorExtendido> profesores = dataService.GetProfesores();

foreach (ProfesorExtendido profesor in profesores)
{
    Console.WriteLine($"{profesor.Nombre} {profesor.Apellidos} esta dando la clase de {profesor.Asignatura} y tiene una evaluación de {profesor.Evaluacion}");
}