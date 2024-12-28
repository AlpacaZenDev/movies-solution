import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-edit',
  standalone: true,
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
})
export class MovieEditComponent {
  movieForm: FormGroup;
  currentYear: number;
  movieId: number;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.currentYear = new Date().getFullYear();
    this.movieForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      director: ['', Validators.required],
      genre: ['', Validators.required],
      year: [
        '',
        [
          Validators.required,
          Validators.min(1900),
          Validators.max(this.currentYear),
        ],
      ],
    });

    
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadMovieData();
  }

  loadMovieData(): void {
    this.movieService.getMovieById(this.movieId).subscribe({
      next: (movie) => {
        console.log('Datos cargados:', movie); 
        this.movieForm.patchValue(movie);
      },
      error: (err) => console.error('Error al cargar los datos de la película', err),
    });
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      // Incluye el ID en los datos enviados al backend
      const movieData = {
        id: this.movieId, 
        ...this.movieForm.value, 
      };
  
      console.log('Datos enviados al backend:', movieData); // Depuración
  
      this.movieService.updateMovie(this.movieId, movieData).subscribe({
        next: () => {
          console.log('Película actualizada con éxito');
          this.router.navigate(['/movies']);
        },
        error: (err) => console.error('Error al actualizar la película:', err),
      });
    } else {
      console.warn('Formulario inválido');
    }
  }
  
  
}
