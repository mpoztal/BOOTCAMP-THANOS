using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _24_EjercicioLinqLibros.Entidades
{
    public class Author
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AuthorId { get; set; }

        [Required]
        public string Name { get; set; }

        public virtual List<Book> Books { get; set; }

        public Author(int authorId, string name)
        {
            AuthorId = authorId;
            Name = name;
        }
    }
}
