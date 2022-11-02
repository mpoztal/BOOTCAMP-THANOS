using BootcampThanos.DataAccess.Contracts.Models;
using BootcampThanos.DataAccess.Entities;

namespace BootcampThanos.DataAccess.Mappers
{
    public static class OrderDetailMapper
    {
        public static OrderDetailDto MapOrderDetailDTOfromOrderdetail(Orderdetail request)
        {
            OrderDetailDto result = new OrderDetailDto
            {
                OrderNumber = request.OrderNumber,
                OrderLineNumber = request.OrderLineNumber,
                PriceEach = request.PriceEach,
                ProductCode = request.ProductCode,
                QuantityOrdered = request.QuantityOrdered
            };

            return result;
        }

        public static Orderdetail MapOrderDetailFromOrderDetailDTO(OrderDetailDto request)
        {
            Orderdetail result = new Orderdetail
            {
                OrderNumber = request.OrderNumber,
                OrderLineNumber = request.OrderLineNumber,
                PriceEach = request.PriceEach,
                ProductCode = request.ProductCode,
                QuantityOrdered = request.QuantityOrdered
            };

            return result;
        }
    }
}
