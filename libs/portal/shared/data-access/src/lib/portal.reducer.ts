import { createReducer, on } from '@ngrx/store';
import { portalPageActions } from './actions/portal-page.actions';
import { PortalState } from './portal.state';

const initialState: PortalState = {
  sidebarExpanded: false,
  profileMenuExpanded: false,
  darkMode: true,
};

export const portalReducer = createReducer<PortalState>(
  initialState,
  on(
    portalPageActions.toggleSidebar,
    (state): PortalState => ({
      ...state,
      sidebarExpanded: !state.sidebarExpanded,
    }),
  ),
  on(
    portalPageActions.toggleProfileMenu,
    (state): PortalState => ({
      ...state,
      profileMenuExpanded: !state.profileMenuExpanded,
    }),
  ),
  on(
    portalPageActions.toggleDarkMode,
    (state): PortalState => ({
      ...state,
      darkMode: !state.darkMode,
      profileMenuExpanded: false,
    }),
  ),
);
