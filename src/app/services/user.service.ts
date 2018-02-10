import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../entities/User';

@Injectable()
export class UserService {
  private url = 'http://192.168.100.6:5000';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
      const url = this.url + '/api/login';
      return this.http.post(url, {
          user: {
              username: user.username,
              password: user.password
          }
      });
  }
}
