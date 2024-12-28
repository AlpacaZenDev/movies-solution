using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using MovieAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Configurar servicios
builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=movies.db"));

// Configurar Kestrel para usar puertos explícitos
builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(5000); // Puerto HTTP
    options.ListenAnyIP(5001, listenOptions => listenOptions.UseHttps()); // Puerto HTTPS
});

var app = builder.Build();

// Configurar el pipeline
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Deshabilitar redirección HTTPS temporalmente (opcional)
// app.UseHttpsRedirection();

app.UseRouting();

app.MapControllers();
app.MapGet("/", () => "¡Bienvenido a la API de Películas!");

app.Run();
