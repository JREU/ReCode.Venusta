import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from "@venusta/customer/ui/customer-form";
import { Customer } from "@venusta/portal/customer/models";
import {
  customerFeature,
  customerPageActions,
  CustomerState,
  DataAccessModule
} from "@venusta/portal/customer/data-access";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filterDefined } from "@venusta/shared/utils";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'venusta-edit-customer',
  standalone: true,
  imports: [CommonModule, CustomerFormComponent, DataAccessModule, MatCardModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly store = inject(Store<CustomerState>);
  protected customer$!: Observable<Customer>;

  ngOnInit(): void {
    const customerId = parseInt(this.route.snapshot.paramMap.get('customerId') ?? '');
    this.store.dispatch(customerPageActions.loadCustomer({ customerId }));
    this.customer$ = this.store.select(customerFeature.selectCustomer).pipe(filterDefined);
  }

  onSubmit(updatedCustomer: Partial<Customer>, customer: Customer): void {
    const model = {
      ...customer,
      ...updatedCustomer
    } as Customer;

    this.store.dispatch(customerPageActions.updateCustomer({ customer: model }));
  }
}
