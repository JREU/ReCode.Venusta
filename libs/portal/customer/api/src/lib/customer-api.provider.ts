import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { CustomerApi } from "@venusta/portal/customer/api";
import { provideHttpClient } from "@angular/common/http";

export function provideCustomerApi(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideHttpClient(),
    CustomerApi
  ]);
}
