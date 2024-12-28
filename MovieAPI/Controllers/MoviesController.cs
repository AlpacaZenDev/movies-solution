using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieAPI.Data;
using MovieAPI.Models;

namespace MovieAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoviesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MoviesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/movies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie>>> GetMovies()
        {
            return await _context.Movies.ToListAsync();
        }

        // GET: api/movies/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Movie>> GetMovie(int id)
        {
            var movie = await _context.Movies.FindAsync(id);

            if (movie == null)
            {
                return NotFound();
            }

            return movie;
        }

        // POST: api/movies
        [HttpPost]
        public async Task<ActionResult<Movie>> CreateMovie(Movie movie)
        {
            // Agregar la película a la base de datos
            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();

            // Retornar la película creada con un código 201 (Created)
            return CreatedAtAction(nameof(GetMovie), new { id = movie.Id }, movie);
        }


        // PUT: api/movies/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMovie(int id, Movie movie)
        {
            if (id != movie.Id)
            {
                return BadRequest("El ID de la película no coincide con el ID en la URL.");
            }

            var existingMovie = await _context.Movies.FindAsync(id);

            if (existingMovie == null)
            {
                return NotFound("La película con el ID especificado no existe.");
            }

            // Actualizar los campos de la película existente
            existingMovie.Title = movie.Title;
            existingMovie.Director = movie.Director;
            existingMovie.Genre = movie.Genre;
            existingMovie.Year = movie.Year;

            // Guardar cambios en la base de datos
            await _context.SaveChangesAsync();

            return NoContent(); // Código 204: No Content
        }


        // DELETE: api/movies/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovie(int id)
        {
            var movie = await _context.Movies.FindAsync(id);

            if (movie == null)
            {
                return NotFound("La película con el ID especificado no existe.");
            }

            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();

            return NoContent(); // Código 204: No Content
}



    }
}
