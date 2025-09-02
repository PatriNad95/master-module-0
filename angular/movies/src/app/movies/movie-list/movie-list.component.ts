import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MovieService } from '../movie.service';
import { catchError, EMPTY, tap } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, NgClass, MovieDetailComponent, AsyncPipe],
  templateUrl: './movie-list.component.html',
  styles: ``,
})
export class MovieListComponent {
  // Just enough here for the template to compile
  pageTitle = 'Movies';
  errorMessage = '';

  private movieService = inject(MovieService);
  readonly movies$ = this.movieService.movies$.pipe(
    tap(() => console.log('In component pipeline')),
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  // Selected movie id to highlight the entry
  readonly selectedMovieId$ = this.movieService.movieSelected$;

  onSelected(movieId: number): void {
    this.movieService.movieSelected(movieId);
  }
}
