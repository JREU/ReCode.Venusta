import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { provideState } from "@ngrx/store";
import { portalFeature } from "@venusta/portal/shared/data-access";

export function providePortalDataAccess(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideState(portalFeature)
  ]);
}
