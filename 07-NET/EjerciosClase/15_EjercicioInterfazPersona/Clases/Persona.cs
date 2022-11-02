using _15_EjercicioInterfazPersona.Interfaces;

namespace _15_EjercicioInterfazPersona.Clases
{
    public class Persona : IPersona
    {
        private protected string Nombre { get; set; }
        public int Edad { get; set; }

        public void GetAñoNacimiento()
        {
            Console.WriteLine($"Naci en el año {DateTime.Now.Year - Edad}");
        }

        public void GetNombre()
        {
            Console.WriteLine($"Me llamo {Nombre}");
        }

        public void SetEdad(int edad)
        {
            Edad = edad;
        }

        public void SetNombre(string nombre)
        {
            Nombre = nombre;
        }
    }
}
