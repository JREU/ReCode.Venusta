import { Route } from '@angular/router';
import { provideCustomer } from './customer.provider';

export const customerRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@venusta/portal/customer/list').then(m => m.CustomersComponent),
    providers: [provideCustomer()],
  },
  {
    path: 'nieuw',
    loadComponent: () =>
      import('@venusta/portal/customer/create').then(
        m => m.CreateCustomerComponent,
      ),
  },
  {
    path: ':customerId',
    loadComponent: () =>
      import('@venusta/portal/customer/edit').then(
        m => m.EditCustomerComponent,
      ),
  },
];
