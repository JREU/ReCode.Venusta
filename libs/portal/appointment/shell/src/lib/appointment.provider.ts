import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { provideCustomerDataAccess } from "@venusta/portal/customer/data-access";
import { provideCustomerApi } from "@venusta/portal/customer/api";

export function provideAppointment(): EnvironmentProviders {
  return makeEnvironmentProviders([

  ]);
}
