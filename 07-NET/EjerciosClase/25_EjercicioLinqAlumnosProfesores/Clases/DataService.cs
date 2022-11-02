using _25_EjercicioLinqAlumnosProfesores.Entidades;
using _25_EjercicioLinqAlumnosProfesores.Interfaces;

namespace _25_EjercicioLinqAlumnosProfesores.Clases
{
    public class DataService : IDataService
    {
        private List<Alumno> ListaAlumnos { get; set; }
        private List<Profesor> ListaProfesores { get; set; }

        public DataService()
        {
            ILoadDataService loadDataService = new LoadDataService();

            ListaAlumnos = loadDataService.LoadAlumnos();
            ListaProfesores = loadDataService.LoadProfesores();
        }

        public List<EstudianteExtendido> GetAlumnos()
        {
            var query = from a in ListaAlumnos
                        where a.Edad >= 32
                              && a.Nombre.StartsWith("J")
                        select new EstudianteExtendido
                        {
                            Nombre = a.Nombre,
                            Apellidos = a.Apellidos,
                            Clase = a.Clase,
                            Edad = a.Edad,
                            Nota = 9
                        };

            return query.ToList();
        }

        public List<ProfesorExtendido> GetProfesores()
        {
            var query = from a in ListaProfesores
                        where a.Edad >= 36
                              && a.Nombre.StartsWith("P")
                        select new ProfesorExtendido
                        {
                            Nombre = a.Nombre,
                            Apellidos = a.Apellidos,
                            Asignatura = a.Asignatura,
                            Edad = a.Edad,
                            Evaluacion = 10
                        };

            return query.ToList();
        }

    }
}
