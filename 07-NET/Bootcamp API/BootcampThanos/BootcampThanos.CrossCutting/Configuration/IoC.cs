using BootcampThanos.Application.Contracts.Services;
using BootcampThanos.Application.Services;
using BootcampThanos.CrossCutting.Contracts.Services;
using BootcampThanos.CrossCutting.Services;
using BootcampThanos.DataAccess;
using BootcampThanos.DataAccess.Contracts;
using BootcampThanos.DataAccess.Contracts.Repositories;
using BootcampThanos.DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace BootcampThanos.CrossCutting.Configuration
{
    public static class IoC
    {
        public static IServiceCollection Register(this IServiceCollection services, IConfiguration configuration)
        {

            string mySqlConnectionStr = configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<ApplicationDbContext>(
                item =>
                {
                    item.UseMySql(
                 mySqlConnectionStr,
                 ServerVersion.AutoDetect(mySqlConnectionStr)).UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking).EnableSensitiveDataLogging();
                 }, ServiceLifetime.Scoped, ServiceLifetime.Scoped);

            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddTransient<IProductService, ProductService>();
            services.AddTransient<IProductRepository, ProductRepository>();
            services.AddTransient<IProductLineService, ProductLineService>();
            services.AddTransient<IProductLineRepository, ProductLineRepository>();
            services.AddTransient<IOrderRepository, OrderRepository>();
            services.AddTransient<IOrderDetailRepository, OrderDetailRepository>();
            services.AddTransient<IOrderService, OrderService>();
            services.AddTransient<IOrderDetailService, OrderDetailService>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<ICacheService, CacheService>();

            return services;
        }
    }
}
