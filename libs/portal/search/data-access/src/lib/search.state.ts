import { PortalState } from "@venusta/portal/shared/data-access";
import { SearchResults } from "@venusta/portal/shared/models";

export type State = PortalState & {
  search: SearchState;
}

export type SearchState = {
  results: SearchResults | null;
}
