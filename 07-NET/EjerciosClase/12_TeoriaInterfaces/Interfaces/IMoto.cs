namespace _12_TeoriaInterfaces.Interfaces
{
    public interface IMoto
    {
        string Marca { get; set; }
        string Modelo { get; set; }
        string Matricula { get; set; }
        int Potencia { get; set; }
        int AñoVenta { get; set; }
        int Deposito { get; set; }
        int CapacidadDeposito { get; set; }

        void CambiarPotencia(int potencia);

        void LlenarDeposito(int litros);

        bool TieneGasolina();
    }
}
