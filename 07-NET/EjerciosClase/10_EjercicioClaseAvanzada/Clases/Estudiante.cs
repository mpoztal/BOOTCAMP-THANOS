namespace _10_EjercicioClaseAvanzada.Clases
{
    public class Estudiante : Persona
    {
        public void VerEdad()
        {
            Console.WriteLine("Mi edad es: " + Edad);
        }

        public void Estudiar()
        {
            Console.WriteLine("Estoy estudiando");
        }

        public override void Saludar()
        {
            Console.WriteLine("Hola! Soy un estudiante");
        }
    }
}
