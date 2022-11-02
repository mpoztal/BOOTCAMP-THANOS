using _26_EjercicioLinqCompleto.Entidades;
using Microsoft.EntityFrameworkCore;

namespace _26_EjercicioLinqCompleto
{
    public class ApplicationDbContext : DbContext
    {

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string mySqlConnectionStr = "Server=localhost;Port=3306;Database=EjercicioEFCompletoLinq; Uid=root;Pwd=Bravent.2022;";

            optionsBuilder.UseMySql(mySqlConnectionStr, ServerVersion.AutoDetect(mySqlConnectionStr)).EnableSensitiveDataLogging();
        }

        public DbSet<Poblacion> Poblaciones { get; set; }
        public DbSet<Clase> Clases { get; set; }
        public DbSet<Nota> Notas { get; set; }
        public DbSet<Alumno> Alumnos { get; set; }
        public DbSet<Profesor> Profesores { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Poblacion>();
            modelBuilder.Entity<Clase>();

            modelBuilder.Entity<Nota>()
                .HasOne(n => n.Alumno)
                .WithMany(a => a.Notas)
                .HasForeignKey(n => n.AlumnoId);

            modelBuilder.Entity<Clase>()
                .HasMany(c => c.Notas)
                .WithOne(n => n.Clase)
                .HasForeignKey(n => n.ClaseId).OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Alumno>();
            modelBuilder.Entity<Profesor>();
        }
    }
}
