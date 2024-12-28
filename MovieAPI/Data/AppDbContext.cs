using Microsoft.EntityFrameworkCore;
using MovieAPI.Models;

namespace MovieAPI.Data
{
    public class AppDbContext : DbContext
    {
        // Declarar el DbSet para la entidad Movie
        public DbSet<Movie> Movies { get; set; } = null!;

        // // Configurar la conexión a SQLite
        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //     optionsBuilder.UseSqlite("Data Source=movies.db");
        // }

        // Constructor necesario para compatibilidad con AddDbContext
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
    }
}
