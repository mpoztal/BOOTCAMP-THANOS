using _14_EjercicioInterfazPerro.Interfaces;

namespace _14_EjercicioInterfazPerro.Clases
{
    public class Perro : IPerro
    {
        public string Nombre { get; set; }

        public void Comer()
        {
            Console.WriteLine("Comiendo");
        }

        public void GetNombre()
        {
            Console.WriteLine(Nombre);
        }

        public void SetNombre(string nuevoNombre)
        {
            Nombre = nuevoNombre;
        }
    }
}
