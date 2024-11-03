using NetWebAPI.DTOs.Account;
using NetWebAPI.Models.Account;
using NetWebAPI.Repositories.Account;

namespace NetWebAPI.Services.Account
{
    public class AccountService: IAccountService
    {
        private readonly IAccountRepo _accountRepo;
        public AccountService(IAccountRepo accountRepo)
        {
            _accountRepo = accountRepo;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="registerDTO"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public async Task<bool> Register(RegisterDTO registerDTO)
        {
            try
            {
                var register = new RegisterModel()
                {
                    FirstName = registerDTO.FirstName,
                    LastName = registerDTO.LastName,
                    Email = registerDTO.Email,
                    PhoneNumber = registerDTO.PhoneNumber,
                    Password = registerDTO.Password,
                };

                var result = await _accountRepo.Register(register);
                return result;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message, ex);
            }
        }
    }
}
