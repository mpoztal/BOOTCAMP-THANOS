using _27_EjercicioLinqVentas.Modelos;

namespace _27_EjercicioLinqVentas.Interfaces
{
    public interface IDataService
    {
        ProductoExtendidoPaginado GetVentas(string? filtroProducto = null, string? filtroTipo = null, DateTime? fechaDesde = null, DateTime? fechaHasta = null, double? importeDesde = null, double? importeHasta = null, int pagina = 1, int elementosPorPagina = 50);

        ProductoExtendidoPaginado GetVentas2(string? filtroProducto = null, string? filtroTipo = null, DateTime? fechaDesde = null, DateTime? fechaHasta = null, double? importeDesde = null, double? importeHasta = null, int pagina = 1, int elementosPorPagina = 50);

        ProductoExtendidoPaginado GetVentasDDBB(string? filtroProducto = null, string? filtroTipo = null, DateTime? fechaDesde = null, DateTime? fechaHasta = null, double? importeDesde = null, double? importeHasta = null, int pagina = 1, int elementosPorPagina = 50);

        void AñadirProducto();

        void ModificarProducto(int id, string descripcion);

        void BorrarProducto(int id);
    }
}
