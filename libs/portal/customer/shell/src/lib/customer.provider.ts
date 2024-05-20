import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { provideCustomerDataAccess } from "@venusta/portal/customer/data-access";
import { provideCustomerApi } from "@venusta/portal/customer/api";

export function provideCustomer(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideCustomerDataAccess(),
    provideCustomerApi()
  ]);
}
