import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerApi } from "./customer.api";
import { DataAccessModule } from "@venusta/portal/customer/data-access";

@NgModule({
  imports: [CommonModule, DataAccessModule]
})
export class CustomerApiModule {}
