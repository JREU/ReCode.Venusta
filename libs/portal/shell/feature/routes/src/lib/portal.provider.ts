import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideAppointment } from '@venusta/portal/appointment/shell';
import { provideCustomer } from '@venusta/portal/customer/shell';
import { provideSearch } from '@venusta/portal/search/shell';
import { providePortalDataAccess } from '@venusta/portal/shared/data-access';

export function providePortal(): EnvironmentProviders {
  return makeEnvironmentProviders([
    providePortalDataAccess(),
    provideCustomer(),
    provideAppointment(),
    provideSearch(),
  ]);
}
