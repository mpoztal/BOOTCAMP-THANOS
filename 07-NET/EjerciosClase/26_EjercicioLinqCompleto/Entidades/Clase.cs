using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _26_EjercicioLinqCompleto.Entidades
{
    public class Clase
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Nombre { get; set; }

        [Required]
        public int Anyo { get; set; }

        public virtual List<Nota> Notas { get; set; }

        public virtual List<Profesor> Profesores { get; set; }
    }
}
