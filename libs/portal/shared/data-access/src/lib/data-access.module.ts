import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideState } from "@ngrx/store";
import { portalFeature } from "./portal.feature";

@NgModule({
  imports: [CommonModule],
  providers: [
    provideState(portalFeature)
  ]
})
export class PortalDataAccessModule {}
