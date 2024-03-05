import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from "@angular/common/http";
import { provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { searchFeature } from "./search.feature";
import { SearchEffects } from "./search.effects";
import { SearchApiModule } from "@venusta/portal/search/api";


@NgModule({
  imports: [CommonModule, SearchApiModule],
  providers: [
    provideHttpClient(),
    provideState(searchFeature),
    provideEffects(SearchEffects)
  ]
})
export class DataAccessModule {}
