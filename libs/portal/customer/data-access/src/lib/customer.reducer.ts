import { createReducer, on } from '@ngrx/store';
import { customerApiActions, customerPageActions } from './actions';
import { CustomerState } from './customer.state';

const initialState: CustomerState = {
  customers: null,
  customer: null,
  searchQuery: null,
  searchResult: null,
  filter: null,
};

export const customerReducer = createReducer<CustomerState>(
  initialState,
  on(
    customerApiActions.customerLoadedSuccess,
    (state, { customer }): CustomerState => ({
      ...state,
      customer: customer,
    }),
  ),
  on(
    customerApiActions.customerLoadedFailure,
    (state): CustomerState => ({
      ...state,
      customer: null,
    }),
  ),
  on(
    customerApiActions.customersLoadedSuccess,
    (state, { customers }): CustomerState => ({
      ...state,
      customer: null,
      customers: customers,
    }),
  ),
  on(
    customerApiActions.customersLoadedFailure,
    (state): CustomerState => ({
      ...state,
      customers: null,
      customer: null,
    }),
  ),
  on(customerApiActions.customerDeletedSuccess, (state, { customerId }) => ({
    ...state,
    audiences:
      state.customers?.filter(customer => customer.id !== customerId) ?? null,
  })),
  on(
    customerApiActions.customerUpdatedSuccess,
    (state, { updatedCustomer }): CustomerState => ({
      ...state,
      customer: updatedCustomer,
    }),
  ),
  on(
    customerApiActions.customersSearchSuccess,
    (state, { customers }): CustomerState => ({
      ...state,
      searchResult: customers,
    }),
  ),
  on(
    customerApiActions.customersSearchFailure,
    (state): CustomerState => ({
      ...state,
      searchResult: null,
    }),
  ),
  on(
    customerPageActions.updateCustomerFilter,
    (state, { filter }): CustomerState => ({
      ...state,
      filter,
    }),
  ),
);
