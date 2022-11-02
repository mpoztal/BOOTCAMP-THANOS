namespace _13_EjercicioInterfazVehiculo.Interfaces
{
    public interface IVehiculo
    {
        int LitrosDeposito { get; set; }

        void Conducir();
        bool Repostar(int litros);
    }
}
