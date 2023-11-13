import { createReducer, on } from "@ngrx/store";
import { PortalState } from "@venusta/portal/shared/data-access";
import { portalPageActions } from "./actions/portal-page.actions";

const initialState: PortalState = {
  sidebarExpanded: false
}

export const portalReducer = createReducer<PortalState>(
  initialState,
  on(portalPageActions.toggleSidebar, (state) => ({
    ...state,
    sidebarExpanded: !state.sidebarExpanded
  })),
);
