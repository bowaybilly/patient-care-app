using Microsoft.AspNetCore.OData;
using Microsoft.EntityFrameworkCore;
using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;
using PatientCareApi.Api.PatientCareApi.Api.Data;
using PatientCareApi.Api.PatientCareApi.Api.Models;

namespace PatientCareApi.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container
            ConfigureServices(builder);

            var app = builder.Build();

            // Configure the HTTP request pipeline
            ConfigureMiddleware(app);

            app.Run();
        }

        private static void ConfigureServices(WebApplicationBuilder builder)
        {
            // Define the CORS policy
            const string AllowSpecificOrigins = "_allowSpecificOrigins";

            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: AllowSpecificOrigins,
                    policy =>
                    {
                        policy.WithOrigins("http://localhost:3000") // Replace with your React app's URL
                              .AllowAnyHeader()
                              .AllowAnyMethod();
                    });
            });

            // Configure DbContext with SQL Server
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            // Configure OData
            builder.Services.AddControllers()
                .AddOData(opt => opt.EnableQueryFeatures().AddRouteComponents("odata", GetEdmModel()));

            // Configure Swagger
            builder.Services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
                {
                    Title = "Patient Care API",
                    Version = "v1",
                    Description = "API Documentation for Patient Care System with OData support",
                });

                // Register the OData operation filter
                options.OperationFilter<SwaggerODataOperationFilter>();
            });
        }

        private static void ConfigureMiddleware(WebApplication app)
        {
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            // Enable CORS middleware
            app.UseCors("_allowSpecificOrigins");

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();
        }

        private static IEdmModel GetEdmModel()
        {
            var builder = new ODataConventionModelBuilder();
            builder.EntitySet<Booking>("Bookings");
            // Add other entity sets if needed
            return builder.GetEdmModel();
        }
    }
}
