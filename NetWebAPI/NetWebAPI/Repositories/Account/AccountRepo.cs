using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using NetWebAPI.Entities;
using NetWebAPI.Models.Account;

namespace NetWebAPI.Repositories.Account
{
    public class AccountRepo: IAccountRepo
    {
        private readonly UserManager<ApplicationUser> userManager;

        public AccountRepo(UserManager<ApplicationUser> userManager)
        {
            this.userManager=userManager;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="registerModel"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public async Task<bool> Register(RegisterModel registerModel)
        {
            try
            {
                var user = new ApplicationUser()
                {
                    FirstName = registerModel.FirstName,
                    LastName = registerModel.LastName,
                    UserName = registerModel.Email,
                    NormalizedUserName = registerModel.Email,
                    Email = registerModel.Email,
                    NormalizedEmail = registerModel.Email,
                    PhoneNumber = registerModel.PhoneNumber,
                };

                var result = await userManager.CreateAsync(user, registerModel.Password);
                if (result.Succeeded)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message, ex);
            }
        }
    }
}
