﻿using BootcampThanos.DataAccess.Contracts.Models;
using BootcampThanos.DataAccess.Contracts.Repositories;
using BootcampThanos.DataAccess.Mappers;

namespace BootcampThanos.DataAccess.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private ApplicationDbContext _context;

        public OrderRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public OrderDto? GetOrderByNumber(int orderNumber)
        {
            var query = from o in _context.Orders
                        where o.OrderNumber == orderNumber
                        select OrderMapper.MapOrderDTOfromOrder(o);

            return query.FirstOrDefault();
        }

        public OrderDto AddOrder(OrderDto order)
        {
            var orderInserted = _context.Orders.Add(OrderMapper.MapOrderFromOrderDTO(order));

            return OrderMapper.MapOrderDTOfromOrder(orderInserted.Entity);
        }
    }
}
