﻿using _27_EjercicioLinqVentas.Entidades;
using Microsoft.EntityFrameworkCore;

namespace _27_EjercicioLinqVentas
{
    public class ApplicationDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string connectionString = "Server=localhost;Port=3306;Database=VentasEF; Uid=root;Pwd=Bravent.2022;";

            optionsBuilder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)).EnableSensitiveDataLogging();
        }

        public DbSet<TipoProducto> TipoProductos { get; set; }
        public DbSet<Producto> Productos { get; set; }
        public DbSet<Venta> Ventas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TipoProducto>();
            modelBuilder.Entity<Producto>();
            modelBuilder.Entity<Venta>();
        }
    }
}
