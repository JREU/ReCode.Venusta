import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { customerFeature, customerPageActions, CustomerState } from "@venusta/portal/customer/data-access";
import { map, Observable } from "rxjs";
import { SearchResult, SearchResultType } from "@venusta/portal/shared/models";
import { filterNullAndUndefined } from "@recode/utilities";

@Injectable()
export class CustomerApi {
  private readonly store = inject(Store<CustomerState>);
  search(query: string): Observable<SearchResult[]> {
    this.store.dispatch(customerPageActions.searchCustomer({ query }));
    return this.store.select(customerFeature.selectSearchResult)
      .pipe(
        filterNullAndUndefined(),
        map(customers =>
            customers.map(customer => ({
              title: `${customer.firstName} ${customer.lastName}`,
              description: customer.email,
              url: `/klanten/${customer.id}`,
              type: SearchResultType.Customer
            } as SearchResult))
        ));
  }
}
