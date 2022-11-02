namespace _10_EjercicioClaseAvanzada.Clases
{
    public class Profesor : Persona
    {
        public void Explicar()
        {
            Console.WriteLine("Estoy explicando");
        }

        public override void Saludar()
        {
            Console.WriteLine("Hola! Soy un profesor");
        }
    }
}
