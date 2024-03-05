import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { searchFeature } from "./search.feature";
import { SearchEffects } from "./search.effects";
import { provideSearchApi } from "@venusta/portal/search/api";

export function provideSearchDataAccess(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideHttpClient(),
    provideState(searchFeature),
    provideEffects(SearchEffects),
    provideSearchApi()
  ]);
}
