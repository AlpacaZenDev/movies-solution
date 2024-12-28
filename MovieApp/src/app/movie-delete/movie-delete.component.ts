import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-delete',
  standalone: true,
  template: `
    <div class="movie-delete">
      <p>¿Estás seguro de que quieres eliminar esta película?</p>
      <button (click)="deleteMovie()">Eliminar</button>
      <button (click)="cancel()">Cancelar</button>
    </div>
  `,
})
export class MovieDeleteComponent {
  constructor(private route: ActivatedRoute, private movieService: MovieService, private router: Router) {}

  deleteMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.deleteMovie(+id).subscribe({
        next: () => this.router.navigate(['/movies']),
        error: (err) => console.error('Error al eliminar la película:', err),
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/movies']);
  }
}
