using NetWebAPI.DTOs.Account;

namespace NetWebAPI.Services.Account
{
    public interface IAccountService
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="registerDTO"></param>
        /// <returns></returns>
        Task<bool> Register(RegisterDTO registerDTO);
    }
}
