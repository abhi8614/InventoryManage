namespace API.Extensions
{
    using API.Data;
    using API.Interfaces;
    using Microsoft.EntityFrameworkCore;

    public static class ApplicationServerExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            
            services.AddDbContext<DataContext>(options =>
            {
                string connStr = config.GetConnectionString("DefaultConnection");
                options.UseSqlServer(connStr);
            });
            return services;
        }
    }
}
