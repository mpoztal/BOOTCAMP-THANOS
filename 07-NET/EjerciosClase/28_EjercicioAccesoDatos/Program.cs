using _28_EjercicioAccesoDatos.Clases;
using _28_EjercicioAccesoDatos.Interfaces;
using _28_EjercicioAccesoDatos.Modelos;

IServicioAutor servicioAutor = new ServicioAutor();
IServicioLibro servicioLibro = new ServicioLibro();

List<InsertarAutor> autores = new List<InsertarAutor>
{
    new InsertarAutor
    {
        Nombre = "Autor1"
    },
    new InsertarAutor
    {
        Nombre = "Autor2"
    }
};

List<InsertarLibro> libros = new List<InsertarLibro>
{
    new InsertarLibro
    {
        Titulo = "Titulo 1",
        AutorId = 1
    },
    new InsertarLibro
    {
        Titulo = "Titulo 2",
        AutorId = 2
    },
    new InsertarLibro
    {
        Titulo = "Titulo 3",
        AutorId = 1
    },
    new InsertarLibro
    {
        Titulo = "Titulo 4",
        AutorId = 2
    },
};

servicioAutor.InsertarAutores(autores);
servicioLibro.InsertarLibros(libros);

RespuestaAutor? autor = servicioAutor.ObtenerAutor("Autor1");

if(autor != null)
{
    Console.WriteLine($"El autor {autor.NombreAutor} ha escrito {autor.TotalLibros} libros");
}

RespuestaAutorBase? autorABorrar = servicioAutor.ObtenerAutorPorNombre("Autor1");

if(autorABorrar != null)
{
    servicioAutor.BorrarAutores(new List<int> { autorABorrar.AutorId });
}

RespuestaLibroBase? libroABorrar = servicioLibro.ObtenerLibroPorTitulo("Titulo 2");

if (libroABorrar != null)
{
    servicioLibro.BorrarLibros(new List<int> { libroABorrar.Id });
}

servicioLibro.ActualizarLibro(4, "Libro Modificado");
