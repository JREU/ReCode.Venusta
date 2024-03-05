import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerApi } from "@venusta/portal/customer/api";
import { SearchApi } from "./search.api";
import { CustomerApiModule } from '@venusta/portal/customer/api'

@NgModule({
  imports: [CommonModule, CustomerApiModule],
  providers: [
    SearchApi,
    CustomerApi
  ]
})
export class SearchApiModule {}
