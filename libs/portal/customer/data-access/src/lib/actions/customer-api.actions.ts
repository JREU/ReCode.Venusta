import {createActionGroup, emptyProps, props} from "@ngrx/store";
import { HttpErrorResponse } from "@angular/common/http";

export const customerApiActions = createActionGroup({
  source: 'Customer API',
  events: {
    customersLoadedSuccess: props<{ customers: any }>(),
    customersLoadedFailure: props<{ error: HttpErrorResponse }>(),
    customerDeletedSuccess: props<{ customerId: number }>(),
    customerDeletedFailure: props<{ error: HttpErrorResponse }>(),
    customerCreatedSuccess: props<{ customerId: number }>(),
    customerCreatedFailure: props<{ error: HttpErrorResponse }>(),
    customerUpdatedSuccess: emptyProps,
    customerUpdatedFailure: props<{ error: HttpErrorResponse }>(),
  }
});
