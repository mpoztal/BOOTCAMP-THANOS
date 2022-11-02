using _25_EjercicioLinqAlumnosProfesores.Entidades;

namespace _25_EjercicioLinqAlumnosProfesores.Interfaces
{
    public interface IDataService
    {
        List<EstudianteExtendido> GetAlumnos();
        List<ProfesorExtendido> GetProfesores();
    }
}
