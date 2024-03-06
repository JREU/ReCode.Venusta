import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { AppointmentService } from "./appointment.service";
import { appointmentFeature } from "./appointment.feature";
import { AppointmentEffects } from "./appointment.effects";

export function provideAppointmentDataAccess(): EnvironmentProviders {
  return makeEnvironmentProviders([
    AppointmentService,
    provideHttpClient(),
    provideState(appointmentFeature),
    provideEffects(AppointmentEffects)
  ]);
}
