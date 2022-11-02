using BootcampThanos.BusinessModels.Models;
using BootcampThanos.BusinessModels.Models.ProductLine;

namespace BootcampThanos.Application.Contracts.Services
{
    public interface IProductLineService
    {
        PaginatedResponse<ProductLineResponse> GetProductLinesPaginated(ProductLineSearchRequest request);
        ProductLineResponse? GetProductByCode(string code);
        BaseResponse<bool> DeleteProductLine(string productCode);
        ProductLineResponse? AddProductLine(CreateProductLineRequest request);
        ProductLineResponse? UpdateProductLine(string code, UpdateProductLineRequest request);
    }
}
