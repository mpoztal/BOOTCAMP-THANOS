using _12_TeoriaInterfaces.Interfaces;

namespace _12_TeoriaInterfaces.Clases
{
    public class Moto : IMoto
    {
        public string Marca { get; set; }
        public string Modelo { get; set; }
        public string Matricula { get; set; }
        public int Potencia { get; set; }
        public int AñoVenta { get; set; }
        public int Deposito { get; set; }
        public int CapacidadDeposito { get; set; }

        public void CambiarPotencia(int potencia)
        {
            Potencia = potencia;
        }

        public void LlenarDeposito(int litros)
        {
            Deposito += litros;
        }

        public bool TieneGasolina()
        {
            return Deposito > 0;
        }

    }
}
