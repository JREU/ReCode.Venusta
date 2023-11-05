import { Route } from "@angular/router";

export const customerRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@venusta/portal/customer/list').then(m => m.CustomersComponent)
  }
];
