using BootcampThanos.Application.Contracts.Services;
using BootcampThanos.Application.Mappers;
using BootcampThanos.BusinessModels.Models.OrderDetail;
using BootcampThanos.DataAccess.Contracts;
using BootcampThanos.DataAccess.Contracts.Models;
using BootcampThanos.DataAccess.Contracts.Repositories;

namespace BootcampThanos.Application.Services
{
    public class OrderDetailService : IOrderDetailService
    {
        private IOrderDetailRepository _orderDetailRepository;
        private IUnitOfWork _UoW;

        public OrderDetailService(IOrderDetailRepository orderDetailRepository, IUnitOfWork UoW)
        {
            _orderDetailRepository = orderDetailRepository;
            _UoW = UoW;
        }

        public List<OrderDetailResponse> GetOrderDetailsByOrderNumber(int orderNumber)
        {
            List<OrderDetailDto> orderDetails = _orderDetailRepository.GetOrderDetailsByOrderNumber(orderNumber);

            return OrderDetailMapper.MapOrderDetailResponseListFromOrderDetailDtoList(orderDetails);

        }

        public List<OrderDetailResponse> AddOrderDetailList(int orderNumber, List<CreateOrderDetailRequest> orderDetails, bool commit = true)
        {
            List<OrderDetailResponse> result = new List<OrderDetailResponse>();

            foreach (CreateOrderDetailRequest orderDetail in orderDetails)
            {
                OrderDetailDto orderDetailInserted = _orderDetailRepository.AddOrderDetail(OrderDetailMapper.MapToOrderDetailDtoFromCreateOrderDetailRequest(orderNumber, orderDetail));

                result.Add(OrderDetailMapper.MapOrderDetailResponseFromOrderDetailDto(orderDetailInserted));
            }

            if (commit)
                _UoW.Commit();

            return result;
        }
    }
}
