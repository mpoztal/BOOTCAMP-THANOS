using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _26_EjercicioLinqCompleto.Entidades
{
    public class Alumno
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Nombre { get; set; }

        [Required]
        public DateTime FechaDeNacimiento { get; set; }

        [ForeignKey("Poblacion")]
        public int PoblacionId { get; set; }

        public virtual Poblacion Poblacion { get; set; }

        public virtual List<Nota> Notas { get; set; }
    }
}
