import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  catchError,
  EMPTY,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
  tap,
  throwError,
  BehaviorSubject,
  filter,
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

  private movieSelectedSubject = new BehaviorSubject<number | undefined>(
    undefined
  );
  readonly movieSelected$ = this.movieSelectedSubject.asObservable();

  readonly movies$: Observable<Movie[]> = this.http
    .get<Movie[]>(this.moviesUrl)
    .pipe(
      tap(() => console.log('In http.get pipeline')),
      shareReplay(1),
      catchError((err) => this.handleError(err))
    );

  readonly movie$ = this.movieSelected$.pipe(
    filter(Boolean),
    switchMap((id) => {
      const movieUrl = `${this.moviesUrl}/${id}`;
      return this.http.get<Movie>(movieUrl).pipe(
        tap(() => console.log('In http.get pipeline')),
        switchMap((movie) => this.getMovieWithReviews(movie)),
        catchError(this.handleError)
      );
    })
  );

  getMovieWithReviews(movie: Movie): Observable<Movie> {
    if (movie.hasReviews) {
      return this.http
        .get<Review[]>(this.reviewService.getReviewUrl(movie.id))
        .pipe(map((reviews) => ({ ...movie, reviews: reviews } as Movie)));
    }
    return of(movie);
  }

  movieSelected(selectedMovieId: number): void {
    this.movieSelectedSubject.next(selectedMovieId);
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    const formatted = this.errorService.formatError(err);
    return throwError(() => formatted);
  }
}
