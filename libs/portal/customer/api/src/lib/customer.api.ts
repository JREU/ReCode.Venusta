import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  customerFeature,
  customerPageActions,
} from '@venusta/portal/customer/data-access';
import { SearchResult, SearchResultType } from '@venusta/portal/shared/models';
import { filterNullAndUndefined } from '@versure/utilities';
import { map, Observable } from 'rxjs';

@Injectable()
export class CustomerApi {
  private readonly store = inject(Store);
  search(query: string): Observable<SearchResult[]> {
    this.store.dispatch(customerPageActions.searchCustomer({ query }));
    return this.store.select(customerFeature.selectSearchResult).pipe(
      filterNullAndUndefined(),
      map(customers =>
        customers.map(
          customer =>
            ({
              title: `${customer.firstName} ${customer.lastName}`,
              description: customer.email,
              url: `/klanten/${customer.id}`,
              type: SearchResultType.Customer,
            }) as SearchResult,
        ),
      ),
    );
  }
}
