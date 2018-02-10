import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../../entities/Movie';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';
import { Review } from '../../entities/Review';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [MovieService]
})
export class DetailsComponent implements OnInit {

  @Input() movie: Movie;
  private rating: number;
  private reviews: Review[];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.movieService.getMovieById(params.id))
        .subscribe(data => {
          this.movie = data.movie;
          this.movieService.getRating(data.movie._id)
              .subscribe(ratingVal => this.rating = ratingVal.rating);
          this.movieService.getReviews(data.movie._id)
              .subscribe(reviewVal => this.reviews = reviewVal.reviews);
   });
  }

   deleteMovie() {
     this.movieService.deleteMovie(this.movie._id)
         .subscribe(() => this.goBack());
   }

   addReview() {
     const user = localStorage.getItem('user');
     if (user === null) {
        this.router.navigate(['/account']);
     } else {
       this.router.navigate(['/review', this.movie._id]);
     }
   }

   goBack() {
     this.router.navigate(['/home']);
   }
}
