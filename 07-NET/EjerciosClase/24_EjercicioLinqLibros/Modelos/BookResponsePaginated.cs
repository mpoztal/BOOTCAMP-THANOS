namespace _24_EjercicioLinqLibros.Modelos
{
    public class BookResponsePaginated
    {
        public List<BookResponse> Books { get; set; }
        public int Page { get; set; }
        public int ItemsPerPage { get; set; }
        public int Total { get; set; }
    }
}
