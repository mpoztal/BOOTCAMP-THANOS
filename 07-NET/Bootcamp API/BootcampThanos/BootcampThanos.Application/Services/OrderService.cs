using BootcampThanos.Application.Contracts.Services;
using BootcampThanos.Application.Mappers;
using BootcampThanos.BusinessModels.Models.Order;
using BootcampThanos.BusinessModels.Models.OrderDetail;
using BootcampThanos.DataAccess.Contracts;
using BootcampThanos.DataAccess.Contracts.Models;
using BootcampThanos.DataAccess.Contracts.Repositories;

namespace BootcampThanos.Application.Services
{
    public class OrderService : IOrderService
    {
        private IOrderRepository _orderRepository;
        private IUnitOfWork _UoW;
        private IOrderDetailService _orderDetailService;

        public OrderService(IOrderRepository orderRepository, IUnitOfWork UoW, IOrderDetailService orderDetailService)
        {
            _orderRepository = orderRepository;
            _UoW = UoW;
            _orderDetailService = orderDetailService;
        }

        public OrderWithDetailsResponse? GetOrderWithDetailsByOrderNumber(int orderNumber)
        {
            OrderDto? order = _orderRepository.GetOrderByNumber(orderNumber);

            if (order != null)
            {
               
                List<OrderDetailResponse> orderDetails = _orderDetailService.GetOrderDetailsByOrderNumber(orderNumber);

                OrderWithDetailsResponse result = OrderMapper.MapToOrderWithDetailsResponseFromOrderDtoAndOrderDetailDtoList(order, orderDetails);


                return result;
            }
            else return null;

        }

        public OrderWithDetailsResponse? SaveOrderWithDetails(CreateOrderWithDetailsRequest request)
        {
            OrderDto? existingOrder = _orderRepository.GetOrderByNumber(request.OrderNumber);

            if (existingOrder == null)
            {
                OrderDto orderInserted = _orderRepository.AddOrder(OrderMapper.MapToOrderDtoFromCreateOrderWithDetailsRequest(request));

                List<OrderDetailResponse> orderDetails = _orderDetailService.AddOrderDetailList(request.OrderNumber, request.OrderDetails, false);

                _UoW.Commit();

                return OrderMapper.MapToOrderWithDetailsResponseFromOrderDtoAndOrderDetailDtoList(orderInserted, orderDetails);
            }
            else return null;
        }
    }
}
