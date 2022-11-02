using _13_EjercicioInterfazVehiculo.Clases;

Vehiculo nuevoVehiculo = new Vehiculo(0);

Console.WriteLine("Que cantidad desea repostar?");

int litros;
int.TryParse(Console.ReadLine(), out litros);

nuevoVehiculo.Repostar(litros);
nuevoVehiculo.Conducir();
