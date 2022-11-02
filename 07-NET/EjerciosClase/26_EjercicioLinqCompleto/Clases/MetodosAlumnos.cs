﻿using _26_EjercicioLinqCompleto.Entidades;
using _26_EjercicioLinqCompleto.Interfaces;
using _26_EjercicioLinqCompleto.Modelos;

namespace _26_EjercicioLinqCompleto.Clases
{
    public class MetodosAlumnos : IMetodosAlumnos
    {
        private ApplicationDbContext _context;

        public MetodosAlumnos()
        {
            _context = new ApplicationDbContext();
        }

        public AlumnoExtendidoPaginado GetAlumnosJoin(DateTime? fechaDesde = null, DateTime? fechaHasta = null, double? notaMedia = 0.0, string? filtroNombre = null, int pagina = 1, int elementosPorPagina = 1)
        {
            AlumnoExtendidoPaginado resultado = new AlumnoExtendidoPaginado();

            var query = from a in _context.Alumnos

                        //let notaMediaLinq = a.Notas.Average()

                        join n in _context.Notas on a.Id equals n.AlumnoId

                        join c in _context.Clases on n.ClaseId equals c.Id

                        join p in _context.Poblaciones on a.PoblacionId equals p.Id

                        let notaMediaLinq = _context.Notas.Where(n => n.AlumnoId == a.Id
                                                                   && n.ClaseId == c.Id)
                                                          .Select(n => n.Calificacion).Average()

                        where

                             (string.IsNullOrEmpty(filtroNombre) || a.Nombre.StartsWith(filtroNombre))

                              && (notaMedia == null || notaMediaLinq >= notaMedia)

                              && (fechaDesde == null || a.FechaDeNacimiento >= fechaDesde)

                              && (fechaHasta == null || a.FechaDeNacimiento <= fechaHasta)


                        //where (false or aplica el filtro)
                        //  and (true or false)
                        //  and (true or false)
                        //  and (true or false)
                        //where (true)
                        //  and (true)
                        //  and (true)
                        //  and (true)

                        select new AlumnoExtendido
                        {
                            NombreAlumno = a.Nombre,
                            FechaDeNacimientoAlumno = a.FechaDeNacimiento,
                            NombreClase = c.Nombre,
                            NotaMediaAlumno = notaMediaLinq,
                            NombrePoblacion = p.Nombre
                        };

            resultado.Total = query.Count();
            int skip = (pagina - 1) * elementosPorPagina;
            resultado.Pagina = pagina;
            resultado.ElementosPorPagina = elementosPorPagina;

            resultado.Resultados = query.Skip(skip).Take(elementosPorPagina).Distinct().ToList();

            return resultado;
        }
    }
}
