import { Component } from '@angular/core';
import { User } from '../../entities/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MovieDB';

  constructor(
    private userService: UserService) { }

  getUser() {
    return this.userService.getUsername();
  }

  logout() {
    this.userService.logout();
  }
}
