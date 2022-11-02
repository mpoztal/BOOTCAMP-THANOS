using _11_EjercicioHerencia.Clases;

Persona[] personas = new Persona[3];

for (int i = 0; i < personas.Length; i++)
{
    if (i == 0)
    {
        personas[i] = new Profesor()
        {
            Nombre = Console.ReadLine()
        };
    }
    else
    {
        personas[i] = new Estudiante()
        {
            Nombre = Console.ReadLine()
        };
    }
}

for(int i = 0; i < personas.Length; i++)
{
    if(i == 0)
    {
        ((Profesor)personas[i]).Explicar();
    }
    else
    {
        ((Estudiante)personas[i]).Estudiar();
    }
}

for (int i = 0; i < personas.Length; i++)
{
    if (personas[i] is Profesor)
    {
        ((Profesor)personas[i]).Explicar();
    }
    else if (personas[i] is Estudiante)
    {
        ((Estudiante)personas[i]).Estudiar();
    }
    else
    {
        Console.WriteLine("Tipo no encontrado");
    }
}
