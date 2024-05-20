import { createFeature } from "@ngrx/store";
import { StoreUtil } from '@venusta/portal/shared/utils';
import { customerReducer } from "./customer.reducer";

export const customerFeature = createFeature({
  name: StoreUtil.FeatureKeys.Customer,
  reducer: customerReducer
});
