import { Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieDeleteComponent } from './movie-delete/movie-delete.component';

export const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesListComponent }, 
  { path: 'movies/new', component: MovieCreateComponent }, 
  { path: 'movies/:id', component: MovieDetailComponent }, 
  { path: 'movies/:id/edit', component: MovieEditComponent }, 
  { path: 'movies/:id/delete', component: MovieDeleteComponent }, 
  { path: '**', redirectTo: '/movies', pathMatch: 'full' }, // Ruta comodín
];
