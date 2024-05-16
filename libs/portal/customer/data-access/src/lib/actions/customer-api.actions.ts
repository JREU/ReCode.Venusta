import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { Customer } from '@venusta/portal/customer/models';

export const customerApiActions = createActionGroup({
  source: 'Customer API',
  events: {
    customerLoadedSuccess: props<{ customer: Customer }>(),
    customerLoadedFailure: props<{ error: HttpErrorResponse }>(),
    customersLoadedSuccess: props<{ customers: Customer[] }>(),
    customersLoadedFailure: props<{ error: HttpErrorResponse }>(),
    customerDeletedSuccess: props<{ customerId: number }>(),
    customerDeletedFailure: props<{ error: HttpErrorResponse }>(),
    customerCreatedSuccess: props<{ customer: Customer }>(),
    customerCreatedFailure: props<{ error: HttpErrorResponse }>(),
    customerUpdatedSuccess: props<{ updatedCustomer: Customer }>(),
    customerUpdatedFailure: props<{ error: HttpErrorResponse }>(),
    customersSearchSuccess: props<{ customers: Customer[] }>(),
    customersSearchFailure: props<{ error: HttpErrorResponse }>(),
  },
});
