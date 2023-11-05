import { createReducer, on } from "@ngrx/store";
import { CustomerState } from "./customer.state";
import { customerApiActions } from "./actions/customer-api.actions";

const initialState: CustomerState = {
  customers: null,
  customerId: null
}

export const customerReducer = createReducer<CustomerState>(
  initialState,
  on(customerApiActions.customersLoadedSuccess, (state, { customers }) => ({
    ...state,
    customerId: null,
    customers: customers
  })),
  on(customerApiActions.customersLoadedFailure, (state) => ({
    ...state,
    customers: null
  })),
  on(customerApiActions.customerDeletedSuccess, (state, { customerId }) => ({
    ...state,
    audiences: state.customers?.filter(customer => customer.id !== customerId) ?? null
  })),
);
