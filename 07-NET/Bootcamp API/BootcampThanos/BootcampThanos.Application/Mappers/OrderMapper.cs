using BootcampThanos.BusinessModels.Models.Order;
using BootcampThanos.BusinessModels.Models.OrderDetail;
using BootcampThanos.DataAccess.Contracts.Models;

namespace BootcampThanos.Application.Mappers
{
    public static class OrderMapper
    {
        public static OrderWithDetailsResponse MapToOrderWithDetailsResponseFromOrderDtoAndOrderDetailDtoList(OrderDto order, List<OrderDetailResponse> orderDetails)
        {
            OrderWithDetailsResponse result = new OrderWithDetailsResponse
            {
                Comments = order.Comments,
                CustomerNumber = order.CustomerNumber,
                OrderDate = order.OrderDate.ToString(),
                OrderNumber = order.OrderNumber,
                RequiredDate = order.RequiredDate.ToString(),
                ShippedDate = order.ShippedDate.ToString(),
                Status = order.Status,
                OrderDetails = orderDetails
            };

            return result;
        }

        public static OrderDto MapToOrderDtoFromCreateOrderWithDetailsRequest(CreateOrderWithDetailsRequest request)
        {
            return new OrderDto
            {
                Comments = request.Comments,
                CustomerNumber = request.CustomerNumber,
                OrderDate = DateOnly.Parse(request.OrderDate),
                OrderNumber = request.OrderNumber,
                RequiredDate = DateOnly.Parse(request.RequiredDate),
                ShippedDate = !String.IsNullOrEmpty(request.ShippedDate) ? DateOnly.Parse(request.ShippedDate) : null,
                Status = request.Status
            };
        }
    }
}
