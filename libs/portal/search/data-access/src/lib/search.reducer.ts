import { createReducer, on } from '@ngrx/store';
import { searchApiActions } from './actions';
import { SearchState } from './search.state';

const initialState: SearchState = {
  results: null,
};

export const searchReducer = createReducer<SearchState>(
  initialState,
  on(
    searchApiActions.searchSuccess,
    (state, { results }): SearchState => ({
      ...state,
      results: results,
    }),
  ),
  on(
    searchApiActions.searchFailure,
    (state): SearchState => ({
      ...state,
      results: null,
    }),
  ),
);
