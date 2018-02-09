import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Movie } from '../../entities/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  private movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies()
        .subscribe(data => {
          const movieData = data as MovieList;
          this.movies = movieData.movies;
        });
  }
}

class MovieList {
  movies: Movie[];
}
