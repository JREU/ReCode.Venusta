import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomerFormComponent } from '@venusta/customer/ui/customer-form';
import {
  CustomerState,
  customerPageActions,
} from '@venusta/portal/customer/data-access';
import { Customer } from '@venusta/portal/customer/models';
import { CardComponent } from '@venusta/shared/ui';

@Component({
  selector: 'venusta-create-customer',
  standalone: true,
  imports: [CommonModule, CustomerFormComponent, MatCardModule, CardComponent],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateCustomerComponent {
  private readonly store = inject(Store<CustomerState>);
  private readonly router = inject(Router);
  onSubmit(customer: Omit<Customer, 'id'>): void {
    this.store.dispatch(customerPageActions.createCustomer({ customer }));
  }

  onCancel(): void {
    this.router.navigate(['klanten']);
  }
}
