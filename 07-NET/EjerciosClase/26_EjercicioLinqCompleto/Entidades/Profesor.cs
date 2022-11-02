using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _26_EjercicioLinqCompleto.Entidades
{
    public class Profesor
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Nombre { get; set; }

        [ForeignKey("Clase")]
        public int ClaseId { get; set; }

        public virtual Clase Clase { get; set; }

        [ForeignKey("Poblacion")]
        public int PoblacionId { get; set; }

        public virtual Poblacion Poblacion { get; set; }

        [Required]
        public DateTime FechaDeNacimiento { get; set; }
    }
}
