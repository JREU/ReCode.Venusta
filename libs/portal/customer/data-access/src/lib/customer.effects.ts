import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { CustomerService } from "./customer.service";
import { catchError, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { customerApiActions, customerPageActions } from "@venusta/portal/customer/data-access";
import { RouterUtil } from "@venusta/portal/shared/utils";

@Injectable()
export class CustomerEffects {
  private readonly actions$ = inject(Actions)
  private readonly router = inject(Router);
  private readonly customerService = inject(CustomerService);

  loadCustomers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerPageActions.loadCustomers),
      mergeMap(() => this.customerService.getAll().pipe(
        map((customers) => customerApiActions.customersLoadedSuccess({ customers })),
        catchError(error => of(customerApiActions.customersLoadedFailure({error})))
      ))
    )
  });

  searchCustomers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerPageActions.searchCustomer),
      mergeMap((action) => this.customerService.getAll(action.query).pipe(
        map((customers) => customerApiActions.customersSearchSuccess({ customers })),
        catchError(error => of(customerApiActions.customersSearchFailure({error})))
      ))
    )
  });

  loadCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerPageActions.loadCustomer),
      mergeMap((action) => this.customerService.get(action.customerId).pipe(
        map((customer) => customerApiActions.customerLoadedSuccess({ customer })),
        catchError(error => of(customerApiActions.customerLoadedFailure({error})))
      ))
    )
  });

  updateCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerPageActions.updateCustomer),
      mergeMap((action) => this.customerService.put(
        action.customer
      ).pipe(
        map((updatedCustomer) =>
          customerApiActions.customerUpdatedSuccess({ updatedCustomer })
        ),
        catchError(error => of(customerApiActions.customerUpdatedFailure({error})))
      ))
    )
  });

  createCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerPageActions.createCustomer),
      mergeMap((action) => this.customerService.post(
        action.customer
      ).pipe(
        map((createdCustomer) => customerApiActions.customerCreatedSuccess({ customer: createdCustomer })),
        catchError(error => of(customerApiActions.customerCreatedFailure({error})))
      ))
    )
  });

  customerCreated$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerApiActions.customerCreatedSuccess),
      exhaustMap((action) => this.router.navigate([RouterUtil.Configuration.Customers, action.customer.id]))
    )
  },{ dispatch: false });
}
