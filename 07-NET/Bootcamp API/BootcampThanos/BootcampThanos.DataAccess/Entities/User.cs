using System;
using System.Collections.Generic;

namespace BootcampThanos.DataAccess.Entities
{
    public partial class User
    {
        public int Id { get; set; }
        public string UserName { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}
