using _21_EjercicioListasVehiculos.Clases;

List<Coche> listaCoches = new List<Coche>
{
    new Coche
    {
        Marca = "Seat",
        Combustible = "Gasolina",
        NumeroPuertas = 5
    },
    new Coche
    {
        Marca = "Renault",
        Combustible = "Diesel",
        NumeroPuertas = 5
    },
    new Coche
    {
        Marca = "BMW",
        Combustible = "Gasolina",
        NumeroPuertas = 5
    }
};

List<Camion> listaCamiones = new List<Camion>
{
    new Camion
    {
        Marca = "Iveco",
        Combustible = "Diesel",
        CargaMaxima = 10000
    },
    new Camion
    {
        Marca = "Renault",
        Combustible = "Diesel",
        CargaMaxima = 11000
    }
};

listaCoches.Add(new Coche
{
    Marca = "Dacia",
    Combustible = "Diesel",
    NumeroPuertas = 3
});

listaCoches.RemoveAt(2);

ImprimirCoches();

List<Camion> listaCamiones2 = new List<Camion>
{
    new Camion
    {
        Marca = "MAN",
        Combustible = "Diesel",
        CargaMaxima = 10000
    },
    new Camion
    {
        Marca = "Mercedes",
        Combustible = "Diesel",
        CargaMaxima = 11000
    }
};

listaCamiones.AddRange(listaCamiones2);

ImprimirCamiones();

void ImprimirCoches()
{
    foreach(Coche item in listaCoches)
    {
        Console.WriteLine($"El coche {item.Marca} es de {item.Combustible} y tiene {item.NumeroPuertas}");
    }
    
}

void ImprimirCamiones()
{
    foreach (Camion item in listaCamiones)
    {
        Console.WriteLine($"El camion {item.Marca} es de {item.Combustible} y tiene una carga de  {item.CargaMaxima}");
    }

}

