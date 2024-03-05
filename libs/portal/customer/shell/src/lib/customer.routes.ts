import { Route } from "@angular/router";
import { provideCustomerDataAccess } from "@venusta/portal/customer/data-access";

export const customerRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@venusta/portal/customer/list').then(m => m.CustomersComponent),
    providers: [
      provideCustomerDataAccess()
    ]
  },
  {
    path: 'nieuw',
    loadComponent: () => import('@venusta/portal/customer/create').then(m => m.CreateCustomerComponent)
  },
  {
    path: ':customerId',
    loadComponent: () => import('@venusta/portal/customer/edit').then(m => m.EditCustomerComponent)
  },
];
