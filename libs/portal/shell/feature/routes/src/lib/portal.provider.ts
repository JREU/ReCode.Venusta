import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { provideSearchApi } from "@venusta/portal/search/api";
import { provideSearchDataAccess } from "@venusta/portal/search/data-access";
import { providePortalDataAccess } from "@venusta/portal/shared/data-access";
import { provideSearch } from "@venusta/portal/search/shell";
import { provideCustomer } from "@venusta/portal/customer/shell";
import { provideAppointment } from "@venusta/portal/appointment/shell";

export function providePortal(): EnvironmentProviders {
  return makeEnvironmentProviders([
    providePortalDataAccess(),
    provideCustomer(),
    provideAppointment(),
    provideSearch()
  ]);
}
