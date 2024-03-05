import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { provideCustomerApi } from "@venusta/portal/customer/api";
import { provideHttpClient } from "@angular/common/http";
import { SearchApi } from "./search.api";

export function provideSearchApi(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideHttpClient(),
    provideCustomerApi(),
    SearchApi
  ]);
}
