using _24_EjercicioLinqLibros.Clases;
using _24_EjercicioLinqLibros.Entidades;
using _24_EjercicioLinqLibros.Interfaces;
using _24_EjercicioLinqLibros.Modelos;

IDataService dataService = new DataService();

Console.WriteLine("--------------Top 3 Ventas---------------");

List<Book> listBookTop3MaxSales = dataService.GetTop3BookMaxSales();

ImprimirVentas(listBookTop3MaxSales);

Console.WriteLine("--------------3 libros con menos ventas---------------");

List<Book> listBookTop3MinSales = dataService.GetTop3BookMinSales();

ImprimirVentas(listBookTop3MinSales);

Console.WriteLine("--------------libros escritos en los ultimos 50 años---------------");

List<Book> booksWith50Years = dataService.GetBooks50Years();

foreach (Book book in booksWith50Years)
{
    Console.WriteLine($"El libro {book.Title} es de {book.PublicationDate}");
}

Console.WriteLine("--------------Libro mas antiguo---------------");

Book oldestBook = dataService.GetOldestBook();

Console.WriteLine($"El libro {oldestBook.Title} es el mas antiguo");

Console.WriteLine("--------------Autores que tienen libros pubicados que comienzan por El---------------");

List<Author> authors = dataService.GetAuthors("El");

foreach(Author a in authors)
{
    Console.WriteLine($"El autor {a.Name} tiene libros publicados que comienzan por El");
}

Console.WriteLine("--------------Autor con mas libros publicados---------------");

AuthorResponse authorBestPublisher = dataService.GetAuthorBestPublisher();

Console.WriteLine($"El autor {authorBestPublisher.AuthorName} tiene {authorBestPublisher.BookPublished} libros publicados");

Console.WriteLine("--------------Libros publicados por autor---------------");

List<AuthorResponse> booksPublished = dataService.GetAuthorsAndBooksPublished();

foreach(AuthorResponse author in booksPublished)
{
    Console.WriteLine($"El autor {author.AuthorName} tiene publicados {author.BookPublished} libros");
}

Console.WriteLine("--------------Join de libros con autor---------------");

List<BookResponse> joinBooks = dataService.GetBooksJoinAuthor();

foreach(BookResponse book in joinBooks)
{
    Console.WriteLine($"El libro {book.BookTitle} fue escrito por {book.AuthorName}");
}

Console.WriteLine("--------------Left Join de libros con autor---------------");

List<BookResponse> leftJoinBooks = dataService.GetBooksLeftJoinAuthor();

foreach (BookResponse book in leftJoinBooks)
{
    Console.WriteLine($"El libro {book.BookTitle} fue escrito por {book.AuthorName}");
}

Console.WriteLine("--------------Left Join de libros con autor paginados---------------");

BookResponsePaginated leftJoinPaginated = dataService.GetBooksLeftJoinAuthorPaginated(1, 5);

Console.WriteLine($"La busqueda tiene un total de {leftJoinPaginated.Total} elementos y estamos mostrando la página {leftJoinPaginated.Page} con {leftJoinPaginated.ItemsPerPage} elementos por página.");

foreach (BookResponse book in leftJoinPaginated.Books)
{
    Console.WriteLine($"El libro {book.BookTitle} fue escrito por {book.AuthorName}");
}

void ImprimirVentas(List<Book> listBook)
{
    foreach(Book book in listBook)
    {
        Console.WriteLine($"El libro {book.Title} tiene {book.Sales} ventas.");
    }
}

