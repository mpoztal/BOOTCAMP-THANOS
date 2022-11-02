using _26_EjercicioLinqCompleto.Modelos;

namespace _26_EjercicioLinqCompleto.Interfaces
{
    public interface IMetodosProfesor
    {
        ProfesorExtendidoPaginado GetProfesores(string? filtroPoblacion = null, int pagina = 1, int elementosPorPagina = 1);
    }
}
