using BootcampThanos.DataAccess.Contracts.Models;

namespace BootcampThanos.DataAccess.Contracts.Repositories
{
    public interface IOrderRepository
    {
        OrderDto? GetOrderByNumber(int orderNumber);
        OrderDto AddOrder(OrderDto order);
    }
}
