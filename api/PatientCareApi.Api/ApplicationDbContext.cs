namespace PatientCareApi.Api
{
    using global::PatientCareApi.Api.PatientCareApi.Api.Models;
    using Microsoft.EntityFrameworkCore;

    namespace PatientCareApi.Api.Data
    {
        public class ApplicationDbContext : DbContext
        {
            // Constructor to accept DbContextOptions
            public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
                : base(options)
            {
            }

            // DbSet for your entities
            public DbSet<Booking> Bookings { get; set; }

            // You can add other DbSets here as needed
        }
    }

}