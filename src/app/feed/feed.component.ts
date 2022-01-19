import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Dashboard } from './../modelosInterface/dashboard';
import { DashboardService } from './../servicosinterface/dashboard.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  cards$: Observable<Dashboard[]>;
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cards$;
      }
      return this.cards$;

    })
  );

constructor(
  private breakpointObserver: BreakpointObserver,
  private dashboardService: DashboardService
  ) {
  this.cards$ = dashboardService.listagemCards()
    .pipe(
      catchError(error => {
      return of ([])
    })
  )
}
}
