using _24_EjercicioLinqLibros.Entidades;
using _24_EjercicioLinqLibros.Interfaces;
using _24_EjercicioLinqLibros.Modelos;

namespace _24_EjercicioLinqLibros.Clases
{
    public class DataService : IDataService
    {
        //private List<Book> BookList { get; set; }
        //private List<Author> AuthorList { get; set; }

        private ApplicationDbContext _context;

        public DataService()
        {
            //ILoadService loadService = new LoadService();

            //BookList = loadService.LoadBooks();
            //AuthorList = loadService.LoadAuthors();

            _context = new ApplicationDbContext();
        }

        public List<Book> GetTop3BookMaxSales()
        {
            var query = from b in _context.Books
                        orderby b.Sales descending
                        select b;

            List<Book> result = query.Take(3).ToList();

            return result;
        }

        public List<Book> GetTop3BookMinSales()
        {
            var query = from b in _context.Books
                        orderby b.Sales ascending
                        select b;

            return query.Take(3).OrderByDescending(b => b.Sales).ToList();
        }

        public List<Book> GetBooks50Years()
        {
            var query = from b in _context.Books
                        where b.PublicationDate >= (DateTime.Now.Year - 50)
                        select b;

            return query.OrderBy(b => b.PublicationDate).ToList();
        }

        public Book GetOldestBook()
        {
            var query = from b in _context.Books
                        orderby b.PublicationDate ascending
                        select b;

            return query.First();
        }

        public List<Author> GetAuthors(string? bookTitleFilter = null)
        {
            var query = from a in _context.Authors
                        join b in _context.Books on a.AuthorId equals b.AuthorId
                        where string.IsNullOrEmpty(bookTitleFilter) 
                           || b.Title.StartsWith(bookTitleFilter)
                        select a;

            //select distinct Title
            //from books
            //where

            return query.Distinct().ToList();
        }

        public List<AuthorResponse> GetAuthorsAndBooksPublished()
        {
            //select count(book.AuthorId) as books, author.Name
            //from book
            //join author on book.AuthorId = book.AuthorId
            //group by book.AuthorId

            var query = from b in _context.Books

                        group b by b.AuthorId into bookGroup

                        //join a in _context.Authors on bookGroup.Key equals a.AuthorId

                        select new AuthorGroup
                        {
                            AuthorId = bookGroup.Key,
                            Books = bookGroup.Count()
                        };

            //Key = 1, lista de los datos agrupados
            //key = 2, 56
            //3, 78

            //Pepito, 89
            //Juanito, 56

            var query2 = from b in query.ToList()

                         join a in _context.Authors on b.AuthorId equals a.AuthorId

                         select new AuthorResponse
                         {
                             AuthorName = a.Name,
                             BookPublished = b.Books
                         };


            return query2.ToList();
        }

        public List<AuthorResponse> GetAuthorsAndBooksPublished2()
        {
            var query = from a in _context.Authors
                        select new AuthorResponse
                        {
                            AuthorName = a.Name,
                            //BookPublished = BookList.Where(b => b.AuthorId == a.AuthorId).Count()
                            BookPublished = (from b in _context.Books
                                             where b.AuthorId == a.AuthorId
                                             select b).Count()
                        };

            return query.ToList();
        }

        //public List<AuthorResponse> GetAuthorsAndBooksPublished3()
        //{
        //    List<AuthorResponse> result = new List<AuthorResponse>();

        //    foreach(Author author in _context.Authors)
        //    {
        //        result.Add(
        //            new AuthorResponse
        //            {
        //                AuthorName = author.Name,
        //                BookPublished = _context.Books.Where(b => b.AuthorId == author.AuthorId).Count()
        //            }
        //        );
        //    }

        //    return result;
        //}

        public AuthorResponse GetAuthorBestPublisher()
        {
            List<AuthorResponse> authors = GetAuthorsAndBooksPublished();

            var query = from a in authors
                        orderby a.BookPublished descending
                        select a;

            return query.First();
        }

        public List<BookResponse> GetBooksJoinAuthor()
        {
            var query = from b in _context.Books

                        join a in _context.Authors on b.AuthorId equals a.AuthorId

                        select new BookResponse
                        {
                            AuthorName = a.Name,
                            BookTitle = b.Title
                        };

            return query.ToList();
        }

        public List<BookResponse> GetBooksLeftJoinAuthor()
        {
            var query = from b in _context.Books

                        join a in _context.Authors on b.AuthorId equals a.AuthorId into authorBooks

                        from j in authorBooks.DefaultIfEmpty()

                        select new BookResponse
                        {
                            AuthorName = j == null ? "Anónimo" : j.Name,
                            BookTitle = b.Title
                        };

            return query.ToList();
        }

        public BookResponsePaginated GetBooksLeftJoinAuthorPaginated(int page, int itemsPerPage)
        {
            BookResponsePaginated result = new BookResponsePaginated();

            var query = from b in _context.Books

                        join a in _context.Authors on b.AuthorId equals a.AuthorId into authorBooks

                        from j in authorBooks.DefaultIfEmpty()

                        select new BookResponse
                        {
                            AuthorName = j == null ? "Anónimo" : j.Name,
                            BookTitle = b.Title
                        };

            result.Total = query.Count();
            result.Page = page;
            result.ItemsPerPage = itemsPerPage;

            int skip = (page-1) * itemsPerPage;

            result.Books = query.Skip(skip).Take(itemsPerPage).ToList();

            return result;
        }
    }
}
