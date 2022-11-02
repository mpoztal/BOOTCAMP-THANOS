using BootcampThanos.BusinessModels.Models.Users;

namespace BootcampThanos.Application.Contracts.Services
{
    public interface IUserService
    {
        UserResponse? ValidateUser(LoginRequest request);
    }
}
