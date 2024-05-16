import { provideHttpClient } from '@angular/common/http';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { CustomerEffects } from './customer.effects';
import { customerFeature } from './customer.feature';
import { CustomerService } from './customer.service';

export function provideCustomerDataAccess(): EnvironmentProviders {
  return makeEnvironmentProviders([
    CustomerService,
    provideHttpClient(),
    provideState(customerFeature),
    provideEffects(CustomerEffects),
  ]);
}
