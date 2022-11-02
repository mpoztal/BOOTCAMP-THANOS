using _28_EjercicioAccesoDatos.Entidades;
using _28_EjercicioAccesoDatos.Interfaces;
using _28_EjercicioAccesoDatos.Modelos;

namespace _28_EjercicioAccesoDatos.Clases
{
    public class ServicioLibro : IServicioLibro
    {
        private ApplicationDbContext _context;

        public ServicioLibro()
        {
            _context = new ApplicationDbContext();
        }

        public void InsertarLibros(List<InsertarLibro> libros)
        {
            foreach (InsertarLibro item in libros)
            {
                Libro nuevoLibro = new Libro();
                nuevoLibro.Titulo = item.Titulo;
                nuevoLibro.AutorId = item.AutorId;

                _context.Libros.Add(nuevoLibro);
            }

            _context.SaveChanges();
        }

        public void ActualizarLibro(int libroId, string titulo)
        {   
            Libro? libro = _context.Libros.Where(l => l.Id == libroId).FirstOrDefault();

            if(libro != null)
            {
                libro.Titulo = titulo;
                _context.Libros.Update(libro);
                _context.SaveChanges();
            }
        }

        public void BorrarLibros(List<int> librosIds)
        {
            var query = from l in _context.Libros
                        where librosIds.Contains(l.Id)
                        select l;

            List<Libro> librosABorrar = query.ToList();

            if(librosABorrar != null && librosABorrar.Count > 0)
            {
                _context.Libros.RemoveRange(librosABorrar);
                _context.SaveChanges();
            }
        }

        public void BorrarLibrosPorAutores(List<int> autoresIds, ApplicationDbContext context)
        {
            var query = from l in _context.Libros
                        where autoresIds.Contains(l.AutorId)
                        select l; 

            List<Libro> librosABorrar = query.ToList();

            if (librosABorrar != null && librosABorrar.Count > 0)
            {
                context.Libros.RemoveRange(librosABorrar);
            }
        }

        public RespuestaAutorBase? ObtenerLibroPorNombre(string nombre)
        {
            var query = from a in _context.Autores
                        where a.Nombre == nombre
                        select new RespuestaAutorBase
                        {
                            Autor = a.Nombre,
                            AutorId = a.Id
                        };

            return query.FirstOrDefault();
        }

        public RespuestaLibroBase? ObtenerLibroPorTitulo(string titulo)
        {
            var query = from l in _context.Libros
                        where l.Titulo == titulo
                        select new RespuestaLibroBase
                        {
                            Id = l.Id,
                            Titulo = l.Titulo
                        };

            return query.FirstOrDefault();
        }
    }
}
