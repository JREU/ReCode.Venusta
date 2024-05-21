import { Route } from '@angular/router';

export const searchRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@venusta/portal/search/search-result').then(
        m => m.SearchResultsComponent,
      ),
  },
];
