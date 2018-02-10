import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../entities/Movie';
import { Review } from '../entities/Review';

@Injectable()
export class MovieService {
  // private url = 'http://192.168.100.6:5000';
  // private url = 'localhost:5000';
  private url = '';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    const url = this.url + '/api/movies';
    return this.http.get(url);
  }

  getMovieById(id: string): Observable<any> {
    const url = this.url + '/api/movies/' + id;
    return this.http.get(url);
  }

  createMovie(movie: Movie): Observable<any> {
    const url = this.url + '/api/movies';
    return this.http.post(url, {
      movie: movie
    });
  }

  createReview(review: Review): Observable<any> {
    const url = this.url + '/api/reviews';
    return this.http.post(url, {
      review: review
    });
  }

  deleteMovie(id: string): Observable<any> {
    const url = this.url + '/api/movies';
    return this.http.delete(url);
  }

  getRating(id: string): Observable<any> {
    const url = this.url + '/api/rating/' + id;
    return this.http.get(url);
  }

  getReviews(id: string): Observable<any> {
    const url = this.url + '/api/reviews/' + id;
    return this.http.get(url);
  }
}
