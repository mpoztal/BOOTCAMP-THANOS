﻿using BootcampThanos.Application.Contracts.Services;
using BootcampThanos.BusinessModels.Models.Users;
using Microsoft.AspNetCore.Mvc;

namespace BootcampThanos.API.Controllers
{
    //api/users
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        //api/users/login
        [HttpPost]
        [Route("login")]
        [ProducesResponseType(typeof(UserResponse),StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Login(LoginRequest request)
        {
            UserResponse? user = _userService.ValidateUser(request);

            if (user != null)
            {
                return Ok(user);
            }
            else
            {
                return NoContent();
            }

        }
    }
}
