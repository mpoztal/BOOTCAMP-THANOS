using _28_EjercicioAccesoDatos.Entidades;
using _28_EjercicioAccesoDatos.Interfaces;
using _28_EjercicioAccesoDatos.Modelos;

namespace _28_EjercicioAccesoDatos.Clases
{
    public class ServicioAutor : IServicioAutor
    {
        private ApplicationDbContext _context;
        private IServicioLibro servicioLibro;

        public ServicioAutor()
        {
            _context = new ApplicationDbContext();
            servicioLibro = new ServicioLibro();
        }

        public void InsertarAutores(List<InsertarAutor> autores)
        {
            foreach(InsertarAutor item in autores)
            {
                Autor nuevoAutor = new Autor();
                nuevoAutor.Nombre = item.Nombre;

                _context.Autores.Add(nuevoAutor);
            }

            _context.SaveChanges();
        }

        public RespuestaAutor? ObtenerAutor(string nombre)
        {
            var query = from a in _context.Autores
                        where a.Nombre == nombre
                        select new RespuestaAutor
                        {
                            NombreAutor = a.Nombre,
                            TotalLibros = (from b in _context.Libros
                                           where b.AutorId == a.Id
                                           select b).Count()
                        };

            return query.FirstOrDefault();
        }

        public void BorrarAutores(List<int> autoresIds)
        {
            var query = from a in _context.Autores
                        where autoresIds.Contains(a.Id)
                        select a;

            List<Autor> autoresABorrar = query.ToList();

            servicioLibro.BorrarLibrosPorAutores(autoresIds, _context);

            if (autoresABorrar != null && autoresABorrar.Count > 0)
            {
                _context.Autores.RemoveRange(autoresABorrar);
                _context.SaveChanges();
            }
        }

        public RespuestaAutorBase? ObtenerAutorPorNombre(string nombre)
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
    }
}
