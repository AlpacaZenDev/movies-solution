import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  imports: [CommonModule],
})
export class MovieDetailComponent {
  movie: any | null = null;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieById(+id).subscribe({
        next: (movie) => (this.movie = movie),
        error: (err) => {
          this.errorMessage = 'No se pudo cargar la información de la película.';
          console.error(err);
        },
      });
    }
  }
}
