import { provideHttpClient } from '@angular/common/http';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { CustomerApi } from './customer.api';

export function provideCustomerApi(): EnvironmentProviders {
  return makeEnvironmentProviders([provideHttpClient(), CustomerApi]);
}
