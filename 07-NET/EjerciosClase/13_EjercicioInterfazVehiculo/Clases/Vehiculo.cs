using _13_EjercicioInterfazVehiculo.Interfaces;

namespace _13_EjercicioInterfazVehiculo.Clases
{
    public class Vehiculo : IVehiculo
    {
        public int LitrosDeposito { get ; set; }

        public Vehiculo(int litros)
        {
            LitrosDeposito = litros;
        }

        public void Conducir()
        {
            Console.WriteLine("Conduciendo");
        }

        public bool Repostar(int litros)
        {
            LitrosDeposito += litros;

            return true;
        }
    }
}
