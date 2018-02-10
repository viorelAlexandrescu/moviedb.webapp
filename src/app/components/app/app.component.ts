import { Component } from '@angular/core';
import { User } from '../../entities/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MovieDB';

  getUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user === {} ? 'None' : user.username;
  }
}
