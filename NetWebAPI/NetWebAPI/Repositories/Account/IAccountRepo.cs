using NetWebAPI.Models.Account;

namespace NetWebAPI.Repositories.Account
{
    public interface IAccountRepo
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="register"></param>
        /// <returns></returns>
        Task<bool> Register(RegisterModel registerModel);
    }
}
