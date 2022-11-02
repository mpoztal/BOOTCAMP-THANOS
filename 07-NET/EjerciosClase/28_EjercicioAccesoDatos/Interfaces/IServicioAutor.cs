using _28_EjercicioAccesoDatos.Modelos;

namespace _28_EjercicioAccesoDatos.Interfaces
{
    public interface IServicioAutor
    {
        void InsertarAutores(List<InsertarAutor> autores);
        RespuestaAutor? ObtenerAutor(string nombre);
        void BorrarAutores(List<int> autoresIds);
        RespuestaAutorBase? ObtenerAutorPorNombre(string nombre);
    }
}
