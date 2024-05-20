import { createActionGroup, emptyProps } from '@ngrx/store';

export const portalPageActions = createActionGroup({
  source: 'Portal Page',
  events: {
    toggleSidebar: emptyProps,
    toggleProfileMenu: emptyProps,
    toggleDarkMode: emptyProps,
  },
});
