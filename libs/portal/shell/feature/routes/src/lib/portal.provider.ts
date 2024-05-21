import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideSearch } from '@venusta/portal/search/shell';
import { providePortalDataAccess } from '@venusta/portal/shared/data-access';

export function providePortal(): EnvironmentProviders {
  return makeEnvironmentProviders([providePortalDataAccess(), provideSearch()]);
}
