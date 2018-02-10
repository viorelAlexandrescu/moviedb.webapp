import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Discussion } from '../../entities/Discussion';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DiscussionDetailComponent implements OnInit {

  @Input() discussion: Discussion;
  comment: string;
  isAdding: boolean;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.userService.getDiscussionById(params.id))
        .subscribe(data => {
          const d = data as any;
          this.discussion = d.discussion;
          console.log(this.discussion);
        });

    this.isAdding = false;
  }

  addComment() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['/account']);
    } else {
      const id = this.discussion._id;
      this.userService.postComment(id, this.userService.getUsername(), this.comment)
          .subscribe(() => {
            // this.userService.getDiscussionById(id)
            //     .subscribe((data) => {
            //       const d = data as any;
            //       this.discussion = d.discussion;
            //       this.isAdding = false;
            //   });
            this.cancel();
            console.log('done posting');
            this.ngOnInit();
        });
    }
  }

  areThereComments() {
    if (this.discussion.comments !== undefined) {
      return true;
    }
    return false;
  }

  show() {
    this.isAdding = true;
  }

  cancel() {
    this.comment = null;
    this.isAdding = false;
  }
}
