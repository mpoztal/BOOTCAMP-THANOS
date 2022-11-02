using _25_EjercicioLinqAlumnosProfesores.Entidades;
using _25_EjercicioLinqAlumnosProfesores.Interfaces;

namespace _25_EjercicioLinqAlumnosProfesores.Clases
{
    public class LoadDataService : ILoadDataService
    {
        public List<Alumno> LoadAlumnos()
        {
            return new List<Alumno>
            {
                new Alumno
                {
                    Nombre = "Ismael",
                    Apellidos = "De La Poza",
                    Edad = 32,
                    Clase = ".NET",
                    PaisId = 1
                },
                new Alumno
                {
                    Nombre = "Juan",
                    Apellidos = "Martinez",
                    Edad = 33,
                    Clase = ".NET",
                    PaisId = 2
                },
                new Alumno
                {
                    Nombre = "Raul",
                    Apellidos = "Val Peral",
                    Edad = 18,
                    Clase = "Javascript",
                    PaisId = 3
                }
            };
        }

        public List<Profesor> LoadProfesores()
        {
            return new List<Profesor>
            {
                new Profesor
                {
                    Nombre = "Pedro",
                    Apellidos = "Sanchez",
                    Edad = 39,
                    Asignatura = ".NET"
                },
                new Profesor
                {
                    Nombre = "Ivan",
                    Apellidos = "Luengo",
                    Edad = 36,
                    Asignatura = "Javascript"
                }
            };
        }

        public List<Pais> LoadPaises()
        {
            return new List<Pais>
            {
                new Pais
                {
                    Id = 1,
                    Nombre = "España"
                },
                new Pais
                {
                    Id = 2,
                    Nombre = "Francia"
                },
                new Pais
                {
                    Id = 3,
                    Nombre = "Portugal"
                }
            };
        }
    }
}
