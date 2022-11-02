using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _26_EjercicioLinqCompleto.Entidades
{
    public class Nota
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        //[ForeignKey("Alumno")]
        public int AlumnoId { get; set; }

        public virtual Alumno Alumno { get; set; }

        //[ForeignKey("Clase")]
        public int ClaseId { get; set; }

        public virtual Clase Clase { get; set; }

        public int Calificacion { get; set; }
    }
}
