import {
  AsyncPipe,
  CommonModule,
  CurrencyPipe,
  NgFor,
  NgIf,
} from '@angular/common';
import {
  Component,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Movie } from '../movie';
import { catchError, EMPTY, Subscription } from 'rxjs';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, AsyncPipe],
  templateUrl: './movie-detail.component.html',
  styles: ``,
})
export class MovieDetailComponent {
  private movieService = inject(MovieService);

  errorMessage = '';

  // Set the page title
  // pageTitle = this.movie
  // ? `Product Detail for: ${this.movie.movieName}`
  // : 'Movie Detail';
  pageTitle = 'Movie Detail';
  // Movie to display
  movie$ = this.movieService.movie$.pipe(
    catchError((err) => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  addToCart(movie: Movie) {}
}
