import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from "@angular/common/http";
import { provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { customerFeature } from "./customer.feature";
import { CustomerEffects } from "./customer.effects";

@NgModule({
  imports: [CommonModule],
  providers: [
    provideHttpClient(),
    provideState(customerFeature),
    provideEffects(CustomerEffects),
  ]
})
export class DataAccessModule {}
