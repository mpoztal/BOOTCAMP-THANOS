using BootcampThanos.DataAccess.Contracts.Models;

namespace BootcampThanos.DataAccess.Contracts.Repositories
{
    public interface IUserRepository
    {
        UserDto? ValidateUser(string userName, string password);
    }
}
