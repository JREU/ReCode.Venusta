import { createReducer, on } from "@ngrx/store";
import { CustomerState } from "./customer.state";
import { customerApiActions } from "./actions/customer-api.actions";
import { customerPageActions } from "@venusta/portal/customer/data-access";

const initialState: CustomerState = {
  customers: null,
  customer: null
}

export const customerReducer = createReducer<CustomerState>(
  initialState,
  on(customerApiActions.customerLoadedSuccess, (state, { customer }) => ({
    ...state,
    customer: customer
  })),
  on(customerApiActions.customerLoadedFailure, (state) => ({
    ...state,
    customer: null
  })),
  on(customerApiActions.customersLoadedSuccess, (state, { customers }) => ({
    ...state,
    customer: null,
    customers: customers
  })),
  on(customerApiActions.customersLoadedFailure, (state) => ({
    ...state,
    customers: null,
    customer: null
  })),
  on(customerApiActions.customerDeletedSuccess, (state, { customerId }) => ({
    ...state,
    audiences: state.customers?.filter(customer => customer.id !== customerId) ?? null
  })),
  on(customerApiActions.customerUpdatedSuccess, (state, { updatedCustomer }) => ({
    ...state,
    customer: updatedCustomer
  }))
);
