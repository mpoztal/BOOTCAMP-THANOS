using BootcampThanos.DataAccess.Contracts.Models;
using BootcampThanos.DataAccess.Entities;

namespace BootcampThanos.DataAccess.Mappers
{
    public static class OrderMapper
    {
        public static OrderDto MapOrderDTOfromOrder(Order request)
        {
            OrderDto result = new OrderDto
            {
                OrderNumber = request.OrderNumber,
                Comments = request.Comments,
                CustomerNumber = request.CustomerNumber,
                OrderDate = request.OrderDate,
                RequiredDate = request.RequiredDate,
                ShippedDate = request.ShippedDate,
                Status = request.Status,
            };

            return result;
        }

        public static Order MapOrderFromOrderDTO(OrderDto request)
        {
            Order result = new Order
            {
                OrderNumber = request.OrderNumber,
                Comments = request.Comments,
                CustomerNumber = request.CustomerNumber,
                OrderDate = request.OrderDate,
                RequiredDate = request.RequiredDate,
                ShippedDate = request.ShippedDate,
                Status = request.Status,
            };

            return result;
        }
    }
}
