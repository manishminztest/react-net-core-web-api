using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using NetWebAPI.Entities;

namespace NetWebAPI.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            SeedRoles(builder);
        }

        private static void SeedRoles(ModelBuilder builder)
        {
            builder.Entity<IdentityRole>().HasData
                (
                    new IdentityRole() { Name="Super", ConcurrencyStamp="1", NormalizedName="Super" },
                    new IdentityRole() { Name="Admin", ConcurrencyStamp="2", NormalizedName="Admin" },
                    new IdentityRole() { Name="Hr", ConcurrencyStamp="3", NormalizedName="Hr"},
                    new IdentityRole() { Name="User", ConcurrencyStamp="4",NormalizedName="user"}
                );
        }
    }
}
