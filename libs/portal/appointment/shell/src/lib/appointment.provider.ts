import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { provideAppointmentDataAccess } from "@venusta/portal/appointment/data-access";

export function provideAppointment(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideAppointmentDataAccess()
  ]);
}
