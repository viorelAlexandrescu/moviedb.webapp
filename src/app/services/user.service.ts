import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../entities/User';

@Injectable()
export class UserService {
  // private url = 'http://192.168.100.6:5000';
//   private url = 'localhost:5000';
private url = '';
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

  logout() {
      localStorage.removeItem('user');
  }

  getUsername() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user is ', user);
    return user === {} ? 'None' : user.username;
  }

  getDiscussions() {
      const url = this.url + '/api/discussions';
      return this.http.get(url);
  }

  getDiscussionById(id: string) {
      const url = this.url + '/api/discussions/' + id;
      return this.http.get(url);
  }

  postComment(id: string, username: string, comment: string) {
    const url = this.url + '/api/discussions/' + id;
      return this.http.post(url, {
          comment : comment,
          username: username
      });
  }
}
