import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const customerPageActions = createActionGroup({
  source: 'Customer Page',
  events: {
    loadCustomers: emptyProps,
    selectCustomer: props<{ customerId: number }>(),
    deleteCustomer: props<{ customerId: number }>(),
    // createCustomer: props<CreateCustomer>(),
    // updateCustomer: props<Customer>()
  }
});
