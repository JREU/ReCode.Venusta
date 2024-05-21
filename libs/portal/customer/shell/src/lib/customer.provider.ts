import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideCustomerApi } from '@venusta/portal/customer/api';
import { provideCustomerDataAccess } from '@venusta/portal/customer/data-access';

export function provideCustomer(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideCustomerDataAccess(),
    provideCustomerApi(),
  ]);
}
