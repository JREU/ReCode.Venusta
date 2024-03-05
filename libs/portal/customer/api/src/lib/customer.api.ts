import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { customerFeature, customerPageActions, CustomerState } from "@venusta/portal/customer/data-access";
import { filterDefined } from "@venusta/shared/utils";
import { map, Observable, tap } from "rxjs";
import { SearchResult } from "@venusta/portal/shared/models";

@Injectable()
export class CustomerApi {
  private readonly store = inject(Store<CustomerState>);
  search(query: string): Observable<SearchResult[]> {
    this.store.dispatch(customerPageActions.searchCustomer({ query }));
    return this.store.select(customerFeature.selectSearchResult)
      .pipe(
        filterDefined,
        map(customers =>
            customers.map(customer => ({
              title: `${customer.firstName} ${customer.lastName}`,
              description: customer.email,
              url: `/klanten/${customer.id}`
            } as SearchResult))
        ));
  }
}
