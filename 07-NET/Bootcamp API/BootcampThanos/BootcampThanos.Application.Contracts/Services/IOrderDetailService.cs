using BootcampThanos.BusinessModels.Models.OrderDetail;

namespace BootcampThanos.Application.Contracts.Services
{
    public interface IOrderDetailService
    {
        List<OrderDetailResponse> GetOrderDetailsByOrderNumber(int orderNumber);
        List<OrderDetailResponse> AddOrderDetailList(int orderNumber, List<CreateOrderDetailRequest> orderDetails, bool commit = true);
    }
}
