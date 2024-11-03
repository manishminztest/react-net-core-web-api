using System.ComponentModel.DataAnnotations;

namespace NetWebAPI.DTOs.Account
{
    public class RegisterDTO
    {
        [Required]
        public string FirstName {  get; set; }
        public string? MiddleName {  get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string PhoneNumber {  get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Password doesn't match.")]
        public string ConfirmPassword { get; set; }
    }
}
