import { createFeature } from "@ngrx/store";
import { StoreUtil } from '@venusta/portal/shared/utils';
import { appointmentReducer } from "./appointment.reducer";

export const appointmentFeature = createFeature({
  name: StoreUtil.FeatureKeys.Appointment,
  reducer: appointmentReducer
});
