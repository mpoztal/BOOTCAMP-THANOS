using _23_EjemploLinq.Clases;
using _23_EjemploLinq.Interfaces;

IServicioCargaDatos servicio = new ServicioCargaDatos();

List<ClaseAnimal> listaClaseAnimales = new List<ClaseAnimal>();

listaClaseAnimales = servicio.CargarClasesAnimales();

List<Gato> listaGatos = servicio.CargarGatos();

//--------------Sacar un listado con todos los gatos----------------------------------------------
var queryGatos = from g in listaGatos
                 select new ResultadoGato
                 {
                     Color = g.Color,
                     Edad = g.Edad
                 };

List<ResultadoGato> resultadoGatos = queryGatos.ToList();

ImprimirGatos(resultadoGatos);

//--------------Sacar un listado con los gatos que tienen 2 años----------------------------------
var queryGatosFiltrada = from g in listaGatos
                         where g.Edad == 2
                         select new ResultadoGato
                         {
                             Color = g.Color,
                             Edad = g.Edad
                         };

List<ResultadoGato> resultadoGatosFiltrados = queryGatosFiltrada.ToList();

ImprimirGatos(resultadoGatosFiltrados);

//-------------Sacar el gato mas viejo------------------------------------------------------------
var queryGatoMasViejo = from g in listaGatos
                        orderby g.Edad descending
                        select new ResultadoGato
                        {
                            Color = g.Color,
                            Edad = g.Edad
                        };

ResultadoGato resultadoGatoMasViejo = queryGatoMasViejo.First();

ImprimirGatos(new List<ResultadoGato> { resultadoGatoMasViejo });

//-------------Agrupacion por gatos con 2 años----------------------------------------------------
var queryGatosAgrupada = from g in listaGatos
                         group g by g.Edad into g
                         where g.Key == 2
                         select g;

List<ResultadoGato> resultadoGatosAgrupados = new List<ResultadoGato>();

foreach (var group in queryGatosAgrupada)
{
    foreach(var item in group)
    {
        resultadoGatosAgrupados.Add(new ResultadoGato
        {
            Color = item.Color,
            Edad = item.Edad
        });
    }
}

ImprimirGatos(resultadoGatosAgrupados);

//------------------------Query con Join----------------------------------------------------------
var queryJoin = from g in listaGatos
                join c in listaClaseAnimales on g.TipoAnimal equals c.Id
                select new ResultadoGato
                {
                    Color = g.Color,
                    Edad = g.Edad,
                    TipoAnimal = c.Descripcion
                };

List<ResultadoGato> resultadoGatosJoin = queryJoin.ToList();

ImprimirGatos(resultadoGatosJoin);

void ImprimirGatos(List<ResultadoGato> lista)
{
    foreach(ResultadoGato item in lista)
    {
        Console.WriteLine($"El gato de color {item.Color} tiene {item.Edad} años y es de tipo {item.TipoAnimal}");
    }

    Console.WriteLine("-----------------------------------------------");
}
