using _09_PrimeraClase.Clases;

Vivienda nuevaVivienda = new Vivienda
{ 
    Metros = 90,
    Direccion = "Calle Test, Malaga" 
};

Console.WriteLine("La direccion de la vivienda es: " + nuevaVivienda.Direccion);

Console.WriteLine("La vivienda tiene: " + nuevaVivienda.Metros + " metros cuadrados.");

if (nuevaVivienda.EsDeProteccionOficial())
    Console.WriteLine("La vivienda es de Proteccion Oficial");
else
    Console.WriteLine("La vivienda no es de Proteccion Oficial");

nuevaVivienda.Reforma(20);

nuevaVivienda.Direccion = "Calle Test2";

Console.WriteLine("La vivienda tiene: " + nuevaVivienda.Metros + " metros cuadrados.");

if (nuevaVivienda.EsDeProteccionOficial())
    Console.WriteLine("La vivienda es de Proteccion Oficial");
else
    Console.WriteLine("La vivienda no es de Proteccion Oficial");

if (nuevaVivienda.TieneDueño())
    Console.WriteLine("La vivienda tiene dueño");
else
    Console.WriteLine("La vivienda no tiene dueño");


Piso nuevaPiso = new Piso
{ 
    Metros = 120,
    Direccion = "Calle Test2, Cadiz",
    TienePiscina = false,
    Planta = 4
};

Console.WriteLine("El piso tiene: " + nuevaPiso.Metros + " metros cuadrados y esta en la planta " + nuevaPiso.Planta);

if (nuevaPiso.TieneDueño())
    Console.WriteLine("El piso tiene dueño");
else
    Console.WriteLine("El piso no tiene dueño");

if (nuevaPiso.EsDeProteccionOficial())
    Console.WriteLine("El piso es de Proteccion Oficial");
else
    Console.WriteLine("El piso no es de Proteccion Oficial");



