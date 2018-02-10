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
          const discussions = data as DiscussionList;
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
    this.userService.createDiscussion(this.subject)
        .subscribe(() => {});
  }

  cancel() {
    this.subject = null;
    this.isAdding = false;
  }
}

class DiscussionList {
  discussions: Discussion[];
}

