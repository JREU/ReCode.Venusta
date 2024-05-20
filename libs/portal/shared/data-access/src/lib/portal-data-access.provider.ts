import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { PortalEffects } from './portal.effects';
import { portalFeature } from './portal.feature';

export function providePortalDataAccess(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideState(portalFeature),
    provideEffects(PortalEffects),
  ]);
}
