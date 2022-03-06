using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set;}
        public string? ImageUrl { get; set;}
    }
}
