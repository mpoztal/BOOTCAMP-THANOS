using _28_EjercicioAccesoDatos.Modelos;

namespace _28_EjercicioAccesoDatos.Interfaces
{
    public interface IServicioLibro
    {
        void InsertarLibros(List<InsertarLibro> libros);
        void ActualizarLibro(int libroId, string titulo);
        void BorrarLibros(List<int> librosIds);
        void BorrarLibrosPorAutores(List<int> autoresIds, ApplicationDbContext context);
        RespuestaLibroBase? ObtenerLibroPorTitulo(string titulo);
    }
}
