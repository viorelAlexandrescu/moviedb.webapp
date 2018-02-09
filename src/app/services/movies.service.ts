import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get('http://192.168.100.6:5000/api/movies');
  }
}
