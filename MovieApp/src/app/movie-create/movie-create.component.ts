import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-create',
  standalone: true,
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
})
export class MovieCreateComponent {
  movieForm: FormGroup;
  currentYear: number; 

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router
  ) {
    this.currentYear = new Date().getFullYear(); 

    // Configura el formulario reactivo con validaciones
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
  }

  
  onSubmit(): void {
    if (this.movieForm.valid) {
      
      this.movieService.createMovie(this.movieForm.value).subscribe({
        next: () => {
          console.log('Película creada exitosamente');
          this.router.navigate(['/movies']); 
        },
        error: (err) => {
          console.error('Error al crear la película', err); // Manejo de errores
        },
      });
    }
  }
}
