import { createFeature } from "@ngrx/store";
import { StoreUtil } from '@venusta/portal/shared/utils';
import { portalReducer } from "./portal.reducer";

export const portalFeature = createFeature({
  name: StoreUtil.FeatureKeys.Portal,
  reducer: portalReducer
});
