using BootcampThanos.DataAccess.Contracts.Models;

namespace BootcampThanos.DataAccess.Contracts.Repositories
{
    public interface IOrderDetailRepository
    {
        List<OrderDetailDto> GetOrderDetailsByOrderNumber(int orderNumber);
        OrderDetailDto AddOrderDetail(OrderDetailDto orderDetail);
    }
}
