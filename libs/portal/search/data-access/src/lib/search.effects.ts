import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import { RouterUtil } from "@venusta/portal/shared/utils";
import { SearchApi } from "../../../api/src/lib/search.api";
import { searchPageActions, searchApiActions } from "./actions";
import { SearchState } from "./search.state";
import { Store } from "@ngrx/store";

@Injectable()
export class SearchEffects {
  private readonly actions$ = inject(Actions)
  private readonly router = inject(Router);
  private readonly searchApi = inject(SearchApi);
  private readonly store = inject(Store<SearchState>);

  search$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchPageActions.search),
      mergeMap((action) => this.searchApi.search(action.query).pipe(
        map((results) => searchApiActions.searchSuccess({ results })),
        catchError(error => of(searchApiActions.searchFailure({error})))
      ))
    )
  });

  searchSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchApiActions.searchSuccess),
      exhaustMap((action) => this.router.navigate([RouterUtil.Configuration.Search]))
    )
  },{ dispatch: false });
}
