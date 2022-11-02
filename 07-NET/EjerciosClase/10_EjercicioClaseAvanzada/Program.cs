using _10_EjercicioClaseAvanzada.Clases;

Persona nuevaPersona = new Persona
{
    Edad = 25,
    Nombre = "Pedro",
    Apellidos = "Sanchez"
};

Console.WriteLine($"{nuevaPersona.Nombre} {nuevaPersona.Apellidos} tiene {nuevaPersona.Edad} años y nació en {nuevaPersona.ObtenerAñoNacimiento()}");

nuevaPersona.CambiarEdad(39);

Console.WriteLine($"{nuevaPersona.Nombre} {nuevaPersona.Apellidos} tiene {nuevaPersona.Edad} años y nació en {nuevaPersona.ObtenerAñoNacimiento()}");


Persona nuevaPersona2 = new Persona
{
    Edad = 39,
    Nombre = "Pepe",
    Apellidos = "Perez"
};

nuevaPersona2.Saludar();

Estudiante nuevoEstudiante = new Estudiante
{
    Nombre = "Estudiante"
};

nuevoEstudiante.CambiarEdad(25);
nuevoEstudiante.Saludar();
nuevoEstudiante.VerEdad();
nuevoEstudiante.Estudiar();

Profesor nuevoProfesor = new Profesor
{
    Nombre = "Profesor"
};

nuevoProfesor.CambiarEdad(40);
nuevoProfesor.Saludar();
nuevoProfesor.Explicar();



