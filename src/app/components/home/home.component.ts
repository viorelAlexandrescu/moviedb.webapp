import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Movie } from '../../entities/Movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  private movies: Movie[];

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.movieService.getMovies()
        .subscribe(data => {
          const movieData = data as MovieList;
          this.movies = movieData.movies;
        });
  }

  goToDetail(id) {
    console.log('going to detail/', id);
    this.router.navigate(['/detail', id]);
  }
}

class MovieList {
  movies: Movie[];
}
