using BootcampThanos.BusinessModels.Models.Order;

namespace BootcampThanos.Application.Contracts.Services
{
    public interface IOrderService
    {
        OrderWithDetailsResponse? GetOrderWithDetailsByOrderNumber(int orderNumber);
        OrderWithDetailsResponse? SaveOrderWithDetails(CreateOrderWithDetailsRequest request);
    }
}
