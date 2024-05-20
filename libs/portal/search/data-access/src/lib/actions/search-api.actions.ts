import {createActionGroup, props} from "@ngrx/store";
import { HttpErrorResponse } from "@angular/common/http";
import { SearchResults } from "@venusta/portal/shared/models";

export const searchApiActions = createActionGroup({
  source: 'Search API',
  events: {
    searchSuccess: props<{ results: SearchResults }>(),
    searchFailure: props<{ error: HttpErrorResponse }>()
  }
});
