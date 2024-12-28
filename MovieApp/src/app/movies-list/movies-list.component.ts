import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies-list',
  standalone: true, // Esto indica que el componente es independiente
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  imports: [CommonModule, RouterModule] // Asegúrate de incluir CommonModule y RouterModule
})
export class MoviesListComponent {
  movies: any[] = [];
  errorMessage: string | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
        this.errorMessage = null;
      },
      error: (err) => {
        this.errorMessage = 'No se pudieron cargar las películas. Intenta más tarde.';
        console.error(err);
      }
    });
  }
}
