import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { provideSearchApi } from "@venusta/portal/search/api";
import { provideSearchDataAccess } from "@venusta/portal/search/data-access";

export function provideSearch(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideSearchDataAccess(),
    provideSearchApi()
  ]);
}
