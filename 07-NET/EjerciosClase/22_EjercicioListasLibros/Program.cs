using _22_EjercicioListasLibros.Clases;

List<Persona> listaPersonas = new List<Persona>
{
    new Persona
    {
        Nombre = "Autor1",
        Apellido = "Autor1",
        Edad = 25
    },
    new Persona
    {
        Nombre = "BAutor2",
        Apellido = "BAutor2",
        Edad = 26
    }
};

List<Libro> listaLibros = new List<Libro>
{
    new Libro
    {
        Titulo = "Titulo1",
        Autor = listaPersonas[0],
        AñoPublicacion = 1995
    },
    new Libro
    {
        Titulo = "Titulo2",
        Autor = listaPersonas[0],
        AñoPublicacion = 1996
    },
    new Libro
    {
        Titulo = "Titulo3",
        Autor = listaPersonas[0],
        AñoPublicacion = 1997
    },
    new Libro
    {
        Titulo = "Titulo4",
        Autor = listaPersonas[0],
        AñoPublicacion = 1998
    },
    new Libro
    {
        Titulo = "Titulo5",
        Autor = listaPersonas[0],
        AñoPublicacion = 1999
    },
    new Libro
    {
        Titulo = "Titulo6",
        Autor = listaPersonas[1],
        AñoPublicacion = 1995
    },
    new Libro
    {
        Titulo = "Titulo7",
        Autor = listaPersonas[1],
        AñoPublicacion = 1996
    },
    new Libro
    {
        Titulo = "Titulo8",
        Autor = listaPersonas[1],
        AñoPublicacion = 1997
    },
    new Libro
    {
        Titulo = "Titulo9",
        Autor = listaPersonas[1],
        AñoPublicacion = 1998
    },
    new Libro
    {
        Titulo = "Titulo10",
        Autor = listaPersonas[1],
        AñoPublicacion = 1999
    }
};

List<Editorial> listaEditoriales = new List<Editorial>
{
    new Editorial
    {
        Nombre = "Editorial1",
        Libros = new List<Libro>
        {
            listaLibros[0],
            listaLibros[1],
            listaLibros[2],
            listaLibros[3]
        }
    },
    new Editorial
    {
        Nombre = "Editorial2",
        Libros = new List<Libro>
        {
            listaLibros[4],
            listaLibros[5],
            listaLibros[6],
            listaLibros[7]
        }
    },
    new Editorial
    {
        Nombre = "Editorial3",
        Libros = new List<Libro>
        {
            listaLibros[8],
            listaLibros[9]
        }
    }
};

ImprimirEditoriales();

Console.WriteLine("----------------Creacion de nuevos items------------------");

Persona nuevoPersona = new Persona
{
    Nombre = "Autor3",
    Apellido = "Autor3",
    Edad = 45
};

listaPersonas.Add(nuevoPersona);

Libro nuevoLibro = new Libro
{
    Titulo = "Titulo11",
    AñoPublicacion = 1987,
    Autor = nuevoPersona
};

listaLibros.Add(nuevoLibro);

Editorial nuevaEditorial = new Editorial
{
    Nombre = "Editorial4",
    Libros = new List<Libro>
    {
        nuevoLibro
    }
};

listaEditoriales.Add(nuevaEditorial);

ImprimirEditoriales();

Console.WriteLine("----------------Borrado de Persona------------------");

listaPersonas.RemoveAt(0);

ImprimirEditoriales();

void ImprimirEditoriales()
{
    foreach(Editorial item in listaEditoriales)
    {
        Console.WriteLine(item.Nombre);
        foreach(Libro libro in item.Libros)
        {
            Console.WriteLine($"{ libro.Titulo} { libro.Autor.Nombre } { libro.AñoPublicacion }");
        }
    }
}

var query = from x in listaLibros
            where x.Autor.Nombre == "Autor1"
            select x;

List<Libro> listaFiltrada = query.ToList();

var queryProyectada = from e in listaEditoriales
                      from b in e.Libros
                      where b.AñoPublicacion == 1997
                      select new Persona
                      {
                          Nombre = b.Autor.Nombre,
                          Apellido = b.Autor.Apellido
                      };

List<Persona> personasFiltradas = queryProyectada.ToList();


//Hacer una query que filtre autores por nombre de autor que comience por la letra B

var queryStartWith = from a in listaPersonas
                     where a.Nombre.StartsWith("B")
                     select a;

List<Persona> personasFiltradasConStart = queryStartWith.ToList();

//Query para agrupar resultados
var queryGroup = from b in listaLibros
                 group b by b.AñoPublicacion into agrupacion
                 select agrupacion;

var listadoAgrupado = queryGroup.ToList();

foreach(var item in listadoAgrupado)
{
    Console.WriteLine($"Año Publicacion: {item.Key}");

    foreach(var book in item)
    {
        Console.WriteLine(book.Titulo);
    }
}

Console.WriteLine();

//Query sin proyeccion
var query2 = from b in listaLibros
             select b;

List<Libro> resultado = query2.ToList();

//Query sin proyeccion y mapeo en foreach
var queryProyectada2a = from b in listaLibros
                        select b;

List<ResultadoPersona> result = new List<ResultadoPersona>();

foreach (Libro item in queryProyectada2a.ToList())
{
    result.Add(new ResultadoPersona
    {
        NombreCompleto = item.Autor.Nombre + " " + item.Autor.Apellido,
        AñoNacimiento = DateTime.Now.Year - item.Autor.Edad
    });
}

//Query equivalente a la anterior pero ya con la proyeccion
var queryProyectada2 = from b in listaLibros
                       select new ResultadoPersona
                       {
                           NombreCompleto = b.Autor.Nombre + " " + b.Autor.Apellido,
                           AñoNacimiento = DateTime.Now.Year - b.Autor.Edad
                       };

List<ResultadoPersona> resultado2 = queryProyectada2.ToList();

//Order by
var librosOrdenados = from l in listaLibros
                      orderby l.Titulo descending
                      select l;


