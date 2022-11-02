using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _24_EjercicioLinqLibros.Entidades
{
    public class Book
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [MaxLength(200)]
        [Required]
        public string Title { get; set; }

        //[ForeignKey("Author")]
        public int? AuthorId { get; set; }

        [Required]
        public int PublicationDate { get; set; } // Year

        [Required]
        public int Sales { get; set; } //Millions

        public virtual Author Author { get; set; }

        public Book(string title, int? authorId, int publicationDate, int sales)
        {
            Title = title;
            AuthorId = authorId;
            PublicationDate = publicationDate;
            Sales = sales;
        }
    }
}
