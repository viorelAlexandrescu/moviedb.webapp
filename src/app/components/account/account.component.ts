import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../entities/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountComponent implements OnInit {

  username: string;
  password: string;
  showMessage: boolean;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  login() {
    const user = new User();
    user.username = this.username;
    user.password = this.password;
    this.userService.login(user)
        .subscribe(payload => {
          if (payload.success) {
            console.log('login succesffuly');
            const newUser = new User();
            newUser.username = payload.user.username;
            newUser._id = payload.user._id;
            newUser.role = payload.user.role;
            localStorage.setItem('user', JSON.stringify(newUser));
            this.goBack();
          } else {
            console.log('login failed');
          }
        });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
