import { createReducer, on } from "@ngrx/store";
import { SearchState } from "./search.state";
import { searchApiActions } from "./actions";

const initialState: SearchState = {
  results: null
}

export const searchReducer = createReducer<SearchState>(
  initialState,
  on(searchApiActions.searchSuccess, (state, { results }) => ({
    ...state,
    results: results
  })),
  on(searchApiActions.searchFailure, (state) => ({
    ...state,
    results: null
  }))
);
