using _16_EjercicioAlbumFotosInterfaces.Interfaces;

namespace _16_EjercicioAlbumFotosInterfaces.Clases
{
    public class AlbumFotos : IAlbumFotos
    {
        private protected int NumeroPaginas { get; set; }

        public AlbumFotos()
        {
            NumeroPaginas = 16;
        }

        public AlbumFotos(int numPaginas)
        {
            NumeroPaginas = numPaginas;
        }

        public int GetNumeroPaginas()
        {
            return NumeroPaginas;
        }
    }
}
