import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  catchError,
  EMPTY,
  map,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { Movie } from './movie';
import { HttpErrorService } from '../utilities/http-error.service';
import { ReviewService } from '../reviews/review.service';
import { Review } from '../reviews/review';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private moviesUrl = 'api/movies';

  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);
  private reviewService = inject(ReviewService);

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl).pipe(
      tap(() => console.log('In http.get pipeline')),
      catchError((err) => this.handleError(err))
    );
  }

  getMovie(id: number): Observable<Movie> {
    const movieUrl = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(movieUrl).pipe(
      tap(() => console.log('In http.get pipeline')),
      switchMap((movie) => this.getMovieWithReviews(movie)),
      catchError((err) => this.handleError(err))
    );
  }

  getMovieWithReviews(movie: Movie): Observable<Movie> {
    if (movie.hasReviews) {
      return this.http
        .get<Review[]>(this.reviewService.getReviewUrl(movie.id))
        .pipe(map((reviews) => ({ ...movie, reviews: reviews } as Movie)));
    }
    return of(movie);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    const formatted = this.errorService.formatError(err);
    return throwError(() => formatted);
  }
}
