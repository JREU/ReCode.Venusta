import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";

@Injectable()
export class CustomerEffects {
  private readonly actions$ = inject(Actions)
  private readonly router = inject(Router);

  // loadCustomers$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(customerPageActions.loadCustomers),
  //     mergeMap(() => this.customerService.getAll().pipe(
  //       map((customers) => customerApiActions.customersLoadedSuccess({ customers })),
  //       catchError(error => of(customerApiActions.customersLoadedFailure({error})))
  //     ))
  //   )
  // });

  // deleteCustomer$= createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(customerPageActions.deleteCustomer),
  //     mergeMap((action) => this.customerService.delete(action.customerId).pipe(
  //       map(() => customerApiActions.customerDeletedSuccess({ customerId: action.customerId })),
  //       catchError(error => of(customerApiActions.customerDeletedFailure({error})))
  //     ))
  //   )
  // });

  // createCustomer$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(customerPageActions.createCustomer),
  //     mergeMap((action) => this.customerService.add(
  //       CustomerUtil.toCreateCustomerApiModel(action)
  //     ).pipe(
  //       map((createdCustomer) =>
  //         customerApiActions.customerCreatedSuccess({ customerId: createdCustomer.id })
  //       ),
  //       catchError(error => of(customerApiActions.customerCreatedFailure({error})))
  //     ))
  //   )
  // });

  // customerSaved$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(customerApiActions.customerCreatedSuccess, customerApiActions.customerUpdatedSuccess),
  //     exhaustMap(() => this.router.navigate([RouterUtil.Configuration.Customers]))
  //   )
  // },{ dispatch: false });
}
