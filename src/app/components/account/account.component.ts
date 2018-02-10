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

  private username: string;
  private password: string;
  private showMessage: boolean;

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
    console.log(user);
    this.userService.login(user)
        .subscribe(success => {
          if (success) {
            this.showMessage = false;
            this.goBack();
          } else {
            this.showMessage = true;
          }
        });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
