using _16_EjercicioAlbumFotosInterfaces.Interfaces;

namespace _16_EjercicioAlbumFotosInterfaces.Clases
{
    public class SuperAlbumFotos : AlbumFotos, ISuperAlbumFotos
    {
        public SuperAlbumFotos()
        {
            NumeroPaginas = 64;
        }
    }
}
