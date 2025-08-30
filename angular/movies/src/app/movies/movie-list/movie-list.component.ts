import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { catchError, EMPTY, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgIf, NgClass, NgFor, MovieDetailComponent],
  templateUrl: './movie-list.component.html',
  styles: ``,
})
export class MovieListComponent implements OnInit, OnDestroy {
  // Just enough here for the template to compile
  pageTitle = 'Movies';
  errorMessage = '';
  sub!: Subscription;

  private movieService = inject(MovieService);

  // Movies
  movies: Movie[] = [];

  // Selected movie id to highlight the entry
  selectedMovieId: number = 0;

  ngOnInit(): void {
    this.sub = this.movieService
      .getMovies()
      .pipe(
        tap(() => console.log('In component pipeline')),
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        })
      )
      .subscribe((movies) => {
        this.movies = movies;
      });
  }

  onSelected(movieId: number): void {
    this.selectedMovieId = movieId;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
