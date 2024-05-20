import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Customer } from "@venusta/portal/customer/models";

export const searchPageActions = createActionGroup({
  source: 'Search Page',
  events: {
    search: props<{ query: string }>(),
  }
});
