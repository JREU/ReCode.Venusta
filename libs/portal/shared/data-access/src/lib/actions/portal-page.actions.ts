import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const portalPageActions = createActionGroup({
  source: 'Portal Page',
  events: {
    toggleSidebar: emptyProps
  }
});
