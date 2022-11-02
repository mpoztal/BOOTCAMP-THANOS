using BootcampThanos.DataAccess.Contracts.Models;
using BootcampThanos.DataAccess.Contracts.Repositories;

namespace BootcampThanos.DataAccess.Repositories
{
    public class UserRepository : IUserRepository
    {
        private ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public UserDto? ValidateUser(string userName, string password)
        {
            var query = from u in _context.Users
                        where u.UserName == userName
                           && u.Password == password
                        select new UserDto
                        {
                            UserId = u.Id,
                            UserName = u.UserName
                        };

            return query.FirstOrDefault();
        }
    }
}
