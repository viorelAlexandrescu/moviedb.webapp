import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Discussion } from '../../entities/Discussion';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DiscussionsComponent implements OnInit {

  discussions: Discussion[];
  subject: string;
  isAdding: boolean;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getDiscussions()
        .subscribe(data => {
          const discussions = data as any;
          this.discussions = discussions.discussions;
        });
  }

  openDiscussion(id: string) {
    this.router.navigate(['/discussion-detail', id]);
  }

  addDiscussion() {
    this.isAdding = true;
  }

  createDiscussion() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['/account']);
    } else {
      this.userService.createDiscussion(this.subject)
        .subscribe(() => {
          this.isAdding = false;
        });
    this.ngOnInit();
    }
  }

  cancel() {
    this.subject = null;
    this.isAdding = false;
  }
}

