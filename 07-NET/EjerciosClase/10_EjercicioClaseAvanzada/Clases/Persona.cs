namespace _10_EjercicioClaseAvanzada.Clases
{
    public class Persona
    {
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public int Edad { get; set; }

        public int ObtenerAñoNacimiento()
        {
            return DateTime.Now.Year - Edad;
        }

        public void CambiarEdad(int edad)
        {
            Edad = edad;
        }

        public virtual void Saludar()
        {
            Console.WriteLine("Hola!");
        }

    }
}
