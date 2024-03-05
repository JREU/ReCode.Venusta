import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CustomerApi } from "@venusta/portal/customer/api";
import { SearchResults } from "@venusta/portal/shared/models";
import { filterNullAndUndefined } from "@recode/utilities";

@Injectable()
export class SearchApi {
  private readonly customerApi = inject(CustomerApi);
  search(query: string): Observable<SearchResults> {
    return this.customerApi.search(query)
      .pipe(
        filterNullAndUndefined(),
        map(customers => ({ results: customers } as SearchResults)));
  }
}


