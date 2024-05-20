import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { SearchApi } from '@venusta/portal/search/api';
import { RouterUtil } from '@venusta/portal/shared/utils';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import { searchApiActions, searchPageActions } from './actions';

@Injectable()
export class SearchEffects {
  private readonly actions$ = inject(Actions);
  private readonly router = inject(Router);
  private readonly searchApi = inject(SearchApi);
  private readonly store = inject(Store);

  search$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchPageActions.search),
      mergeMap(action =>
        this.searchApi.search(action.query).pipe(
          map(results => searchApiActions.searchSuccess({ results })),
          catchError(error => of(searchApiActions.searchFailure({ error }))),
        ),
      ),
    );
  });

  searchSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(searchApiActions.searchSuccess),
        exhaustMap(() =>
          this.router.navigate([RouterUtil.Configuration.Search]),
        ),
      );
    },
    { dispatch: false },
  );
}
