import { inject, Injectable } from '@angular/core';
import { CustomerApi } from '@venusta/portal/customer/api';
import { SearchResults } from '@venusta/portal/shared/models';
import { filterNullAndUndefined } from '@versure/utilities';
import { map, Observable } from 'rxjs';

@Injectable()
export class SearchApi {
  private readonly customerApi = inject(CustomerApi);
  search(query: string): Observable<SearchResults> {
    return this.customerApi.search(query).pipe(
      filterNullAndUndefined(),
      map(customers => ({ results: customers }) as SearchResults),
    );
  }
}
