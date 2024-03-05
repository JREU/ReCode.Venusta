import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Customer } from "@venusta/portal/customer/models";

export const customerPageActions = createActionGroup({
  source: 'Customer Page',
  events: {
    loadCustomers: emptyProps,
    loadCustomer: props<{ customerId: number }>(),
    deleteCustomer: props<{ customerId: number }>(),
    createCustomer: props<{ customer: Omit<Customer, "id"> }>(),
    updateCustomer: props<{ customer: Customer }>(),
    searchCustomer: props<{ query: string }>()
  }
});
