import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { concatMap, delay, mergeMap, of, range, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  pageTitle = 'movies';

  ngOnInit(): void {
    // range(1, 5)
    //   .pipe(
    //     concatMap((i) => of(i).pipe(delay(this.randomDelay()))),
    //     tap((x) => x)
    //   )
    //   .subscribe((i) => console.log(`concatMap:  ${i}`));
    // range(11, 5)
    //   .pipe(
    //     mergeMap((i) => of(i).pipe(delay(this.randomDelay()))),
    //     tap((x) => x)
    //   )
    //   .subscribe((i) => console.log(`mergeMap:  ${i}`));
    // range(21, 5)
    //   .pipe(
    //     switchMap((i) => of(i).pipe(delay(this.randomDelay()))),
    //     tap((x) => x)
    //   )
    //   .subscribe((i) => console.log(`mergeMap:  ${i}`));
  }

  private randomDelay() {
    return Math.floor(Math.random() * 1000) + 500;
  }

  ngOnDestroy(): void {}
}
