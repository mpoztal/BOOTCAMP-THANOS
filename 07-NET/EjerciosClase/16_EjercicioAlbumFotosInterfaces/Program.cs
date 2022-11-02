using _16_EjercicioAlbumFotosInterfaces.Clases;

AlbumFotos album16 = new AlbumFotos();
AlbumFotos album24 = new AlbumFotos(24);
SuperAlbumFotos superAlbum = new SuperAlbumFotos();

Console.WriteLine(album16.GetNumeroPaginas());
Console.WriteLine(album24.GetNumeroPaginas());
Console.WriteLine(superAlbum.GetNumeroPaginas());
