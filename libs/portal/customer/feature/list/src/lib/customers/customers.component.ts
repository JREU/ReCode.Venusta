import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DataAccessModule,
  customerPageActions,
  CustomerState,
  customerFeature
} from "@venusta/portal/customer/data-access";
import { Store } from "@ngrx/store";
import { Customer } from "@venusta/portal/customer/models";
import { Observable } from "rxjs";

@Component({
  selector: 'venusta-customers',
  standalone: true,
  imports: [CommonModule, DataAccessModule],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  private readonly store =  inject(Store<CustomerState>);

  protected customers$!: Observable<Customer[] | null>;

  ngOnInit(): void {
    this.store.dispatch(customerPageActions.loadCustomers());
    this.customers$ = this.store.select(customerFeature.selectCustomers);
  }
}
