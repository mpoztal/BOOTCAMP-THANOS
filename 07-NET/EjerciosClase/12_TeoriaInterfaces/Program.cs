using _12_TeoriaInterfaces.Clases;

Moto nuevaMoto = new Moto
{
    Marca = "Suzuki",
    Modelo = "Bandit",
    AñoVenta = 2002,
    Matricula = "5465GJC",
    Potencia = 77,
    CapacidadDeposito = 17,
    Deposito = 0
};

nuevaMoto.LlenarDeposito(20);

nuevaMoto.LlenarDeposito(17);
