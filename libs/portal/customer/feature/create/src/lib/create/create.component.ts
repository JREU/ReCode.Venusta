import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from "@venusta/customer/ui/customer-form";
import { MatCardModule } from "@angular/material/card";
import { Store } from "@ngrx/store";
import { customerPageActions, CustomerState } from "@venusta/portal/customer/data-access";
import { Customer } from "@venusta/portal/customer/models";

@Component({
  selector: 'venusta-create-customer',
  standalone: true,
  imports: [CommonModule, CustomerFormComponent, MatCardModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateCustomerComponent {
  private readonly store = inject(Store<CustomerState>);
  onSubmit(customer: Omit<Customer, 'id'>): void {
    this.store.dispatch(customerPageActions.createCustomer({ customer }));
  }
}
