using log4net;
using Microsoft.AspNetCore.Mvc;
using NetWebAPI.DTOs.Account;
using NetWebAPI.Helpers;
using NetWebAPI.Services.Account;
using Newtonsoft.Json;

namespace NetWebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;
        private readonly IConfiguration _configuration;
        private static readonly ILog _logger = LogManager.GetLogger(typeof(AccountController));

        public AccountController(IAccountService accountService, IConfiguration configuration)
        {
            _accountService = accountService;
            _configuration = configuration;
        }

        [HttpPost("v1/register")]
        public async Task<IActionResult> RegisterV1([FromBody] RegisterDTO registerDTO)
        {
            if (registerDTO == null)
            {
                _logger.Warn("Register request received with null data.");
                return BadRequest(new { status = StatusCodes.Status400BadRequest, message = "Request data is invalid." });
            }

            try
            {
                var result = await _accountService.Register(registerDTO);

                if (result)
                {
                    var response = new { status = StatusCodes.Status201Created, message = "User created successfully." };
                    _logger.Info("User created successfully.");

                    //var serializedResponse = JsonConvert.SerializeObject(response);
                    //var encryptedResponse = _aesEncryption.Encrypt(serializedResponse);

                    return Ok(response);
                }
                else
                {
                    _logger.Warn("Failed to create user.");
                    return BadRequest(new { status = StatusCodes.Status400BadRequest, message = "Failed to create user." });
                }
            }
            catch (Exception ex)
            {
                _logger.Error("An error occurred while registering user.", ex);
                return StatusCode(StatusCodes.Status500InternalServerError, new { status = StatusCodes.Status500InternalServerError, message = "An error occurred while processing your request." });
            }
        }
    }
}
