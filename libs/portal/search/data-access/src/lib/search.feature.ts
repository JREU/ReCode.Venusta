import { createFeature } from "@ngrx/store";
import { StoreUtil } from '@venusta/portal/shared/utils';
import { searchReducer } from "./search.reducer";

export const searchFeature = createFeature({
  name: StoreUtil.FeatureKeys.Search,
  reducer: searchReducer
});
