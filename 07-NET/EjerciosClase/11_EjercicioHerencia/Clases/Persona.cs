using _11_EjercicioHerencia.Interfaces;

namespace _11_EjercicioHerencia.Clases
{
    public class Persona : IPersona
    {
        public string Nombre { get; set; }

        public string ObtenerNombre()
        {
            return Nombre;
        }

        public override string ToString()
        {
            return "Nueva implementacion";
        }
    }
}
