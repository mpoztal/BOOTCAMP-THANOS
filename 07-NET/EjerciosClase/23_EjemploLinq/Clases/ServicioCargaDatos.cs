using _23_EjemploLinq.Interfaces;

namespace _23_EjemploLinq.Clases
{
    public class ServicioCargaDatos : IServicioCargaDatos
    {
        public List<ClaseAnimal> CargarClasesAnimales()
        {
            List<ClaseAnimal> result = new List<ClaseAnimal>();

            result.AddRange(new List<ClaseAnimal>
            {
                new ClaseAnimal
                {
                    Id = 1,
                    Descripcion = "Mamifero"
                },
                new ClaseAnimal
                {
                    Id = 2,
                    Descripcion = "Oviparo"
                },
            });

            return result;
        }

        public List<Gato> CargarGatos()
        {
            List<Gato> result = new List<Gato>();

            result.AddRange(new List<Gato>
            {
                new Gato
                {
                    TipoAnimal = 1,
                    Color = "Blanco",
                    Edad = 3
                },
                new Gato
                {
                    TipoAnimal = 1,
                    Color = "Negro",
                    Edad = 2
                },
                new Gato
                {
                    TipoAnimal = 1,
                    Color = "Marron",
                    Edad = 2
                }

            });

            return result;
        }
    }
}
