import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { customerFeature } from "@venusta/portal/customer/data-access";
import { CustomerEffects } from "./customer.effects";
import { CustomerService } from "./customer.service";

export function provideCustomerDataAccess(): EnvironmentProviders {
  return makeEnvironmentProviders([
    CustomerService,
    provideHttpClient(),
    provideState(customerFeature),
    provideEffects(CustomerEffects)
  ]);
}
