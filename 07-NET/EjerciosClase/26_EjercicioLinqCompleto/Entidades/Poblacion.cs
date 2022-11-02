using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _26_EjercicioLinqCompleto.Entidades
{
    public class Poblacion
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string Nombre { get; set; }

        public virtual List<Alumno> Alumnos { get; set; }

        public virtual List<Profesor> Profesores { get; set; }

    }
}
