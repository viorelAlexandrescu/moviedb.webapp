import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';
import { Review } from '../../entities/Review';
import { MovieService } from '../../services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../../entities/Movie';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewComponent implements OnInit {
  @Input() movie: Movie;

  review: string;
  rating: number;

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
        });
  }

  createReview() {
    const review = new Review();
    review.username = JSON.parse(localStorage.getItem('user')).username;
    review.movieId = this.movie._id;
    review.review = this.review;
    review.rating = this.rating;
    this.movieService.createReview(review)
        .subscribe();
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
