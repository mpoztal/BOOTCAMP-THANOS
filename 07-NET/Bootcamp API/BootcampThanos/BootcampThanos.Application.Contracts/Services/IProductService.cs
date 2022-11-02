using BootcampThanos.BusinessModels.Models;
using BootcampThanos.BusinessModels.Models.Product;

namespace BootcampThanos.Application.Contracts.Services
{
    public interface IProductService
    {
        PaginatedResponse<ProductResponse> GetProductsPaginated(ProductSearchRequest request);
        List<ProductResponse> GetProductsByProductLine(string productLine);
        ProductResponse? GetProductByCode(string code);
        bool DeleteProduct(string productCode);
        ProductResponse? AddProduct(CreateProductRequest request);
        ProductResponse? UpdateProduct(string code, UpdateProductRequest request);
    }
}
