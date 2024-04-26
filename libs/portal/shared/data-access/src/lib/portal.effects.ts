import { inject, Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { portalPageActions } from './actions/portal-page.actions';
import { portalFeature } from './portal.feature';
import { PortalState } from './portal.state';

@Injectable()
export class PortalEffects {
  private readonly store = inject(Store<PortalState>);
  private readonly actions$ = inject(Actions);

  toggleDarkMode$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(portalPageActions.toggleDarkMode),
        concatLatestFrom(() => [
          this.store.select(portalFeature.selectDarkMode),
        ]),
        tap(([, darkMode]) => {
          if (darkMode) {
            document.body.classList.add('dark');
            return;
          }
          document.body.classList.remove('dark');
        }),
      );
    },
    { dispatch: false },
  );
}
