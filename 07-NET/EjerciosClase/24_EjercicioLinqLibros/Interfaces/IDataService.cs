using _24_EjercicioLinqLibros.Entidades;
using _24_EjercicioLinqLibros.Modelos;

namespace _24_EjercicioLinqLibros.Interfaces
{
    public interface IDataService
    {
        List<Book> GetTop3BookMaxSales();
        List<Book> GetTop3BookMinSales();
        List<Book> GetBooks50Years();
        Book GetOldestBook();
        List<Author> GetAuthors(string? bookTitleFilter = null);
        AuthorResponse GetAuthorBestPublisher();
        List<AuthorResponse> GetAuthorsAndBooksPublished();
        List<BookResponse> GetBooksJoinAuthor();
        List<BookResponse> GetBooksLeftJoinAuthor();
        BookResponsePaginated GetBooksLeftJoinAuthorPaginated(int page, int itemsPerPage);
    }
}
