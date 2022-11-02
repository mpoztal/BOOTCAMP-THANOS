using _25_EjercicioLinqAlumnosProfesores.Entidades;

namespace _25_EjercicioLinqAlumnosProfesores.Interfaces
{
    public interface ILoadDataService
    {
        List<Alumno> LoadAlumnos();
        List<Profesor> LoadProfesores();
    }
}
