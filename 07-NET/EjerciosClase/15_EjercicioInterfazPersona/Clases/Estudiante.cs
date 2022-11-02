using _15_EjercicioInterfazPersona.Interfaces;

namespace _15_EjercicioInterfazPersona.Clases
{
    public class Estudiante : Persona, IEstudiante
    {
        public string Asignatura { get; set; }

        public void GetAsignatura()
        {
            Console.WriteLine($"Estoy estudiando la asignatura {Asignatura}");
        }

        public void SetAsignatura(string asignatura)
        {
            Asignatura = asignatura;
        }
    }
}
