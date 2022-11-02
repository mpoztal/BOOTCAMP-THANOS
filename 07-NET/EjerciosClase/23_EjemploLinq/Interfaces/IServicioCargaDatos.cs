using _23_EjemploLinq.Clases;

namespace _23_EjemploLinq.Interfaces
{
    public interface IServicioCargaDatos
    {
        List<ClaseAnimal> CargarClasesAnimales();

        List<Gato> CargarGatos();
    }
}
