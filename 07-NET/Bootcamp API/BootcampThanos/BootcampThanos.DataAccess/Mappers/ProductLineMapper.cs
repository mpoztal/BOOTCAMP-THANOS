using BootcampThanos.DataAccess.Contracts.Models;
using BootcampThanos.DataAccess.Entities;

namespace BootcampThanos.DataAccess.Mappers
{
    public static class ProductLineMapper
    {
        public static Productline MapToProductLineFromProductLineDto(ProductLineDto product)
        {
            return new Productline
            {
                ProductLine1 = product.ProductLineCode,
                HtmlDescription = product.HtmlDescription,
                Image = product.Image,
                TextDescription = product.TextDescription
            };
        }

        public static ProductLineDto MapToProductLineDtoFromProductLine(Productline product)
        {
            return new ProductLineDto
            {
                ProductLineCode = product.ProductLine1,
                HtmlDescription = product.HtmlDescription,
                Image = product.Image,
                TextDescription = product.TextDescription
            };
        }
    }
}
