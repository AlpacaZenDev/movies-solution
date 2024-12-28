import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly apiUrl = '/api/movies'; // Usar el proxy configurado

  constructor(private http: HttpClient) {}

  // Obtener la lista de películas
  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener los detalles de una película por su ID
  getMovieById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva película
  createMovie(movie: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, movie);
  }

  // Actualizar una película existente
  updateMovie(id: number, movie: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, movie);
  }

  // Eliminar una película
  deleteMovie(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
