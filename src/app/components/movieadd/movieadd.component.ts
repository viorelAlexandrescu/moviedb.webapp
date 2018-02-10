import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Movie } from '../../entities/Movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movieadd',
  templateUrl: './movieadd.component.html',
  styleUrls: ['./movieadd.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MovieaddComponent implements OnInit {

  private title: string;
  private releaseDate: Date;
  private description: string;
  private coverUrl: string;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createMovie() {
    const movie = new Movie();
    movie.title = this.title;
    movie.releaseDate = this.releaseDate;
    movie.description = this.description;
    movie.coverUrl = this.coverUrl;
    this.movieService.createMovie(movie)
        .subscribe();

    this.goBack();
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
